import React from 'react';

import config from '../../../config';

import PreviewItem from '../preview/item';

function CoursePreview({
  isInList,
  publishedAt,
  slug,
  mainImage,
  title,
  excerpt,
}) {
  return (
    <PreviewItem
      excerpt={excerpt}
      mainImage={mainImage}
      title={title}
      publishedAt={publishedAt}
      link={`/${config.routes.learn}/${slug.current}`}
      displayType={isInList ? 'list' : 'grid'}
    />
  );
}

export default CoursePreview;
