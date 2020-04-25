import React from 'react';
import { Link } from 'gatsby';

import CoursePreview from './course-preview';

import { Wrapper, Headline, Grid, BrowseMore } from '../lists/grid-styles';

type CourseListProps = {
  title: string;
  nodes: any[];
  browseMoreHref: string;
};

function CourseList({
  browseMoreHref = '',
  title = '',
  nodes = [],
}: CourseListProps) {
  return (
    <Wrapper>
      {title && <Headline>{title}</Headline>}
      <Grid>
        {nodes &&
          nodes.map((node) => (
            <li key={node.id}>
              <CoursePreview {...node} />
            </li>
          ))}
      </Grid>
      {browseMoreHref && (
        <BrowseMore>
          <Link to={browseMoreHref}>Browse more</Link>
        </BrowseMore>
      )}
    </Wrapper>
  );
}

CourseList.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: '',
};

export default CourseList;
