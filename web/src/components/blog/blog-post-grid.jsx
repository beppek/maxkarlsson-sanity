import { Link } from 'gatsby'
import React from 'react'
import BlogPostPreview from './blog-post-preview'

import { Wrapper, Headline, Grid, BrowseMore } from '../lists/grid.styles'

const BlogPostPreviewGrid = ({title, nodes, browseMoreHref}) => {
  return (
    <Wrapper>
      {title && <Headline>{title}</Headline>}
      <Grid>
        {nodes &&
          nodes.map(node => (
            <li key={node.id}>
              <BlogPostPreview {...node} />
            </li>
          ))}
      </Grid>
      {browseMoreHref && (
        <BrowseMore>
          <Link to={browseMoreHref}>Browse more >></Link>
        </BrowseMore>
      )}
    </Wrapper>
  )
}

BlogPostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default BlogPostPreviewGrid
