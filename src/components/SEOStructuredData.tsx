import Script from 'next/script';

export default function SEOStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Celestia Scope",
    "description": "Discover your cosmic path with personalized horoscopes, birth charts, and mystical insights. Your daily celestial guidance awaits.",
    "url": "https://celestia-scope.vercel.app",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://celestia-scope.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Celestia Scope",
      "logo": {
        "@type": "ImageObject",
        "url": "https://celestia-scope.vercel.app/images/celestia-scope-logo.png"
      }
    },
    "sameAs": [
      "https://github.com/artifaks/celestial-calendar-app"
    ]
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Celestia Scope",
    "description": "Mystical astrology platform providing daily horoscopes, birth charts, and cosmic insights",
    "url": "https://celestia-scope.vercel.app",
    "logo": "https://celestia-scope.vercel.app/images/celestia-scope-logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "areaServed": "Worldwide",
    "serviceType": "Astrology Services"
  };

  const appData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Celestia Scope",
    "description": "Astrology and horoscope application with daily insights, birth charts, and cosmic guidance",
    "url": "https://celestia-scope.vercel.app",
    "applicationCategory": "LifestyleApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Daily Horoscopes",
      "Birth Chart Calculator",
      "Lunar Rituals",
      "Cosmic Forecasts",
      "Spiritual Journaling",
      "Astrological Insights"
    ]
  };

  return (
    <>
      <Script
        id="structured-data-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Script
        id="structured-data-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <Script
        id="structured-data-app"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(appData),
        }}
      />
    </>
  );
} 