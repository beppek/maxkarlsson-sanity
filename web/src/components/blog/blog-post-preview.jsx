
import React from 'react'
import {  getBlogUrl } from '../../lib/helpers'

import PreviewItem from '../preview/Item'

function BlogPostPreview ({isInList, publishedAt, slug, mainImage, _rawExcerpt, title}) {
  return (
    <PreviewItem
      excerpt={_rawExcerpt} 
      mainImage={mainImage} 
      title={title} 
      publishedAt={publishedAt} 
      link={getBlogUrl(publishedAt, slug.current)}
      displayType={isInList ? 'list' : 'grid'}
    />
  )
}

export default BlogPostPreview
