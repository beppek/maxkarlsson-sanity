import styled from 'styled-components';
import Select from '@material-ui/core/Select';

import { Theme } from '../../styles/theme';
import { H1, H2, H3 } from '../typography';

export const Title = styled(H1)`
  margin: 0 auto;
  padding: 0 1.6rem;
  font-size: 2.5rem;
  max-width: 96rem;
`;

export const SubHeading = styled(H2)<{ theme: Theme }>`
  margin: 0 auto;
  padding: 0 1.6rem;
  font-size: 1.8rem;
  max-width: 96rem;
  color: ${(props) => props.theme.grey};
  font-weight: 350;
`;

export const LessonsHeading = styled(H3)<{ theme: Theme }>`
  margin: 0 0 0
    ${(props) => (props.theme.baseMargin ? props.theme.baseMargin : '1')}rem;
`;

export const LessonSelect = styled(Select)<{ theme: Theme }>`
  margin-left: ${(props) =>
    props.theme.baseMargin ? props.theme.baseMargin : '1'}rem;
`;

export const MainImage = styled.div<{ theme: Theme }>`
  margin: ${(props) =>
    props.theme.baseMargin ? props.theme.baseMargin : '1'}rem;
  display: block;
  position: relative;
  text-align: center;

  & img {
    border-radius: 50%;
    height: 10rem;
    vertical-align: top;
    object-fit: cover;
  }
`;
