/**
 * Logo Component (Primitive)
 * Estilo Webflow: Componente de logo reutilizável
 */

import Image from 'next/image';

export interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
}

const imageSizes = {
  sm: 120,
  md: 150,
  lg: 200,
} as const;

/**
 * Logo - Componente de logo da marca
 * 
 * @example
 * ```tsx
 * <Logo size="md" />
 * ```
 */
export function Logo({ size = 'md', className = '', href }: LogoProps) {
  const logoImage = (
    <Image
      src="/imagens/logo.png"
      alt="VERDYA Logo"
      width={imageSizes[size]}
      height={imageSizes[size]}
      className="object-contain"
      priority
      unoptimized
    />
  );

  if (href) {
    return (
      <a href={href} className={`flex items-center ${className}`}>
        {logoImage}
      </a>
    );
  }

  return <div className={`flex items-center ${className}`}>{logoImage}</div>;
}
