import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import JSONSchemaViewer from '@theme/JSONSchemaViewer';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

interface SchemaPageProps {
  schemaName: string;
  schema: any;
}

const SchemaPage: React.FC<SchemaPageProps> = ({ schemaName, schema }) => {
  const { siteConfig } = useDocusaurusContext();
  const schemaPath = useBaseUrl(`/schema/${schemaName}.json`);
  const schemaUrl = `${siteConfig.url}${schemaPath}`;

  return (
    <div>
      <h2>Schema URL</h2>
      <CodeBlock>{schemaUrl}</CodeBlock>

      <h2>Yaml Language Server</h2>
      <CodeBlock># yaml-language-server: $schema={schemaUrl}</CodeBlock>

      <h2>JSON Schema</h2>
      <JSONSchemaViewer schema={schema} />

      <h2>Source</h2>
      <CodeBlock language="json-schema">{JSON.stringify(schema, null, 2)}</CodeBlock>
    </div>
  );
}

export default SchemaPage;
