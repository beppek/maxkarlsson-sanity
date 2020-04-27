import React, { ReactElement } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import BackgroundImage from 'gatsby-background-image';

const query = graphql`
  query {
    desktop: allFile {
      nodes {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;

type Props = {
  className?: string;
  children: ReactElement | ReactElement[];
  light?: boolean;
};

const BackgroundSection = ({ className, children, light }: Props) => {
  const color = light ? `rgba(250,250,250,0.8)` : `rgba(25,25,25,0.8)`;
  const data = useStaticQuery(query);
  const randomImage = Math.floor(
    Math.random() * Math.floor(data.desktop.nodes.length - 1),
  );
  const imageData = data.desktop.nodes[randomImage].childImageSharp.fluid;
  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={imageData}
      backgroundColor={color}
    >
      {children}
    </BackgroundImage>
  );
};

const BackgroundHeroImage = styled(BackgroundSection)`
  background-blend-mode: saturation;
  width: 100%;
  height: 100vh;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`;

export default BackgroundHeroImage;
