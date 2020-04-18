import React from 'react'
import { format } from 'date-fns'

import { buildImageObj } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'

import { LeadMediaThumb, Excerpt, Date, StyledLink, Wrapper, TextWrapper } from './preview.styles'
import { H3 } from '../Typography'
import PortableText from '../portableText'

const PreviewItem = ({mainImage, title, excerpt, publishedAt, link, displayType}) => {
  return (
    <Wrapper>
      <StyledLink displayType={displayType} to={link}>
        <LeadMediaThumb>
          {mainImage && mainImage.asset && (
            <img
              src={imageUrlFor(buildImageObj(mainImage))
                .width(600)
                .height(Math.floor((9 / 16) * 600))
                .auto('format')
                .url()}
              alt={mainImage.alt}
            />
          )}
        </LeadMediaThumb>
        <TextWrapper>
          <H3>{title}</H3>
          {excerpt && (
            <Excerpt>
              <PortableText blocks={excerpt} />
            </Excerpt>
          )}
          <Date>{format(publishedAt, 'MMMM Do, YYYY')}</Date>
        </TextWrapper>
      </StyledLink>
    </Wrapper>
  )
}

export default PreviewItem
