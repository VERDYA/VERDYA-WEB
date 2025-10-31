/**
 * Typography Component (Primitive)
 * Estilo Webflow: Componentes de tipografia reutilizáveis
 */

import type { ReactNode, HTMLAttributes } from 'react';
import styles from './Typography.module.css';

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'small' | 'caption';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  align?: 'left' | 'center' | 'right';
  color?: 'default' | 'muted' | 'primary' | 'accent';
  children: ReactNode;
}

const elementMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body: 'p',
  small: 'p',
  caption: 'span',
} as const;

/**
 * Typography - Componente de tipografia consistente
 * 
 * @example
 * ```tsx
 * <Typography variant="h1" weight="bold" align="center">
 *   Título Principal
 * </Typography>
 * ```
 */
export function Typography({
  variant = 'body',
  weight = 'normal',
  align = 'left',
  color = 'default',
  children,
  className = '',
  ...props
}: TypographyProps) {
  const Component = elementMap[variant];

  return (
    <Component
      className={`${styles.typography} ${styles[variant]} ${styles[`weight-${weight}`]} ${styles[`align-${align}`]} ${styles[`color-${color}`]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
