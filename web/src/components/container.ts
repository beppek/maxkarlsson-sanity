import styled from 'styled-components';

import { mediaQueries, Theme } from '../styles/theme';

const Container = styled.div<{ theme: Theme }>`
  box-sizing: border-box;
  max-width: ${(props) => props.theme.maxWidth};
  padding: 2rem;
  margin: 0 auto;

  @media ${mediaQueries.minSmall} {
    padding: 3rem;
  }
`;

export default Container;
