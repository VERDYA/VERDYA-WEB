/**
 * Scroll Animations
 * Estilo Webflow: Biblioteca de animações ao scroll
 */

export const scrollAnimations = {
  // Fade animations
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  
  fadeInUp: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' },
  },
  
  fadeInDown: {
    initial: { opacity: 0, y: -40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' },
  },
  
  fadeInLeft: {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: 'easeOut' },
  },
  
  fadeInRight: {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: 'easeOut' },
  },
  
  // Scale animations
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  
  scaleInUp: {
    initial: { opacity: 0, scale: 0.8, y: 40 },
    animate: { opacity: 1, scale: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' },
  },
  
  // Slide animations
  slideInUp: {
    initial: { y: '100%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, ease: 'easeOut' },
  },
  
  slideInDown: {
    initial: { y: '-100%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, ease: 'easeOut' },
  },
  
  slideInLeft: {
    initial: { x: '-100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.8, ease: 'easeOut' },
  },
  
  slideInRight: {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.8, ease: 'easeOut' },
  },
  
  // Rotate animations
  rotateIn: {
    initial: { opacity: 0, rotate: -90 },
    animate: { opacity: 1, rotate: 0 },
    transition: { duration: 0.8, ease: 'easeOut' },
  },
  
  // Flip animations
  flipIn: {
    initial: { opacity: 0, rotateY: -90 },
    animate: { opacity: 1, rotateY: 0 },
    transition: { duration: 0.8, ease: 'easeOut' },
  },
  
  // Zoom animations
  zoomIn: {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  
  zoomOut: {
    initial: { opacity: 0, scale: 1.5 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  
  // Bounce animation
  bounceIn: {
    initial: { opacity: 0, scale: 0.3 },
    animate: { opacity: 1, scale: 1 },
    transition: {
      duration: 0.8,
      ease: [0.68, -0.55, 0.265, 1.55], // bounce easing
    },
  },
} as const;

export type AnimationType = keyof typeof scrollAnimations;

/**
 * Gera classes CSS para animações
 */
export function generateAnimationCSS(animation: AnimationType) {
  const config = scrollAnimations[animation];
  const initial = config.initial as any;
  
  return `
    opacity: ${initial.opacity ?? 1};
    transform: translate(${initial.x ?? 0}px, ${initial.y ?? 0}px) 
               scale(${initial.scale ?? 1}) 
               rotate(${initial.rotate ?? 0}deg);
    transition: all ${config.transition.duration}s ${config.transition.ease};
  `;
}
