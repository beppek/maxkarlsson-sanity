import { Link, graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture,
} from '../../lib/helpers';

import BlogPostPreview from './blog-post-preview';

import { Wrapper, Headline, Grid, BrowseMore } from '../lists/grid-styles';

type BlogPostPreviewGridProps = {
  title?: string;
  nodes?: any[];
  browseMoreHref?: string;
};

const query = graphql`
  query {
    posts: allSanityPost(
      limit: 6
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

const BlogPostPreviewGrid = ({
  title = '',
  // nodes = [],
  browseMoreHref = '',
}: BlogPostPreviewGridProps) => {
  const data = useStaticQuery(query);

  const nodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  return (
    <Wrapper>
      {title && <Headline>{title}</Headline>}
      <Grid>
        {nodes &&
          nodes.map((node) => (
            <li key={node.id}>
              <BlogPostPreview {...node} />
            </li>
          ))}
      </Grid>
      {browseMoreHref && (
        <BrowseMore>
          <Link to={browseMoreHref}>Browse more &gt;&gt;</Link>
        </BrowseMore>
      )}
    </Wrapper>
  );
};

export default BlogPostPreviewGrid;
