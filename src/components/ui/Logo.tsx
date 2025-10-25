import Image from 'next/image';
import { LogoProps } from '../../types';

export default function Logo({ size = 'md', className = '' }: LogoProps) {
  // Tamanhos da imagem do logo
  const imageSizes = {
    sm: 120,
    md: 150,
    lg: 200
  };

  return (
    <div className={`flex items-center ${className}`} key="logo-v2">
      {/* Logo em imagem */}
      <Image 
        src="/imagens/logo.png"
        alt="VERDYA Logo"
        width={imageSizes[size]}
        height={imageSizes[size]}
        className="object-contain"
        priority
        unoptimized
      />
    </div>
  );
}