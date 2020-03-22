import React from 'react'
import { Link } from 'gatsby'
import CoursePreview from './CoursePreview'

import styles from '../blog-post-preview-grid.module.css'

function CourseList({ browseMoreHref, title, nodes }) {
  console.log('nodes', nodes)
  return (
    <div className={styles.root}>
      {title && <h2 className={styles.headline}>{title}</h2>}
      <ul className={styles.grid}>
        {nodes &&
          nodes.map(node => (
            <li key={node.id}>
              <CoursePreview {...node} />
            </li>
          ))}
      </ul>
      {browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link to={browseMoreHref}>Browse more</Link>
        </div>
      )}
    </div>
  )
}

CourseList.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default CourseList
