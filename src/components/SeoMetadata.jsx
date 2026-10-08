import { useEffect } from "react";
import { seoPages, siteSeo } from "../data/seoData";
import { faqs } from "../data/faqData";
import { getProjectBySlug } from "./sections/projects/projectsData";

function setMeta(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([name, value]) =>
    element.setAttribute(name, value),
  );
}

export default function SeoMetadata({ pageKey }) {
  useEffect(() => {
    let page = seoPages[pageKey] || seoPages.home;
    const projectMatch = window.location.pathname.match(
      /^\/projects\/([^/]+)\/?$/,
    );
    if (projectMatch) {
      const project = getProjectBySlug(projectMatch[1]);
      if (project)
        page = {
          ...seoPages.projects,
          path: `/projects/${project.slug}`,
          title: `${project.title} Elevator Project | BG Tatva`,
          description: `${project.brief} Explore the ${project.type.toLowerCase()} elevator solution by BG Tatva Elevators in ${project.location}.`,
          image: project.image,
        };
    }
    const canonicalUrl = new URL(page.path, siteSeo.siteUrl).toString();
    const imageUrl = new URL(
      page.image || siteSeo.defaultImage,
      siteSeo.siteUrl,
    ).toString();

    document.title = page.title;
    document.documentElement.lang = "en-IN";

    setMeta('meta[name="description"]', {
      name: "description",
      content: page.description,
    });
    setMeta('meta[name="robots"]', {
      name: "robots",
      content: "index, follow, max-image-preview:large",
    });
    setMeta('meta[name="theme-color"]', {
      name: "theme-color",
      content: siteSeo.themeColor,
    });
    setMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: siteSeo.siteName,
    });
    setMeta('meta[property="og:locale"]', {
      property: "og:locale",
      content: siteSeo.locale,
    });
    setMeta('meta[property="og:type"]', {
      property: "og:type",
      content: page.type || "website",
    });
    setMeta('meta[property="og:title"]', {
      property: "og:title",
      content: page.title,
    });
    setMeta('meta[property="og:description"]', {
      property: "og:description",
      content: page.description,
    });
    setMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonicalUrl,
    });
    setMeta('meta[property="og:image"]', {
      property: "og:image",
      content: imageUrl,
    });
    setMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    setMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: page.title,
    });
    setMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: page.description,
    });
    setMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: imageUrl,
    });

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    let schema = document.head.querySelector("#bg-tatva-schema");
    if (!schema) {
      schema = document.createElement("script");
      schema.id = "bg-tatva-schema";
      schema.type = "application/ld+json";
      document.head.appendChild(schema);
    }
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: siteSeo.business.name,
      url: siteSeo.siteUrl,
      image: imageUrl,
      email: siteSeo.business.email,
      telephone: siteSeo.business.telephone,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteSeo.business.city,
        addressRegion: siteSeo.business.region,
        addressCountry: siteSeo.business.country,
      },
      areaServed: { "@type": "City", name: "Bengaluru" },
      knowsAbout: [
        "Home elevators",
        "Commercial elevators",
        "Goods lifts",
        "Panoramic elevators",
        "Elevator modernisation",
        "Elevator safety systems",
        "IoT lift monitoring",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Elevator solutions",
        itemListElement: [
          "Home elevators",
          "Panoramic elevators",
          "Commercial elevators",
          "Goods lifts",
          "Elevator modernisation",
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
      },
    };
    const schemas = [localBusinessSchema];
    if (pageKey === "faq") {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      });
    }
    schema.textContent = JSON.stringify(schemas);
  }, [pageKey]);

  return null;
}
