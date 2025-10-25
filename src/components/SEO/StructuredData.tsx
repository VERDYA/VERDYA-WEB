'use client';

import { SCHEMA_TEMPLATES } from '../../config/seo';

interface StructuredDataProps {
  schema: object | object[];
}

export default function StructuredData({ schema }: StructuredDataProps) {
  const schemaArray = Array.isArray(schema) ? schema : [schema];
  
  return (
    <>
      {schemaArray.map((schemaItem, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaItem)
          }}
        />
      ))}
    </>
  );
}

// Componente específico para a página inicial
export function HomeStructuredData() {
  const schemas = [
    SCHEMA_TEMPLATES.organization,
    SCHEMA_TEMPLATES.professionalService,
    SCHEMA_TEMPLATES.faq
  ];

  return <StructuredData schema={schemas} />;
}