import React, { useEffect } from 'react';
import { format, formatDistance, differenceInDays, parseISO } from 'date-fns';

import { buildImageObj } from '../../lib/helpers';
import { imageUrlFor } from '../../lib/image-url';
import PortableText from '../portable-text';
import Container from '../container';

import BlogPostPreviewGrid from './blog-post-grid';

import {
  Article,
  BlogPostWrapper,
  BlogPostContent,
  Aside,
  AsideGroup,
  AsideGroupHeadline,
} from './blog-styles';
import { BlogBackgroundHeroImage } from '../hero/blog-background-hero-image';
import { useColors } from '../../hooks/use-global-colors';
import { ThemeColors } from '../../styles/theme';

type BlogPostProps = {
  _rawBody: any;
  authors: any[];
  categories: any;
  title: string;
  mainImage: any;
  publishedAt: any;
  tags: any;
};

function BlogPost({
  _rawBody,
  authors,
  categories,
  title,
  mainImage,
  publishedAt,
  tags,
}: BlogPostProps) {
  const { actions, colors } = useColors();

  const palette = mainImage?.asset?.metadata?.palette;

  useEffect(() => {
    actions.setColor(ThemeColors.header, palette?.muted?.background);
    actions.setColor(ThemeColors.accent, palette?.muted?.background);
    actions.setColor(ThemeColors.primary, palette?.muted?.foreground);
    actions.setColor(ThemeColors.foreground, palette?.muted?.foreground);
  }, [mainImage]);

  return (
    <>
      <Article>
        {mainImage?.asset && (
          <BlogBackgroundHeroImage
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit('crop')
              .auto('format')
              .url()}
            imageMetadata={mainImage?.asset?.metadata}
            title={title}
            author={authors[0].author}
            date={
              differenceInDays(parseISO(publishedAt), new Date()) > 3
                ? formatDistance(parseISO(publishedAt), new Date())
                : format(parseISO(publishedAt), 'MMMM Do, yyyy')
            }
          />
        )}
        <Container>
          <BlogPostWrapper>
            <BlogPostContent accentColor={colors.accent}>
              {_rawBody && <PortableText blocks={_rawBody} />}
            </BlogPostContent>
            <Aside>
              {categories && (
                <AsideGroup>
                  <AsideGroupHeadline>Categories</AsideGroupHeadline>
                  <ul>
                    {categories.map((category: any) => (
                      // eslint-disable-next-line no-underscore-dangle
                      <li key={category._id}>{category.title}</li>
                    ))}
                  </ul>
                </AsideGroup>
              )}
              {tags && (
                <AsideGroup>
                  <AsideGroupHeadline>Tags</AsideGroupHeadline>
                  <ul>
                    {tags.map((tag: string) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </AsideGroup>
              )}
            </Aside>
          </BlogPostWrapper>
        </Container>
      </Article>
      <Container>
        <BlogPostPreviewGrid
          title="More from the blog"
          browseMoreHref="/blog"
        />
      </Container>
    </>
  );
}

export default BlogPost;
