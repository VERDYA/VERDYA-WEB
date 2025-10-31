# Guia de Migração - Sistema Webflow

## 🎯 Objetivo

Este guia ajudará você a migrar páginas existentes para o novo sistema Webflow de forma segura e gradual.

## 📋 Checklist Pré-Migração

Antes de migrar uma página, certifique-se de:

- [ ] Testar a demo page em `/webflow-demo`
- [ ] Verificar que todas as seções necessárias existem no sistema Webflow
- [ ] Criar backups dos componentes originais
- [ ] Testar em diferentes dispositivos e navegadores

## 🔄 Processo de Migração

### Passo 1: Identificar as Seções

Analise a página atual e identifique as seções:

```tsx
// Página atual (src/app/page.tsx)
<HeroSection />           // → Hero
<AboutSection />          // → Features (sobre)
<TechCardsSection />      // → Features (tecnologias)
<DNASection />            // → Features (valores)
<ContactSection />        // → Form ou CTA
```

### Passo 2: Criar Conteúdo

Crie o arquivo de conteúdo correspondente:

```typescript
// src/content/pages/minha-pagina.ts
import type { SectionSchema } from '@/webflow/PageBuilder';

export const minhaPaginaContent: { sections: SectionSchema[] } = {
  sections: [
    {
      id: 'hero-1',
      type: 'hero',
      content: {
        headline: 'Seu título aqui',
        subheadline: 'Subtítulo',
        cta: {
          primary: {
            text: 'Começar',
            href: '#contato',
          },
        },
      },
      settings: {
        theme: 'dark',
        layout: 'centered',
        animation: 'fade',
        height: 'screen',
      },
    },
    // Adicione mais seções...
  ],
};
```

### Passo 3: Migrar a Página

Atualize o arquivo da página:

```tsx
// ANTES (componentes antigos)
'use client';

import Header from '../components/layout/Header';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import Footer from '../components/layout/Footer';

export default function Page() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

// DEPOIS (sistema Webflow)
'use client';

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { PageBuilder } from '../webflow/PageBuilder';
import { minhaPaginaContent } from '../content/pages/minha-pagina';

export default function Page() {
  return (
    <div>
      <Header />
      <main>
        <PageBuilder sections={minhaPaginaContent.sections} />
      </main>
      <Footer />
    </div>
  );
}
```

### Passo 4: Testar

1. Execute `npm run dev`
2. Acesse a página migrada
3. Teste em diferentes dispositivos
4. Verifique animações e interações
5. Confirme que não há erros no console

## 🆕 Criar Seções Customizadas

Se uma seção não existe no sistema Webflow, você pode criar:

### 1. Criar Schema

```typescript
// src/webflow/sections/MinhaSecao/MinhaSecao.schema.ts
export interface MinhaSecaoSchema {
  id: string;
  type: 'minhaSecao';
  content: {
    titulo: string;
    descricao: string;
  };
  settings: {
    theme?: 'light' | 'dark';
  };
}
```

### 2. Criar Componente

```tsx
// src/webflow/sections/MinhaSecao/MinhaSecao.tsx
'use client';

import type { MinhaSecaoSchema } from './MinhaSecao.schema';
import styles from './MinhaSecao.module.css';

export function MinhaSecao({ id, content, settings }: MinhaSecaoSchema) {
  return (
    <section
      id={id}
      className={styles.section}
      data-theme={settings.theme || 'light'}
    >
      <div className={styles.container}>
        <h2>{content.titulo}</h2>
        <p>{content.descricao}</p>
      </div>
    </section>
  );
}
```

### 3. Criar Estilos

```css
/* src/webflow/sections/MinhaSecao/MinhaSecao.module.css */
.section {
  padding: var(--spacing-section-lg) 0;
}

.section[data-theme="dark"] {
  background-color: var(--color-neutral-900);
  color: white;
}

.container {
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 1.5rem;
}
```

### 4. Registrar no PageBuilder

```typescript
// src/webflow/PageBuilder.tsx
import { MinhaSecao } from './sections/MinhaSecao/MinhaSecao';

const sectionComponents = {
  hero: Hero,
  features: Features,
  cta: CTA,
  minhaSecao: MinhaSecao, // ← Adicione aqui
} as const;
```

### 5. Exportar

```typescript
// src/webflow/sections/index.ts
export { MinhaSecao } from './MinhaSecao/MinhaSecao';
export type { MinhaSecaoSchema } from './MinhaSecao/MinhaSecao.schema';
```

### 6. Atualizar Tipos

```typescript
// src/webflow/PageBuilder.tsx
import type { MinhaSecaoSchema } from './sections/MinhaSecao/MinhaSecao.schema';

export type SectionSchema = 
  | HeroSchema 
  | FeaturesSchema 
  | CTASchema
  | MinhaSecaoSchema; // ← Adicione aqui
```

