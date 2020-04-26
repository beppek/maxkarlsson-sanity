import React from 'react';
import { format, parseISO } from 'date-fns';

import { buildImageObj } from '../../lib/helpers';
import { imageUrlFor } from '../../lib/image-url';

import {
  LeadMediaThumb,
  Excerpt,
  PublishDate,
  StyledLink,
  Wrapper,
  TextWrapper,
} from './preview-styles';
import { H3 } from '../typography';
import PortableText from '../portable-text';

type PreviewItemProps = {
  mainImage: any;
  title: string;
  excerpt: string;
  publishedAt: any;
  link: any;
  displayType: 'list' | 'grid';
};

const PreviewItem = ({
  mainImage,
  title,
  excerpt,
  publishedAt,
  link,
  displayType,
}: PreviewItemProps) => {
  const color = mainImage.asset.metadata.palette.muted.background;
  const shadow = color.length > 4 ? `${color}40` : `${color}4`;
  return (
    <Wrapper color={color} shadow={shadow}>
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
          <PublishDate>
            {format(parseISO(publishedAt), 'MMMM do, yyyy')}
          </PublishDate>
        </TextWrapper>
      </StyledLink>
    </Wrapper>
  );
};

export default PreviewItem;
