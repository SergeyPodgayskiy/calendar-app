const useMarginTopBottomSpacing = (theme, value) => {
  return {
    marginTop: theme.spacing(value),
    marginBottom: theme.spacing(value),
  };
};

export default useMarginTopBottomSpacing;
