/**
 * Features Section Component
 * Estilo Webflow: Seção de recursos/características
 */

'use client';

import { useEffect, useRef } from 'react';
import type { FeaturesSchema } from './Features.schema';
import styles from './Features.module.css';

export function Features({ id, content, settings }: FeaturesSchema) {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || settings.animation === 'none') return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add(styles.animated);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    observer.observe(section);
    
    return () => observer.disconnect();
  }, [settings.animation]);
  
  return (
    <section
      ref={sectionRef}
      id={id}
      className={styles.features}
      data-theme={settings.theme || 'light'}
      data-layout={settings.layout || 'grid'}
      data-animation={settings.animation || 'fade'}
      data-align={settings.align || 'center'}
    >
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          {content.eyebrow && (
            <span className={styles.eyebrow}>{content.eyebrow}</span>
          )}
          
          <h2 className={styles.headline}>{content.headline}</h2>
          
          {content.subheadline && (
            <p className={styles.subheadline}>{content.subheadline}</p>
          )}
        </div>
        
        {/* Features Grid/List */}
        <div 
          className={styles.featuresGrid}
          style={{
            '--columns': settings.columns || 3,
          } as React.CSSProperties}
        >
          {content.features.map((feature, index) => (
            <div
              key={feature.id}
              className={styles.featureCard}
              data-index={index}
            >
              {feature.icon && (
                <div className={styles.iconWrapper}>
                  <span className={styles.icon}>{feature.icon}</span>
                </div>
              )}
              
              {feature.image && (
                <div className={styles.imageWrapper}>
                  <img
                    src={feature.image.src}
                    alt={feature.image.alt}
                    className={styles.image}
                  />
                </div>
              )}
              
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              
              <p className={styles.featureDescription}>
                {feature.description}
              </p>
              
              {feature.link && (
                <a href={feature.link.href} className={styles.featureLink}>
                  {feature.link.text}
                  <span className={styles.arrow}>→</span>
                </a>
              )}
            </div>
          ))}
        </div>
        
        {/* CTA */}
        {content.cta && (
          <div className={styles.ctaWrapper}>
            <a href={content.cta.href} className={styles.cta}>
              {content.cta.text}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
