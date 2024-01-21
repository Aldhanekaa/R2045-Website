import { MetadataRoute } from 'next';

function JoinUrl(path: string = '') {
  return 'https://r2045.com' + path;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: JoinUrl(),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: JoinUrl('/get-involved/info-for-parents'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: JoinUrl('/get-involved/info-for-schools'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: JoinUrl('/about/first'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: JoinUrl('/programs/ftc'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: JoinUrl('/programs/ftc/start-a-team'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: JoinUrl('/programs/ftc/costs-and-registration'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
