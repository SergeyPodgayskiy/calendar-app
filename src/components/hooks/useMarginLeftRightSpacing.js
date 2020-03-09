const useMarginLeftRightSpacing = (theme, value) => {
  return {
    marginLeft: theme.spacing(value),
    marginRight: theme.spacing(value),
  };
};

export default useMarginLeftRightSpacing;
