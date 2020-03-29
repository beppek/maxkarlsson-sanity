import React, { useState, useEffect } from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import { Alert, AlertTitle } from '@material-ui/lab';
import Button from '@material-ui/core/Button';
import { Link } from 'gatsby';

import Container from '../container'

import { buildImageObj } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'

import styles from '../blog-post.module.css'
import Lesson from './Lesson';

import {Title, LessonsHeading, LessonSelect, MainImage, SubHeading} from './CourseStyles'

const Course = ({ authors, categories, publishedAt, lessons, mainImage, level, tags, title }) => {
  const [currentLesson, setCurrentLesson] = useState(0)
  const [showSnackbar, setShowSnackbar] = useState(false)
  const [completed, setCompleted] = useState(false)
  const heroImage = lessons[currentLesson].mainImage
    ? lessons[currentLesson].mainImage
    : mainImage

  useEffect(() => {
    if (completed) setShowSnackbar(true)
  }, [completed])

  const handleLessonSelect = ({ target: { value } }) => {
    setCompleted(false)
    setCurrentLesson(lessons.findIndex(lesson => lesson._id === value))
  }

  const handleNextLesson = () => {
    return currentLesson === lessons.length - 1
      ? setCompleted(true)
      : setCurrentLesson(prevLesson => prevLesson + 1)
  }

  const handleResetCourse = () => {
    setShowSnackbar(false)
    setCompleted(false)
    setCurrentLesson(0)
  }

  const handleSnackbarClose = () => {
    setShowSnackbar(false)
  }

  return (
    <article>
      <Title>{title}</Title>
      <SubHeading>{currentLesson + 1} – {lessons[currentLesson].title}</SubHeading>
      <Container>
        
        <div className={styles.grid}>
          <div >
            {heroImage && heroImage.asset && (
              <MainImage>
                <img
                  src={imageUrlFor(buildImageObj(heroImage))
                    .width(1200)
                    .height(Math.floor((9 / 16) * 1200))
                    .fit('crop')
                    .auto('format')
                    .url()}
                  alt={heroImage.alt}
                />
              </MainImage>
            )}
            {completed 
              ? (
                <>
                <p>
                  Well done, you have completed this course! 
                </p>
                <p>
                  Check out <Link to="/courses">my other courses</Link> for more learning material.
                </p>
                  <Button
                    disableElevation
                    variant="contained"
                    color="primary"
                    onClick={handleResetCourse}
                  >
                    Start over
                  </Button>
                </>
                )
              : <Lesson lastLesson={currentLesson === lessons.length - 1} lesson={lessons[currentLesson]} onNextLesson={handleNextLesson} />
            }
            <Snackbar 
              open={showSnackbar} 
              autoHideDuration={6000}
              onClose={handleSnackbarClose}
            >
              <Alert onClose={handleSnackbarClose} severity="success">
                <AlertTitle>Nice!</AlertTitle>
                You completed the course, well done!
              </Alert>
            </Snackbar>
          </div>
          <aside className={styles.metaContent}>
            {lessons && (
              <>
                <LessonsHeading>Lessons</LessonsHeading>
                <LessonSelect
                  native
                  labelId="lessons-select-label"
                  id="lessons-select"
                  value={lessons[currentLesson]._id}
                  onChange={handleLessonSelect}
                >
                  {lessons.map((lesson, i) => {
                    return (
                      <option value={lesson._id} key={lesson._id}>
                        {i + 1} - {lesson.title}
                      </option>
                    )
                  })}
                </LessonSelect>
              </>
            )}
          </aside>
        </div>
      </Container>
    </article>
  )
}

export default Course
