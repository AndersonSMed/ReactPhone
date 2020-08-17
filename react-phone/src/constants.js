const FONT_SIZES = {
  sm: '16px',
  md: '24px',
  lg: '32px',
};

const getFontSize = (size) => FONT_SIZES[size] || FONT_SIZES.sm;

export {
  getFontSize,
};
