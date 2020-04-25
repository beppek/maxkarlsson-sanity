import React from 'react';
import BasePortableText from '@sanity/block-content-to-react';

import clientConfig from '../../client-config';
import serializers from './serializers';

type PortableTextProps = {
  blocks: any;
};

const PortableText = ({ blocks }: PortableTextProps) => {
  return (
    <BasePortableText
      blocks={blocks}
      serializers={serializers}
      {...clientConfig.sanity}
    />
  );
};

export default PortableText;
