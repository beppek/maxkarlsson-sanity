import styled from 'styled-components';

import { mediaQueries, fontSizes, lineHeights } from '../../styles/theme';

export const Wrapper = styled.div`
  margin: 2rem 0 4rem;
`;

export const Grid = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 3rem;
  grid-auto-rows: max-content;

  @media ${mediaQueries.minSmall} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${mediaQueries.minMedium} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Headline = styled.h2`
  font-size: ${fontSizes.micro};
  line-height: ${lineHeights.micro};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 2rem 0;
`;

export const BrowseMore = styled.div`
  font-size: ${fontSizes.small};
  line-height: ${lineHeights.small};
  margin-top: 1rem;
  text-align: right;

  & a {
    display: inline-block;
    padding: 0.5rem 0;
    color: inherit;
    text-decoration: none;

    @media (hover: hover) {
      &:hover {
        color: ${(props) => props.theme.blue};
      }
    }
  }
`;
