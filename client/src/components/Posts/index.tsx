import React, { FC, ReactElement } from 'react';

import { Post } from './Post';

export const Posts: FC = (): ReactElement => {
  return (
    <div>
      <Post />
      <Post />
    </div>
  );
};
