/**
 * Page Builder Component
 * Estilo Webflow: Renderiza seções dinamicamente
 */

'use client';

import { Hero } from './sections/Hero/Hero';
import { Features } from './sections/Features/Features';
import { CTA } from './sections/CTA/CTA';
import type { HeroSchema } from './sections/Hero/Hero.schema';
import type { FeaturesSchema } from './sections/Features/Features.schema';
import type { CTASchema } from './sections/CTA/CTA.schema';

// Mapa de componentes de seção
const sectionComponents = {
  hero: Hero,
  features: Features,
  cta: CTA,
} as const;

// Union type de todos os schemas de seção
export type SectionSchema = HeroSchema | FeaturesSchema | CTASchema;

export interface PageBuilderProps {
  sections: SectionSchema[];
}

/**
 * PageBuilder - Renderiza seções dinamicamente
 * 
 * @example
 * ```tsx
 * <PageBuilder sections={[
 *   { id: '1', type: 'hero', content: {...}, settings: {...} },
 *   { id: '2', type: 'features', content: {...}, settings: {...} },
 * ]} />
 * ```
 */
export function PageBuilder({ sections }: PageBuilderProps) {
  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <>
      {sections.map((section) => {
        const SectionComponent = sectionComponents[section.type];

        if (!SectionComponent) {
          console.warn(`Section type "${section.type}" not found`);
          return null;
        }

        // Type assertion necessária devido ao union type
        return <SectionComponent key={section.id} {...(section as any)} />;
      })}
    </>
  );
}
