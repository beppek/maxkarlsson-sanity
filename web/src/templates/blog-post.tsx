import React from 'react';
import { graphql } from 'gatsby';
import Container from '../components/container';
import GraphQLErrorList from '../components/graphql-error-list';
import BlogPost from '../components/blog/blog-post';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import { toPlainText } from '../lib/helpers';

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      publishedAt
      updatedAt: _updatedAt
      categories {
        _id
        title
      }
      tags
      mainImage {
        ...SanityImage
        asset {
          metadata: _rawMetadata(resolveReferences: { maxDepth: 10 })
        }
        alt
      }
      title
      slug {
        current
      }
      _rawExcerpt(resolveReferences: { maxDepth: 5 })
      _rawBody(resolveReferences: { maxDepth: 5 })
      authors {
        _key
        author {
          image {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
              metadata: _rawMetadata(resolveReferences: { maxDepth: 10 })
            }
          }
          name
        }
      }
    }
  }
`;

type BlogPostTemplateProps = {
  data: any;
  errors: any;
};

const BlogPostTemplate = ({ data, errors }: BlogPostTemplateProps) => {
  const post = data && data.post;
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {post && (
        <SEO
          title={post.title || 'Untitled'}
          description={toPlainText(post._rawExcerpt)}
          image={post.mainImage}
        />
      )}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {post && <BlogPost {...post} />}
    </Layout>
  );
};

export default BlogPostTemplate;
