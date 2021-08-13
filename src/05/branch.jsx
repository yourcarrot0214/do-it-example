import React from 'react';
import branch from 'recompose/branch';
import Button from '../04/Button';

function isLoading(props) {
  return props.isLoading;
}

function LoadingButton(props) {
  return <Button disabled>Loading</Button>;
}

export default branch(isLoading, () => LoadingButton)(Button);
