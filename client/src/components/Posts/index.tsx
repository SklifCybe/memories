import React, { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';

import { Post } from './Post';

export const Posts: FC = (): ReactElement => {
  const data = useSelector((data) => data);

  React.useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div>
      <Post />
      <Post />
    </div>
  );
};
