/**
 * CTA Section Component
 * Estilo Webflow: Call to Action poderoso
 */

'use client';

import { useEffect, useRef } from 'react';
import type { CTASchema } from './CTA.schema';
import styles from './CTA.module.css';

export function CTA({ id, content, settings }: CTASchema) {
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
  
  const backgroundStyle: React.CSSProperties = {};
  
  if (settings.background?.type === 'color') {
    backgroundStyle.backgroundColor = settings.background.value;
  } else if (settings.background?.type === 'gradient') {
    backgroundStyle.background = settings.background.value;
  } else if (settings.background?.type === 'image') {
    backgroundStyle.backgroundImage = `url(${settings.background.value})`;
    backgroundStyle.backgroundSize = 'cover';
    backgroundStyle.backgroundPosition = 'center';
  }
  
  return (
    <section
      ref={sectionRef}
      id={id}
      className={styles.cta}
      data-theme={settings.theme || 'primary'}
      data-layout={settings.layout || 'centered'}
      data-animation={settings.animation || 'fade'}
      style={backgroundStyle}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.headline}>{content.headline}</h2>
          
          {content.subheadline && (
            <p className={styles.subheadline}>{content.subheadline}</p>
          )}
          
          <div className={styles.ctaGroup}>
            {content.cta.primary && (
              <a
                href={content.cta.primary.href}
                className={`${styles.ctaButton} ${styles.primary}`}
              >
                {content.cta.primary.text}
              </a>
            )}
            
            {content.cta.secondary && (
              <a
                href={content.cta.secondary.href}
                className={`${styles.ctaButton} ${styles.secondary}`}
              >
                {content.cta.secondary.text}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
