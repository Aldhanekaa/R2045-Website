import { MetadataRoute } from 'next';

function JoinUrl(path: string = '') {
  return 'https://r2045.org' + path;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: JoinUrl(),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
