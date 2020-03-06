import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      This is another page
      <Link to='/'>Go back to home page</Link>
    </div>
  );
};
