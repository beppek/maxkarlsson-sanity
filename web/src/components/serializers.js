import React from 'react'
import Figure from './Figure'

const serializers = {
  types: {
    authorReference: ({ node }) => <span>{node.author.name}</span>,
    mainImage: Figure,
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    )
  }
}

export default serializers
