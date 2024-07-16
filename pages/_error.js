// pages/_error.js
import React from 'react';
import Error from 'next/error';

const MyError = ({ statusCode }) => {
  return (
    <Error statusCode={statusCode} />
  );
};

MyError.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default MyError;
