import type { Variants } from 'framer-motion';

export const statsPanelAnimation: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.8,
      delay: 0.15,
      ease: 'easeOut',
    },
  },
};
