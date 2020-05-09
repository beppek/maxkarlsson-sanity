import React from 'react';

import CodeBlock from './code-block';
import InlineCode from './inline-code';
import Figure from './figure';

const extensionToLanguageMapper = {
  tsx: 'tsx',
  ts: 'typescript',
};

const serializers = {
  types: {
    authorReference: ({ node }: any) => <span>{node.author.name}</span>,
    mainImage: Figure,
    code: ({ node }: any) => {
      const extension = node.filename.split('.')[1];
      const language = extensionToLanguageMapper[extension] || node.language;
      return <CodeBlock language={language} value={node.code} />;
    },
    inlineCode: ({ node }: any) => (
      <InlineCode language={node.language} value={node.code} />
    ),
  },
  marks: {
    code: (node: any) => <InlineCode value={node.children} />,
  },
};

export default serializers;
