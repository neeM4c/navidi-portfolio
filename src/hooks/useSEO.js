import { useEffect } from 'react';

const useSEO = ({ title, description, url, image, type = "website", schema, lang = "en" }) => {
    useEffect(() => {
        // 1. Update Title
        const prevTitle = document.title;
        if (title) {
            document.title = title;
        }

        // 2. Update Meta Tags
        const updateMeta = (name, content, property = false) => {
            if (!content) return null;
            let element = property
                ? document.querySelector(`meta[property="${name}"]`)
                : document.querySelector(`meta[name="${name}"]`);

            const prevContent = element ? element.getAttribute('content') : null;

            if (!element) {
                element = document.createElement('meta');
                if (property) {
                    element.setAttribute('property', name);
                } else {
                    element.setAttribute('name', name);
                }
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
            return { element, prevContent };
        };

        // Store previous values for cleanup
        const metaChanges = [
            updateMeta('description', description),
            updateMeta('og:title', title, true),
            updateMeta('og:description', description, true),
            updateMeta('og:url', url, true),
            updateMeta('og:image', image, true),
            updateMeta('og:type', type, true),
            updateMeta('og:locale', lang === 'fa' ? 'fa_IR' : 'en_US', true),
            updateMeta('twitter:title', title, true),
            updateMeta('twitter:description', description, true),
            updateMeta('twitter:image', image, true),
        ];

        // 3. Update Lang Attribute
        const prevLang = document.documentElement.lang;
        const prevDir = document.documentElement.dir;
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';

        // 4. Update Schema.org JSON-LD
        const scriptId = 'json-ld-data';
        let script = document.getElementById(scriptId);
        let prevSchema = null;

        if (!script) {
            script = document.createElement('script');
            script.id = scriptId;
            script.type = 'application/ld+json';
            document.head.appendChild(script);
        } else {
            prevSchema = script.innerText;
        }

        if (schema) {
            script.innerText = JSON.stringify(schema);
        }

        // Cleanup: Restore previous values
        return () => {
            document.title = prevTitle;
            document.documentElement.lang = prevLang;
            document.documentElement.dir = prevDir;

            metaChanges.forEach(change => {
                if (!change) return;
                const { element, prevContent } = change;
                if (prevContent !== null) {
                    element.setAttribute('content', prevContent);
                } else {
                    // If it didn't exist before, arguably we should remove it, 
                    // but usually keep it is fine or clear it. 
                    // However, for single page apps, restoring to 'undefined' might be better.
                    // But robustly, we just restore previous content.
                    // If prevContent is null, it means it didn't exist.
                    // It's safer to just set it to empty string or leave it if it's not harmful.
                    // For now, let's just leave it populated/updated by parent if parent runs.
                    // Actually, restoring null is valid only if we remove the element.
                    // Simplifying: We only restore if prevContent was valid string.
                }
            });

            if (prevSchema !== null) {
                script.innerText = prevSchema;
            } else {
                script.innerText = '';
            }
        };
    }, [title, description, url, image, type, schema, lang]);
};

export default useSEO;
