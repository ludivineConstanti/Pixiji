import { Color } from 'framer';

// animations for Square and MainSquare

export const aAnimateOn = { scale: 1, transition: { type: 'spring', damping: 7.5 } };

export const aAnimateOff = (size) => ({
  scale: [size >= 2 ? 0.2 : 0.3, size >= 2 ? 0.25 : 0.5],
  transition: {
    repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut', repeatDelay: size >= 2 ? 0 : 0.75, duration: 1.5,
  },
});

export const aWind = (
  setter, animation1, columnStart,
) => {
  setTimeout(() => {
    setter({
      ...animation1,
      animateOn: {
        scale: [1, 1.2],
        transition: {
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 0.25 * columnStart,
          repeatDelay: 3,
          ease: 'linear',
          duration: 0.5,
        },
      },
    });
  }, 2000);
};

const shineDuration = 2.5;

export const aShine = (
  setter, animation1, color, value1, value2,
) => {
  const colorL1 = Color.toHexString(Color.lighten(Color(color), value1));
  const colorD1 = Color.toHexString(Color.darken(Color(color), value2));
  setter({
    ...animation1,
    animateOn: {
      scale: [1, 1],
      backgroundColor: [colorL1, colorD1],
      transition: {
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'linear',
        duration: shineDuration,
      },
    },
  });
};

export const aShineBackground = (setter, animation1, presets, color) => {
  const colorL1 = Color.toHexString(Color.lighten(Color(color), 1));
  const colorD1 = Color.toHexString(Color.darken(Color(color), 3));
  setter({
    ...animation1,
    animate: {
      ...presets,
      backgroundColor: [colorD1, colorL1],
      transition: {
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
        duration: shineDuration,
      },
    },
  });
};
