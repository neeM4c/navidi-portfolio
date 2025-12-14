import { useEffect } from 'react';

const useSEO = ({ title, description, url, image, type = "website", schema, lang = "en" }) => {
    useEffect(() => {
        // 1. Update Title
        const prevTitle = document.title;
        if (title) {
            document.title = title;
        }

        // 2. Update Link Tags (Canonical)
        let linkCanonical = document.querySelector("link[rel='canonical']");
        if (!linkCanonical) {
            linkCanonical = document.createElement('link');
            linkCanonical.setAttribute('rel', 'canonical');
            document.head.appendChild(linkCanonical);
        }
        const prevCanonical = linkCanonical.getAttribute('href');
        linkCanonical.setAttribute('href', url);

        // 3. Update Meta Tags
        const updateMeta = (name, content, attribute = 'name') => {
            if (!content) return null;
            let element = document.querySelector(`meta[${attribute}="${name}"]`);

            const prevContent = element ? element.getAttribute('content') : null;

            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attribute, name);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
            return { element, prevContent, attribute, name };
        };

        // Store previous values for cleanup
        const metaChanges = [
            updateMeta('description', description),
            // Open Graph (uses 'property')
            updateMeta('og:title', title, 'property'),
            updateMeta('og:description', description, 'property'),
            updateMeta('og:url', url, 'property'),
            updateMeta('og:image', image, 'property'),
            updateMeta('og:type', type, 'property'),
            updateMeta('og:locale', lang === 'fa' ? 'fa_IR' : 'en_US', 'property'),
            // Twitter (uses 'name')
            updateMeta('twitter:card', 'summary_large_image'),
            updateMeta('twitter:title', title),
            updateMeta('twitter:description', description),
            updateMeta('twitter:image', image),
        ];

        // 4. Update Lang Attribute
        const prevLang = document.documentElement.lang;
        const prevDir = document.documentElement.dir;
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';

        // 5. Update Schema.org JSON-LD
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
            linkCanonical.setAttribute('href', prevCanonical || ''); // Restore or clear
            document.documentElement.lang = prevLang;
            document.documentElement.dir = prevDir;

            metaChanges.forEach(change => {
                if (!change) return;
                const { element, prevContent, attribute, name } = change;
                if (prevContent !== null) {
                    element.setAttribute('content', prevContent);
                } else {
                    // Start clean up: better to strictly remove if we added it, but keeping it empty is safer for SPA.
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
