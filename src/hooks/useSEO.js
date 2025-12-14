import { useEffect } from 'react';

const useSEO = ({ title, description, keywords, canonicalUrl, og, twitter }) => {
    useEffect(() => {
        // Helper to create or update meta tags
        const setMeta = (attr, key, value) => {
            let element = document.querySelector(`meta[${attr}="${key}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attr, key);
                document.head.appendChild(element);
            }
            element.setAttribute('content', value);
        };

        // Standard SEO
        if (title) document.title = title;
        if (description) setMeta('name', 'description', description);
        if (keywords) setMeta('name', 'keywords', keywords.join(', '));

        // Canonical URL
        if (canonicalUrl) {
            let linkEl = document.querySelector('link[rel="canonical"]');
            if (!linkEl) {
                linkEl = document.createElement('link');
                linkEl.setAttribute('rel', 'canonical');
                document.head.appendChild(linkEl);
            }
            linkEl.setAttribute('href', canonicalUrl);
        }

        // Open Graph
        if (og) {
            setMeta('property', 'og:title', og.title || title);
            setMeta('property', 'og:description', og.description || description);
            setMeta('property', 'og:url', og.url || canonicalUrl);
            if (og.image) setMeta('property', 'og:image', og.image);
            if (og.type) setMeta('property', 'og:type', og.type);
        }

        // Twitter
        if (twitter) {
            setMeta('name', 'twitter:card', twitter.card || 'summary_large_image');
            setMeta('name', 'twitter:title', twitter.title || title);
            setMeta('name', 'twitter:description', twitter.description || description);
            if (twitter.image) setMeta('name', 'twitter:image', twitter.image);
        }

    }, [title, description, keywords, canonicalUrl, og, twitter]);
};

export default useSEO;
