/**
 * Hero Section Component
 * Estilo Webflow: Seção hero totalmente personalizável
 */

'use client';

import { useEffect, useRef } from 'react';
import type { HeroSchema } from './Hero.schema';
import styles from './Hero.module.css';

export function Hero({ id, content, settings }: HeroSchema) {
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
      className={styles.hero}
      data-theme={settings.theme || 'light'}
      data-layout={settings.layout || 'centered'}
      data-animation={settings.animation || 'fade'}
      data-height={settings.height || 'screen'}
      data-align={settings.align || 'center'}
      style={backgroundStyle}
    >
      {settings.background?.type === 'video' && settings.background.value && (
        <div className={styles.videoBackground}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className={styles.video}
          >
            <source src={settings.background.value} type="video/mp4" />
          </video>
          <div className={styles.videoOverlay} />
        </div>
      )}
      
      <div className={styles.container}>
        <div className={styles.content}>
          {content.eyebrow && (
            <span className={styles.eyebrow} data-animation-delay="0">
              {content.eyebrow}
            </span>
          )}
          
          <h1 className={styles.headline} data-animation-delay="1">
            {content.headline}
          </h1>
          
          {content.subheadline && (
            <p className={styles.subheadline} data-animation-delay="2">
              {content.subheadline}
            </p>
          )}
          
          {content.description && (
            <p className={styles.description} data-animation-delay="3">
              {content.description}
            </p>
          )}
          
          {content.cta && (content.cta.primary || content.cta.secondary) && (
            <div className={styles.ctaGroup} data-animation-delay="4">
              {content.cta.primary && (
                <a
                  href={content.cta.primary.href}
                  className={`${styles.ctaButton} ${styles[content.cta.primary.variant || 'solid']}`}
                  data-variant="primary"
                >
                  {content.cta.primary.text}
                </a>
              )}
              
              {content.cta.secondary && (
                <a
                  href={content.cta.secondary.href}
                  className={`${styles.ctaButton} ${styles[content.cta.secondary.variant || 'outline']}`}
                  data-variant="secondary"
                >
                  {content.cta.secondary.text}
                </a>
              )}
            </div>
          )}
        </div>
        
        {content.image && settings.layout === 'split' && (
          <div className={styles.imageWrapper} data-animation-delay="5">
            <img
              src={content.image.src}
              alt={content.image.alt}
              width={content.image.width}
              height={content.image.height}
              className={styles.image}
            />
          </div>
        )}
      </div>
    </section>
  );
}
