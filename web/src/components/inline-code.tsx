import React from 'react';
import styled from 'styled-components';
import { useColors } from '../hooks/use-global-colors';

const Code = styled.code`
  font-family: 'Inconsolata', monospace;
  margin: 3px;
  padding: 1px 6px;
  color: ${(props) => props.foreground || props.theme.black};
  background-color: ${(props) => props.accent || '#ebebeb'};
  border: 1px solid #ededed;
  border-radius: 5px;
`;

type InlineCodeProps = {
  value: any;
  language: string;
};

const InlineCode = ({ value }: InlineCodeProps) => {
  const { colors } = useColors();
  return <Code {...colors}>{value}</Code>;
};

export default InlineCode;
