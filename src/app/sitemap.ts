import { MetadataRoute } from 'next';

// Configuração necessária para export estático
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://verdya.com.br';
  
  // URLs estáticas principais
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/#about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  // URLs das páginas de tecnologias
  const techPages = [
    'ia-generativa',
    'cloud',
    'mobile', 
    'reference-architecture',
    'automation',
    'data-analytics'
  ].map((tech) => ({
    url: `${baseUrl}/tecnologias/${tech}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [
    ...staticPages,
    ...techPages,
  ];
}