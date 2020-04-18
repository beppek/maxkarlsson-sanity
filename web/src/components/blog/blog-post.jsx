import { format, distanceInWords, differenceInDays } from 'date-fns'
import React from 'react'
import { buildImageObj } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'
import PortableText from '../portableText'
import Container from '../container'
import AuthorList from './author-list'

import { 
  Article, 
  MainImageWrapper, 
  BlogPostWrapper, 
  BlogPostContent, 
  Aside, 
  PublishedAt, 
  AsideGroup, 
  AsideGroupHeadline, 
} from './blog.styles'
import { H1 } from '../Typography'

function BlogPost ({ _rawBody, authors, categories, title, mainImage, publishedAt, tags }) {
  return (
    <Article>
      {mainImage?.asset && (
        <MainImageWrapper>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit('crop')
              .auto('format')
              .url()}
            alt={mainImage.alt}
          />
        </MainImageWrapper>
      )}
      <Container>
        <BlogPostWrapper>
          <BlogPostContent>
            <H1>{title}</H1>
            {_rawBody && <PortableText blocks={_rawBody} />}
          </BlogPostContent>
          <Aside>
            {publishedAt && (
              <PublishedAt>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do, YYYY')}
              </PublishedAt>
            )}
            {authors && <AuthorList items={authors} title='Authors' />}
            {categories && (
              <AsideGroup>
                <AsideGroupHeadline>Categories</AsideGroupHeadline>
                <ul>
                  {categories.map(category => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </AsideGroup>
            )}
            {tags && (
              <AsideGroup>
                <AsideGroupHeadline>Tags</AsideGroupHeadline>
                <ul>
                  {tags.map(tag => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </AsideGroup>
            )}
          </Aside>
        </BlogPostWrapper>
      </Container>
    </Article>
  )
}

export default BlogPost
