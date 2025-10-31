/**
 * Button Component (Primitive)
 * Estilo Webflow: Componente de botão reutilizável
 */

import type { ReactNode, ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  colorScheme?: 'primary' | 'secondary' | 'accent' | 'success' | 'error';
  isLoading?: boolean;
  isFullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
}

/**
 * Button - Componente de botão customizável
 * 
 * @example
 * ```tsx
 * <Button variant="solid" size="md" colorScheme="primary">
 *   Clique aqui
 * </Button>
 * ```
 */
export function Button({
  variant = 'solid',
  size = 'md',
  colorScheme = 'primary',
  isLoading = false,
  isFullWidth = false,
  leftIcon,
  rightIcon,
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || isLoading;

  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${styles[colorScheme]} ${
        isFullWidth ? styles.fullWidth : ''
      } ${isDisabled ? styles.disabled : ''} ${className}`}
      disabled={isDisabled}
      {...props}
    >
      {isLoading && <span className={styles.spinner} />}
      {!isLoading && leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}
      <span className={styles.text}>{children}</span>
      {!isLoading && rightIcon && <span className={styles.rightIcon}>{rightIcon}</span>}
    </button>
  );
}
