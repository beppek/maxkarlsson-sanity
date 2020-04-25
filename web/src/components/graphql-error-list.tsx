import React from 'react';

type Props = {
  errors: any;
};

const GraphQLErrorList = ({ errors }: Props) => (
  <div>
    <h1>GraphQL Error</h1>
    {errors.map((error: any) => (
      <pre key={error.message}>{error.message}</pre>
    ))}
  </div>
);

export default GraphQLErrorList;
