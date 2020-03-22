import React, { useState } from 'react'
import { format, distanceInWords, differenceInDays } from 'date-fns'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import Container from '../container'
import PortableText from '../portableText'

import { buildImageObj } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'

import styles from '../blog-post.module.css'

function Course({ authors, categories, publishedAt, lessons, mainImage, level, tags, title }) {
  const [currentLesson, setCurrentLesson] = useState(lessons[0])
  console.log('currentLesson', currentLesson)
  console.log('mainImage', mainImage)
  const heroImage = currentLesson.mainImage
    ? currentLesson.mainImage
    : mainImage

  const handleLessonSelect = ({ target: { value } }) => {
    setCurrentLesson(lessons.find(lesson => lesson._id === value))
  }

  return (
    <article>
      {lessons && (
        <>
          <h3 className={styles.categoriesHeadline}>Lessons</h3>
          <Select
            native
            labelId="lessons-select-label"
            id="lessons-select"
            value={currentLesson._id}
            onChange={handleLessonSelect}
          >
            {lessons.map((lesson, i) => {
              return (
                <option value={lesson._id} key={lesson._id}>
                  {i + 1} - {lesson.title}
                </option>
              )
            })}
          </Select>
        </>
      )}
      {heroImage && heroImage.asset && (
        <div className={styles.mainImage}>
          <img
            src={imageUrlFor(buildImageObj(heroImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit('crop')
              .auto('format')
              .url()}
            alt={heroImage.alt}
          />
        </div>
      )}
      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>
            {/* {_rawBody && <PortableText blocks={_rawBody} />} */}
          </div>
          <aside className={styles.metaContent}>
            {/* {publishedAt && (
              <div className={styles.publishedAt}>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do, YYYY')}
              </div>
            )} */}
          </aside>
        </div>
      </Container>
    </article>
  )
}

export default Course
