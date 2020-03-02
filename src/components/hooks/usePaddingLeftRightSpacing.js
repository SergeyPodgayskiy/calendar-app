import React from 'react';

const usePaddingLeftRightSpacing = (theme, value) => {
  return {
    paddingLeft: theme.spacing(value),
    paddingRight: theme.spacing(value),
  };
};

export default usePaddingLeftRightSpacing;
