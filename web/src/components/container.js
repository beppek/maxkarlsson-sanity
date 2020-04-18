import styled from 'styled-components'

import { mediaQueries } from '../styles/theme'

const Container = styled.div`
  box-sizing: border-box;
  max-width: ${props => props.theme.maxWidth};
  padding: 2rem;
  margin: 0 auto;

  @media ${mediaQueries.minSmall} {
    padding: 3rem;
  }
`

export default Container
