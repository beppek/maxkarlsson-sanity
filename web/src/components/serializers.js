import React from 'react'

import CodeBlock from './CodeBlock'
import InlineCode from './InlineCode'
import Figure from './Figure'

const serializers = {
  types: {
    authorReference: ({ node }) => <span>{node.author.name}</span>,
    mainImage: Figure,
    code: props => <CodeBlock language={props.node.language} value={props.node.code} />, 
    inlineCode: props => <InlineCode language={props.node.language} value={props.node.code} />
  }
}

export default serializers
