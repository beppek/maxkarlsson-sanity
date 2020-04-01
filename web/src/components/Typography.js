import styled from 'styled-components'

export const H1 = styled.h1`
  font-size: ${props => `${props.theme.baseUnit * 4}rem`};
  line-height: '5rem';
  `

export const H2 = styled.h2`
  font-size: ${props => `${props.theme.baseUnit * 2.2}rem`};
  line-height: '3rem';
`

export const H3 = styled.h3`
  font-size: ${props => `${props.theme.baseUnit * 2}rem`};
  line-height: '2.7rem';
`