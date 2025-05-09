type Organization = {
  name: string;
  url: string;
  logo: string;
  description: string;
};

type Product = {
  name: string;
  description: string;
  image: string;
  manufacturer: Organization;
};

export function generateOrganizationSchema(): string { // Removed locale parameter
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "url": "https://www.adhesivewheelweight.com",
    "name": "YILSA Wheel Weight Machines",
    "logo": "https://www.adhesivewheelweight.com/yilsa-logo.svg",
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+90-xxx-xxx-xxxx",
      "contactType": "sales",
      "areaServed": "Worldwide",
      "availableLanguage": ["en"] // Updated availableLanguage
    }],
    "sameAs": [
      "https://www.linkedin.com/company/yilsa",
      "https://www.youtube.com/@yilsa"
    ]
  };

  return JSON.stringify(schema);
}

export function generateProductSchema(product: Product): string { // Removed locale parameter
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": product.image,
    "description": product.description,
    "manufacturer": {
      "@type": "Organization",
      "name": product.manufacturer.name,
      "url": product.manufacturer.url,
      "logo": product.manufacturer.logo
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD",
      "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "currency": "USD"
        },
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": "Worldwide"
        }
      }
    }
  };

  return JSON.stringify(schema);
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]): string { // Removed locale parameter
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://www.adhesivewheelweight.com${item.url}`
    }))
  };

  return JSON.stringify(schema);
}
