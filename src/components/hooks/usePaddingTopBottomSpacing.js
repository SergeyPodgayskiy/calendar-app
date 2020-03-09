const usePaddingTopBottomSpacing = (theme, value) => {
  return {
    paddingTop: theme.spacing(value),
    paddingBottom: theme.spacing(value),
  };
};

export default usePaddingTopBottomSpacing;
