import { Helmet } from "react-helmet-async";

interface GlobalSEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: string;
  keywords?: string;
}

export const GlobalSEO = ({
  title,
  description,
  path,
  image = "https://automatetosell.com/og-default.jpg",
  type = "website",
  keywords
}: GlobalSEOProps) => {
  const fullUrl = `https://automatetosell.com${path}`;
  const fullTitle = title.includes("Automate to Sell") ? title : `${title} | Automate to Sell`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#020617" />

      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content="Automate to Sell" />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};
