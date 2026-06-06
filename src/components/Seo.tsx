import React from 'react';
import { Helmet } from 'react-helmet-async';

type SeoProps = {
  title: string;
  description: string;
  url?: string;
  keywords?: string[];
  image?: string;
  jsonLd?: object;
};

export default function Seo({ title, description, url, keywords = [], image, jsonLd }: SeoProps) {
  const siteName = 'Abiman & Company';
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link rel="canonical" href={url ?? '/'} />

      {/* Open Graph */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {/* JSON-LD structured data */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
