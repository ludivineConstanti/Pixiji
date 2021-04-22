// eslint-disable-next-line import/prefer-default-export
export const aWind = (
  setter, animation1, columnStart,
) => {
  setTimeout(() => {
    setter({
      ...animation1,
      animateOn: {
        scale: [1, 1.35],
        transition: {
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 0.25 * columnStart,
          repeatDelay: 2,
        },
      },
    });
  }, 1000);
};
