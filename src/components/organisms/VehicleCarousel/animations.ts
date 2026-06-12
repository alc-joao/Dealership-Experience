export const vehicleCarouselAnimation = {
  hidden: {
    opacity: 0,
    y: 16,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const vehicleCardAnimation = {
  hidden: {
    opacity: 0,
    y: 12,
    scale: 0.98,
  },

  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      delay: index * 0.03,
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};
