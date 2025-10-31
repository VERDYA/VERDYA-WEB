# Refatoração Webflow - VERDYA-WEB

## 📋 Visão Geral

Este projeto foi refatorado para seguir a arquitetura estilo **Webflow**, priorizando:

- ✅ **Componentização visual por seções**
- ✅ **Sistema CMS-ready**
- ✅ **Design System com tokens**
- ✅ **Gestão de animações e interações**
- ✅ **Separação clara entre layout e conteúdo**

## 🏗️ Nova Estrutura

```
src/
├── design-system/          # Sistema de design completo
│   ├── tokens/            # Design tokens (cores, tipografia, spacing)
│   ├── primitives/        # Componentes básicos (Button, Typography, Logo)
│   └── theme.ts           # Configuração do tema
│
├── webflow/               # Sistema Webflow
│   ├── sections/          # Seções reutilizáveis
│   │   ├── Hero/         # Seção hero com schema
│   │   ├── Features/     # Seção de recursos
│   │   └── CTA/          # Call-to-action
│   ├── layouts/          # Layouts de página
│   ├── interactions/     # Animações e efeitos
│   └── PageBuilder.tsx   # Renderizador de seções
│
├── content/              # Conteúdo gerenciável (CMS-ready)
│   ├── pages/           # Conteúdo das páginas
│   └── global/          # Navegação e footer
│
├── components/          # Componentes legados (manter por enquanto)
└── app/                # Next.js App Router
```

## 🎨 Design System

### Tokens

Todos os tokens de design estão em `src/design-system/tokens/`:

- **Colors**: Paleta de cores completa (primary, neutral, accent, semantic)
- **Typography**: Font sizes, weights, line heights, letter spacing
- **Spacing**: Sistema de espaçamento consistente
- **Breakpoints**: Pontos de quebra responsivos

### CSS Variables

Todos os tokens estão disponíveis como CSS variables no `globals.css`:

```css
var(--color-primary-600)
var(--font-size-xl)
var(--spacing-section-lg)
var(--radius-lg)
var(--shadow-xl)
var(--duration-normal)
var(--easing-easeOut)
```

### Primitives

Componentes básicos reutilizáveis:

- **Logo**: Componente de logo responsivo
- **Button**: Botão com múltiplas variantes
- **Typography**: Sistema tipográfico consistente

## 📦 Sistema Webflow

### Seções (Sections)

Cada seção é um componente independente com:

1. **Schema**: Define a estrutura de dados
2. **Component**: Renderiza a seção
3. **Styles**: CSS Modules para estilização

#### Exemplo: Hero Section

```typescript
// Hero.schema.ts
export interface HeroSchema {
  id: string;
  type: 'hero';
  content: {
    headline: string;
    subheadline?: string;
    cta?: { ... };
  };
  settings: {
    theme: 'light' | 'dark';
    layout: 'centered' | 'split';
  };
}

// Hero.tsx
export function Hero({ content, settings }: HeroSchema) {
  return (
    <section data-theme={settings.theme}>
      <h1>{content.headline}</h1>
      {/* ... */}
    </section>
  );
}
```

### Page Builder

O `PageBuilder` renderiza seções dinamicamente:

```tsx
<PageBuilder sections={[
  { id: '1', type: 'hero', content: {...}, settings: {...} },
  { id: '2', type: 'features', content: {...}, settings: {...} },
]} />
```

### Content Layer (CMS-Ready)

Todo o conteúdo está separado em `src/content/`:

```typescript
// src/content/pages/home.ts
export const homePageContent = {
  sections: [
    {
      id: 'hero-home',
      type: 'hero',
      content: {
        headline: 'Seu título aqui',
        // ...
      },
      settings: {
        theme: 'dark',
        // ...
      },
    },
    // Mais seções...
  ],
};
```

**Vantagens**:
- ✅ Fácil integração com CMS (Contentful, Sanity, etc.)
- ✅ Conteúdo separado do código
- ✅ Type-safe com TypeScript

## 🎭 Animações e Interações

### Scroll Animations

```tsx
import { useScrollAnimation } from '@/webflow/interactions/hooks';

const { ref } = useScrollAnimation({ 
  animation: 'fadeInUp',
  threshold: 0.1 
});

<div ref={ref}>Animated content</div>
```

