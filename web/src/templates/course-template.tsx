import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../containers/layout';
import SEO from '../components/seo';
import Container from '../components/container';
import Course from '../components/course/course';
import { toPlainText } from '../lib/helpers';
import { requireLogin } from '../lib/enforcer';

export const query = graphql`
  query CourseTemplateQuery($id: String!) {
    course: sanityCourse(id: { eq: $id }) {
      authors: _rawAuthors(resolveReferences: { maxDepth: 10 })
      excerpt: _rawExcerpt(resolveReferences: { maxDepth: 10 })
      categories: _rawCategories(resolveReferences: { maxDepth: 10 })
      rawLessons: _rawLessons(resolveReferences: { maxDepth: 10 })
      mainImage: _rawMainImage(resolveReferences: { maxDepth: 10 })
      lessons {
        _id
        mainImage: _rawMainImage(resolveReferences: { maxDepth: 10 })
      }
      publishedAt
      level
      tags
      title
    }
  }
`;

type CourseTemplateProps = {
  data: any;
  errors: any;
};

function CourseTemplate({ data, errors }: CourseTemplateProps) {
  const { course } = data;
  const lessons = course.lessons.map((lesson: any) => {
    const match = course.rawLessons.find(
      (rawLesson) => rawLesson._id === lesson._id,
    );
    return { ...match, ...lesson };
  });
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {course && (
        <>
          <SEO
            title={course.title || 'Untitled'}
            description={toPlainText(course.excerpt)}
            image={course.mainImage}
          />
          <Container>
            <Course {...course} lessons={lessons} />
          </Container>
        </>
      )}
    </Layout>
  );
}

export default requireLogin(CourseTemplate);
