import { useEffect } from 'react';

const SEO = ({ 
  title = "AJ Portfolio — Abdisa Jemal | Full-Stack Developer",
  description = "Full-Stack Developer specializing in React, Node.js, and modern web technologies. Building scalable web applications and management systems.",
  image = "/profile.png",
  url = window.location.href
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const metaTags = {
      'description': description,
      'og:title': title,
      'og:description': description,
      'og:image': image,
      'og:url': url,
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': image,
    };

    Object.entries(metaTags).forEach(([name, content]) => {
      const property = name.startsWith('og:') ? 'property' : 'name';
      let meta = document.querySelector(`meta[${property}="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(property, name);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    });

    // Add JSON-LD structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Abdisa Jemal",
      "jobTitle": "Full-Stack Developer",
      "url": url,
      "image": image,
      "sameAs": [
        "https://github.com/Abdisaj112",
        "https://linkedin.com/in/abdisa-jemal"
      ],
      "knowsAbout": [
        "React",
        "Node.js",
        "TypeScript",
        "MongoDB",
        "Full-Stack Development"
      ]
    };

    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);

  }, [title, description, image, url]);

  return null;
};

export default SEO;
