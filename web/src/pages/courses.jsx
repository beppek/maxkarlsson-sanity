import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../containers/layout'
import CourseList from '../components/course/CourseList'
import SEO from '../components/seo'
import Container from '../components/container'
import { responsiveTitle1 } from '../components/typography.module.css'
import { requireLogin } from '../lib/enforcer'

export const query = graphql`
  query AllCourseQuery {
    courses: allSanityCourse {
      nodes {
        slug: _rawSlug(resolveReferences: {maxDepth: 10})
        excerpt: _rawExcerpt(resolveReferences: {maxDepth: 10})
        mainImage: _rawMainImage(resolveReferences: {maxDepth: 10})
        lessons: _rawLessons(resolveReferences: {maxDepth: 10})
        categories: _rawCategories(resolveReferences: {maxDepth: 10})
        authors: _rawAuthors(resolveReferences: {maxDepth: 10})
        level
        tags
        title
        publishedAt
        id
      }
    }
  }
`

function CoursesPage({ data }) {
  console.log('data', data)
  const courseNodes = data.courses.nodes
  return (
    <Layout>
      <SEO
        title={'Courses'}
      />
      <Container>
        <h1 className={responsiveTitle1}>Courses</h1>
        <CourseList
          nodes={courseNodes}
        />
      </Container>
    </Layout>
  )
}

export default requireLogin(CoursesPage)
