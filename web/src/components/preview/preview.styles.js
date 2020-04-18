import styled from 'styled-components'

import { mediaQueries, fontSizes, lineHeights } from '../../styles/theme'
import { Link } from 'gatsby'

export const Wrapper = styled.div`
  transition: transform .15s;
  border-radius: 0 0 3px 3px;
  border: 1px solid ${props => props.theme.lightgrey};
  height: 100%;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.05) rotate3d(1,1,1, 2deg);
      box-shadow: 4px 3px 10px 0 rgba(75,75,75,0.2);
    }
  }
`

export const LeadMediaThumb = styled.div`
  position: relative;
  padding-bottom: 66.666%;
  background: ${props => props.theme.offWhite};

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const TextWrapper = styled.div`
  padding: 0 1rem 0.5rem;
`

export const Excerpt = styled.div`
  & p {
    margin: 0.5em 0;
  }

  & strong {
    font-weight: 600;
  }
`

export const Date = styled.div`
  font-size: ${fontSizes.small};
  line-height: ${lineHeights.small};
  color: ${props => props.theme.grey};
`

export const StyledLink = styled(Link)`
  display: blog;
  color: inherit;
  text-decoration: none;

  ${props => props.displayType === 'list' && 
    `${mediaQueries.minMedium} {
      display: grid;
      grid - template - columns: 1fr 2fr;
      grid - gap: 2em;
    }`
}
`