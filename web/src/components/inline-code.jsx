import React from 'react'
import PropTypes from 'prop-types'

const codeStyles = {
  fontFamily: '"Inconsolata", monospace',
  margin: '3px',
  padding: '1px 6px',
  backgroundColor: '#f7f7f7',
  border: '1px solid #ededed',
  borderRadius: '5px',
}

const InlineCode = ({value}) => {
  return (
    <code style={codeStyles}>
      {value}
    </code>
  )
}

InlineCode.propTypes = {
  value: PropTypes.string.isRequired,
}

export default InlineCode