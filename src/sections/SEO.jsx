import { Head } from "@tanstack/react-head";

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />

      <meta
        property="og:image"
        content="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
      />

      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
