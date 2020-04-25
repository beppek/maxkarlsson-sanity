import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import { mapEdgesToNodes } from '../lib/helpers';
import BlogPostPreviewGrid from '../components/blog/blog-post-grid';
import Container from '../components/container';
import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/seo';
import Layout from '../containers/layout';

import { H1 } from '../components/typography';
import { useColors } from '../hooks/use-global-colors';
import { theme, ThemeColors } from '../styles/theme';

export const query = graphql`
  query BlogPageQuery {
    posts: allSanityPost(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;

type BlogPageProps = {
  data: any;
  errors: any;
};

const BlogPage = ({ data, errors }: BlogPageProps) => {
  const { actions } = useColors();

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  useEffect(() => {
    actions.setColor(ThemeColors.foreground, theme.black);
    actions.setColor(ThemeColors.header, theme.white);
    actions.setColor(ThemeColors.primary, theme.primary);
  }, []);

  const postNodes = data && data.posts && mapEdgesToNodes(data.posts);

  return (
    <Layout>
      <SEO title="Blog" />
      <Container>
        <H1>Blog</H1>
        {postNodes && postNodes.length > 0 && (
          <BlogPostPreviewGrid nodes={postNodes} />
        )}
      </Container>
    </Layout>
  );
};

export default BlogPage;
