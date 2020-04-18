import styled from 'styled-components'

import { mediaQueries, fontSizes, lineHeights } from '../../styles/theme'

export const Article = styled.article`
`

export const MainImageWrapper = styled.div`
  display: block;
  position: relative;
  background: ${props => props.theme.offWhite};
  padding-bottom: calc(9 / 16 * 100%);

  & img {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* vertical-align: top; */
    object-fit: cover;
  }
`

export const BlogPostWrapper = styled.div`
  @media ${mediaQueries.minMedium} {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 2em;
    grid-template-columns: 3fr 1fr;
  }
`

export const BlogPostContent = styled.div`
  & a {
    color: ${props => props.theme.blue};

    @media (hover: hover) {
      &:hover {
        color: inherit;
      }
    }
  }

  & h2, & h3, & h4, & h5, & h6 {
    font-weight: 600;
  }

  & figure {
    margin: 0;
    padding: 0;

    & img {
      max-width: 100%;
    }
  }
`

export const Aside = styled.aside``

export const PublishedAt = styled.div`
  font-size: ${fontSizes.small};
  line-height: ${lineHeights.small};
  margin: 2rem 0 3rem;
  color: ${props => props.theme.gray};
`

export const AsideGroup = styled.div`
  border-top: 1px solid ${props => props.theme.offWhite};
  margin: 2rem 0 3rem;

  & ul {
    list-style: none;
    margin: 0.75rem 0;
    padding: 0;
  }

  & ul li {
    padding: 0.25rem 0;
  }
`

export const AsideGroupHeadline = styled.h3`
  font-size: inherit;
  line-height: inherit;
  margin: 0.5rem 0 0;
`

export const AuthorListWrapper = styled.div`
  margin: 2rem 0 3rem;
  border-top: 1px solid ${props => props.theme.offWhite};
`

export const AuthorListHeading = styled.h2`
  font-size: inherit;
  line-height: inherit;
  font-weight: 600;
  margin: 0.5rem 0 0;
`

export const StyledAuthorList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const AuthorListItem = styled.li`
  font-size: ${fontSizes.small};
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div:last-child {
    flex: 1;
    margin-left: 0.5rem;
  }
`

export const AuthorAvatarWrapper = styled.div`
  position: relative;
  width: 3em;
  height: 3em;
  background: ${props => props.theme.offWhite};
  border-radius: 50%;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    vertical-align: top;
    object-fit: cover;
  }
`