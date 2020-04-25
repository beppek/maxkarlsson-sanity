import React from 'react';

import { getBlogUrl } from '../../lib/helpers';

import PreviewItem from '../preview/item';

type BlogPostPreviewProps = {
  isInList: boolean;
  publishedAt: any;
  slug: {
    current: string;
  };
  mainImage: any;
  _rawExcerpt: any;
  title: string;
};

function BlogPostPreview({
  isInList,
  publishedAt,
  slug,
  mainImage,
  _rawExcerpt,
  title,
}: BlogPostPreviewProps) {
  return (
    <PreviewItem
      excerpt={_rawExcerpt}
      mainImage={mainImage}
      title={title}
      publishedAt={publishedAt}
      link={getBlogUrl(publishedAt, slug.current)}
      displayType={isInList ? 'list' : 'grid'}
    />
  );
}

export default BlogPostPreview;