## 🔍 Troubleshooting

### Erro: "Section type not found"

**Problema**: O PageBuilder não encontra a seção.

**Solução**:
1. Verifique se o tipo está registrado em `sectionComponents`
2. Confirme que o import está correto
3. Verifique se o nome do tipo no schema corresponde à chave no objeto

### Erro: Hydration mismatch

**Problema**: Diferença entre renderização servidor/cliente.

**Solução**:
1. Evite usar `Date.now()`, `Math.random()` ou outras funções dinâmicas
2. Use `'use client'` se precisar de interatividade
3. Garanta que o HTML inicial seja o mesmo no servidor e cliente

### Estilos não aplicados

**Problema**: CSS Modules não carregando.

**Solução**:
1. Verifique se o arquivo `.module.css` existe
2. Confirme que está importando como `import styles from './Style.module.css'`
3. Reinicie o servidor de desenvolvimento

## 📊 Comparação: Antes vs Depois

### Estrutura Antiga
```
src/components/sections/
  ├── HeroSection.tsx (250 linhas)
  ├── AboutSection.tsx (180 linhas)
  └── ... código e conteúdo misturados
```

### Estrutura Nova (Webflow)
```
src/
├── webflow/sections/          # Componentes reutilizáveis
│   ├── Hero/ (schema + component + styles)
│   └── Features/
├── content/pages/             # Conteúdo separado
│   └── home.ts
└── design-system/             # Tokens e primitives
```

**Vantagens**:
- ✅ Separação de responsabilidades
- ✅ Conteúdo editável sem tocar no código
- ✅ Type-safe com TypeScript
- ✅ Reutilização de componentes
- ✅ CMS-ready

## 🎓 Exemplos Práticos

### Exemplo 1: Migrar uma Landing Page Simples

```typescript
// src/content/pages/landing.ts
export const landingPageContent = {
  sections: [
    {
      id: 'hero',
      type: 'hero',
      content: {
        headline: 'Transforme seu negócio',
        subheadline: 'Com nossa solução completa',
        cta: {
          primary: { text: 'Começar Grátis', href: '/signup' },
        },
      },
      settings: {
        theme: 'gradient',
        layout: 'centered',
        height: 'screen',
      },
    },
    {
      id: 'features',
      type: 'features',
      content: {
        headline: 'Por que escolher a gente?',
        features: [
          { id: '1', icon: '⚡', title: 'Rápido', description: '...' },
          { id: '2', icon: '🔒', title: 'Seguro', description: '...' },
          { id: '3', icon: '💰', title: 'Econômico', description: '...' },
        ],
      },
      settings: {
        theme: 'light',
        columns: 3,
      },
    },
    {
      id: 'cta',
      type: 'cta',
      content: {
        headline: 'Pronto para começar?',
        cta: {
          primary: { text: 'Criar Conta', href: '/signup' },
        },
      },
      settings: {
        theme: 'primary',
      },
    },
  ],
};
```

### Exemplo 2: Página de Produto

```typescript
// src/content/pages/produto.ts
export const produtoPageContent = {
  sections: [
    {
      id: 'hero-produto',
      type: 'hero',
      content: {
        headline: 'Nome do Produto',
        description: 'Descrição detalhada...',
        image: {
          src: '/images/produto.png',
          alt: 'Produto',
        },
      },
      settings: {
        layout: 'split',
        theme: 'light',
      },
    },
    {
      id: 'features-produto',
      type: 'features',
      content: {
        eyebrow: 'Recursos',
        headline: 'Tudo que você precisa',
        features: [/* ... */],
      },
      settings: {
        theme: 'light',
        columns: 3,
      },
    },
  ],
};
```

## 📅 Roadmap de Migração

### Fase 1: Preparação (Concluída ✅)
- [x] Implementar sistema Webflow
- [x] Criar seções base (Hero, Features, CTA)
- [x] Configurar design system
- [x] Criar página demo

### Fase 2: Migração Gradual (Em Progresso 🔄)
- [ ] Migrar página inicial
- [ ] Migrar páginas de tecnologias
- [ ] Migrar páginas de serviços
- [ ] Criar seções adicionais conforme necessário

### Fase 3: Otimização (Próxima 📋)
- [ ] Integrar com CMS
- [ ] Adicionar testes automatizados
- [ ] Otimizar performance
- [ ] Documentar no Storybook

### Fase 4: Limpeza (Futura 🎯)
- [ ] Remover componentes antigos não utilizados
- [ ] Consolidar estilos
- [ ] Atualizar documentação final

## 🆘 Precisa de Ajuda?

- **Documentação**: Leia o `REFACTORING.md`
- **Exemplos**: Veja a página `/webflow-demo`
- **Estrutura**: Explore `src/webflow/sections/`

---

**Boa migração! 🚀**
