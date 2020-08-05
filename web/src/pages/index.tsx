import React from 'react';
import { graphql } from 'gatsby';
import { buildImageObj } from '../lib/helpers';
import BlogPostPreviewGrid from '../components/blog/blog-post-grid';
import Container from '../components/container';
import BackgroundHeroImage from '../components/hero/background-hero-image';
import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import { CenteredText } from '../components/layout/layout-styles';
import { H2, H3 } from '../components/typography';
import { AuthorAvatar } from '../components/hero/blog-background-hero-image';
import { imageUrlFor } from '../lib/image-url';

export const query = graphql`
  fragment SanityImage on SanityMainImage {
    alt
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

  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    author: sanityAuthor {
      image {
        ...SanityImage
      }
    }
  }
`;

type Props = {
  data: any;
  errors: any;
};

const IndexPage = ({ data, errors }: Props) => {
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const { site, author } = data || {};

  return (
    <Layout landingPage>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <BackgroundHeroImage light>
        <CenteredText
          backgroundColor={author.image.asset.metadata.palette.muted.background}
        >
          <div>
            <div>
              <AuthorAvatar
                src={imageUrlFor(buildImageObj(author.image))
                  .width(100)
                  .height(100)
                  .fit('crop')
                  .url()}
                alt={author.image.alt}
                color={author.image.asset.metadata.palette.muted.background}
              />
              <H2 fontSize="xxlarge">Full Stack Developer</H2>
              <H3>JavaScript | TypeScript | React | GraphQL</H3>
            </div>
            <div>
              <p>
                &gt;&gt;I build websites and applications with modern
                technologies
                <span>_</span>
              </p>
            </div>
          </div>
        </CenteredText>
      </BackgroundHeroImage>
      <Container>
        <h1 hidden>
          Welcome to
          {site.title}
        </h1>
        <BlogPostPreviewGrid title="Latest blog posts" browseMoreHref="/blog" />
      </Container>
    </Layout>
  );
};

export default IndexPage;
