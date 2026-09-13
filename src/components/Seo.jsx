const SITE_URL = 'https://veridiancarehome.inc'
const SITE_NAME = 'Veridian Care Home'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`

/**
 * Per-route document metadata.
 *
 * React 19 hoists any <title>, <meta>, and <link> rendered here straight
 * into <head>, so each route gets its own title, description, canonical,
 * and social tags instead of everyone sharing the ones baked into
 * index.html. Googlebot's render pass (and any other JS-executing crawler)
 * picks these up; index.html keeps a sensible static default for the
 * homepage and for crawlers that don't run JS (social link unfurlers).
 */
function Seo({ title, description, path = '/', image = DEFAULT_IMAGE, noindex = false }) {
  const url = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta
        name="robots"
        content={noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'}
      />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_CA" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  )
}

export default Seo
