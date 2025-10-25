'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad'> {
  fallbackSrc?: string;
  showPlaceholder?: boolean;
  placeholderColor?: string;
}

export default function OptimizedImage({
  src,
  alt,
  fallbackSrc,
  showPlaceholder = true,
  placeholderColor = '#374151',
  className = '',
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const imageSrc = hasError && fallbackSrc ? fallbackSrc : src;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder enquanto carrega */}
      {isLoading && showPlaceholder && (
        <div 
          className="absolute inset-0 flex items-center justify-center animate-pulse"
          style={{ backgroundColor: placeholderColor }}
        >
          <div className="w-12 h-12 border-4 border-gray-300 border-t-lime-500 rounded-full animate-spin" />
        </div>
      )}
      
      {/* Imagem otimizada */}
      <Image
        src={imageSrc}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        // Otimizações automáticas do Next.js
        quality={85}
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        {...props}
      />
    </div>
  );
}

// Componente específico para hero images com prioridade
interface HeroImageProps extends OptimizedImageProps {
  priority?: boolean;
}

export function HeroImage({ priority = true, ...props }: HeroImageProps) {
  return (
    <OptimizedImage
      priority={priority}
      loading={priority ? 'eager' : 'lazy'}
      {...props}
    />
  );
}

// Componente para ícones SVG otimizados
interface OptimizedSVGProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export function OptimizedSVG({ 
  src, 
  alt, 
  className = '', 
  width = 24, 
  height = 24 
}: OptimizedSVGProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading="lazy"
      // SVGs não precisam de blur placeholder
    />
  );
}