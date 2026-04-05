// SEO.js
import { Helmet } from 'react-helmet-async';

const SEO = ({ page, description }) => {
  const baseUrl = "https://skarukas.com";
  if (!(page.PAGE_PATH && page.PAGE_NAME)) {
    console.warn("Can't set React helmet for the given page", page);
    return null
  }
  const fullUrl = `${baseUrl}${page.PAGE_PATH}`;
  let title = "Stephen Karukas - " + page.PAGE_NAME
  return (  
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={fullUrl} />
      <meta name="description" content={description ?? title} />
    </Helmet>
  );
};

export default SEO;