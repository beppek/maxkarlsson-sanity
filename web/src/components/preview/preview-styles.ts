import styled from 'styled-components';

import { Link } from 'gatsby';
import {
  mediaQueries,
  fontSizes,
  lineHeights,
  Theme,
} from '../../styles/theme';

type WrapperProps = {
  theme: Theme;
  shadow?: string;
  color: string;
};

export const Wrapper = styled.div<WrapperProps>`
  transition: transform 0.15s;
  border-radius: 2px;
  border: ${(props) =>
    props.color
      ? `5px solid ${props.color}`
      : `1px solid ${props.theme.lightgrey}`};
  height: 100%;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.05) rotate3d(1, 1, 1, 2deg);
      box-shadow: 4px 3px 10px 0
        ${(props) => props.shadow || `rgba(75, 75, 75, 0.2)`};
      & a {
        color: ${(props) => props.color || 'inherit'};
      }
    }
  }
`;

export const LeadMediaThumb = styled.div<{ theme: Theme }>`
  position: relative;
  padding-bottom: 66.666%;
  background: ${(props) => props.theme.offWhite};

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TextWrapper = styled.div`
  padding: 0 1rem 0.5rem;
`;

export const Excerpt = styled.div`
  & p {
    margin: 0.5em 0;
  }

  & strong {
    font-weight: 600;
  }
`;

export const PublishDate = styled.div<{ theme: Theme }>`
  font-size: ${fontSizes.small};
  line-height: ${lineHeights.small};
  color: ${(props) => props.theme.grey};
`;

export const StyledLink = styled(Link)<{ theme: Theme; displayType: string }>`
  display: blog;
  color: inherit;
  text-decoration: none;

  ${(props) =>
    props.displayType === 'list' &&
    `${mediaQueries.minMedium} {
      display: grid;
      grid - template - columns: 1fr 2fr;
      grid - gap: 2em;
    }`}
`;
