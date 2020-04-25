import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism';

type CodeBlockProps = {
  value: string;
  language?: string;
};

const CodeBlock = ({ language, value }: CodeBlockProps) => {
  return (
    <SyntaxHighlighter language={language} style={xonokai}>
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
