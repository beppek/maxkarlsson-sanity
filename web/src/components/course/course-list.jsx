import React from 'react'
import { Link } from 'gatsby'
import CoursePreview from './course-preview'

import { Wrapper, Headline, Grid, BrowseMore } from '../lists/grid.styles'

function CourseList({ browseMoreHref, title, nodes }) {
  console.log('nodes', nodes)
  return (
    <Wrapper>
      {title && <Headline>{title}</Headline>}
      <Grid>
        {nodes &&
          nodes.map(node => (
            <li key={node.id}>
              <CoursePreview {...node} />
            </li>
          ))}
      </Grid>
      {browseMoreHref && (
        <BrowseMore>
          <Link to={browseMoreHref}>Browse more</Link>
        </BrowseMore>
      )}
    </Wrapper>
  )
}

CourseList.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default CourseList
