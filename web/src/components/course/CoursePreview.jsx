import React from 'react'
import { format } from 'date-fns'
import { Link } from 'gatsby'
import { buildImageObj, cn } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'
import PortableText from '../portableText'

import styles from '../blog-post-preview.module.css'
import { responsiveTitle3 } from '../typography.module.css'

function CoursePreview({
  isInList,
  publishedAt,
  slug,
  mainImage,
  title,
  excerpt
}) {
  return (
    <Link
      className={isInList ? styles.inList : styles.inGrid}
      to={`/courses/${slug.current}`}
    >
      <div className={styles.leadMediaThumb}>
        {mainImage && mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .auto('format')
              .url()}
            alt={mainImage.alt}
          />
        )}
      </div>
      <div className={styles.text}>
        <h3 className={cn(responsiveTitle3, styles.title)}>{title}</h3>
        {excerpt && (
          <div className={styles.excerpt}>
            <PortableText blocks={excerpt} />
          </div>
        )}
        <div className={styles.date}>{format(publishedAt, 'MMMM Do, YYYY')}</div>
      </div>
    </Link>
  )
}

export default CoursePreview
