import React from 'react';
import styled from 'styled-components';
import { H1, Paragraph } from '../typography';
import { imageUrlFor } from '../../lib/image-url';
import { buildImageObj } from '../../lib/helpers';

type Props = {
  imageMetadata?: any;
  src: string;
  title: string;
  date: string;
  author: any;
};

type BackgroundImageProps = {
  backgroundColor: string;
  src: string;
};

const BackgroundImage = styled.section<BackgroundImageProps>`
  background: url(${(props) => props.src}) ${(props) => props.backgroundColor};
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: calc(100vh - 7rem);
  background-blend-mode: luminosity;
  color: ${(props) => props.color || 'inherit'};
`;

const HeroContentWrapper = styled.div<{ backgroundColor: string }>`
  display: flex;
  height: 100%;
  & div {
    border-radius: 2px;
    background-color: ${(props) => props.backgroundColor || 'inherit'};
    padding: 2rem 3rem;
    margin: auto;
    text-align: center;
    & h1 {
      padding: 0;
      margin: 0;
    }
  }
`;

export const AuthorAvatar = styled.img`
  margin-top: -6.5rem;
  position: relative;
  border: ${(props) => (props.color ? `5px solid ${props.color}` : 'none')};
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
  vertical-align: top;
  object-fit: cover;
`;

export const BlogBackgroundHeroImage = ({
  src,
  imageMetadata,
  title,
  date,
  author,
}: Props) => {
  const color = imageMetadata.palette.muted.title;
  const overlay = color.length > 4 ? `${color}80` : `${color}8`;
  return (
    <BackgroundImage
      color={imageMetadata.palette.muted.foreground}
      src={src}
      backgroundColor={overlay}
    >
      <HeroContentWrapper
        backgroundColor={imageMetadata.palette.muted.background}
      >
        <div>
          {author?.image?.asset && (
            <AuthorAvatar
              src={imageUrlFor(buildImageObj(author.image))
                .width(100)
                .height(100)
                .fit('crop')
                .url()}
              alt="Max Karlsson, smiling at the camera"
              color={author.image.asset.metadata.palette.muted.background}
            />
          )}
          <H1>{title}</H1>
          <Paragraph fontSize="base">{date}</Paragraph>
        </div>
      </HeroContentWrapper>
    </BackgroundImage>
  );
};