Animações disponíveis:
- `fadeIn`, `fadeInUp`, `fadeInDown`, `fadeInLeft`, `fadeInRight`
- `scaleIn`, `scaleInUp`
- `slideInUp`, `slideInDown`, `slideInLeft`, `slideInRight`
- `zoomIn`, `zoomOut`, `bounceIn`

### Hover Effects

```tsx
import { useHoverEffect } from '@/webflow/interactions/hooks';

const { ref } = useHoverEffect({ effect: 'lift' });

<div ref={ref}>Hover me</div>
```

Efeitos disponíveis:
- `lift`, `scale`, `rotate`, `glow`, `shine`
- `borderGrow`, `tilt`, `fade`, `blur`, `colorShift`

### Parallax

```tsx
import { useParallax } from '@/webflow/interactions/hooks';

const { ref } = useParallax({ speed: 0.5 });

<div ref={ref}>Parallax element</div>
```

## ⚡ Status da Migração

### Páginas Disponíveis:

- ✅ **Sistema Webflow**: Totalmente implementado e funcional
- ✅ **Demo Page**: Acesse `/webflow-demo` para ver o novo sistema em ação
- ⏸️ **Página Principal**: Mantida com componentes originais (compatibilidade)

### Por que manter a página original?

Para evitar breaking changes e permitir uma **migração gradual**, a página principal (`/`) continua usando os componentes originais. O novo sistema Webflow está disponível em `/webflow-demo` para testes.

### Como migrar uma página:

1. Teste a demo page em `/webflow-demo`
2. Quando estiver satisfeito, substitua no `src/app/page.tsx`:

```tsx
// De (atual):
<HeroSection />
<AboutSection />
// ...

// Para (novo sistema):
<PageBuilder sections={homePageContent.sections} />
```

## 🚀 Como Usar

### 1. Criar uma Nova Seção

```typescript
// 1. Criar schema
// src/webflow/sections/MySection/MySection.schema.ts
export interface MySectionSchema {
  id: string;
  type: 'mySection';
  content: {
    title: string;
  };
  settings: {
    theme: 'light' | 'dark';
  };
}

// 2. Criar componente
// src/webflow/sections/MySection/MySection.tsx
export function MySection({ content, settings }: MySectionSchema) {
  return (
    <section data-theme={settings.theme}>
      <h2>{content.title}</h2>
    </section>
  );
}

// 3. Adicionar estilos
// src/webflow/sections/MySection/MySection.module.css

// 4. Registrar no PageBuilder
// src/webflow/PageBuilder.tsx
const sectionComponents = {
  // ...
  mySection: MySection,
};
```

### 2. Criar uma Nova Página

```typescript
// 1. Criar conteúdo
// src/content/pages/about.ts
export const aboutPageContent = {
  sections: [
    { id: '1', type: 'hero', content: {...}, settings: {...} },
    // ...
  ],
};

// 2. Criar página
// src/app/about/page.tsx
import { PageBuilder } from '@/webflow/PageBuilder';
import { aboutPageContent } from '@/content/pages/about';

export default function AboutPage() {
  return <PageBuilder sections={aboutPageContent.sections} />;
}
```

### 3. Adicionar um Novo Token

```typescript
// src/design-system/tokens/colors.ts
export const colors = {
  // ...
  brand: {
    50: '#...',
    500: '#...',
    // ...
  },
};

// Adicionar CSS variable no globals.css
:root {
  --color-brand-500: #...;
}
```

## 📱 Responsividade

Todas as seções são responsivas por padrão:

- **Mobile-first**: Design otimizado para mobile
- **Breakpoints**: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`
- **CSS Variables**: Valores ajustáveis por breakpoint

## 🎯 Próximos Passos

- [ ] Integrar com CMS (Contentful/Sanity)
- [ ] Adicionar mais seções (Gallery, Testimonials, Pricing)
- [ ] Implementar dark mode toggle
- [ ] Adicionar testes automatizados
- [ ] Criar Storybook para documentar componentes

## 📚 Referências

- [Webflow Design Patterns](https://webflow.com)
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Best Practices](https://typescript-eslint.io)

## 🤝 Contribuindo

Para contribuir com novas seções ou melhorias:

1. Siga a estrutura de pastas estabelecida
2. Use TypeScript e schemas para type-safety
3. Mantenha CSS Modules para estilos
4. Documente novos componentes no README
5. Teste em diferentes dispositivos

---

**Desenvolvido com ❤️ pela equipe Verdya**
