export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.7, delay, ease: "easeOut" },
  }),
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

export const viewportOnce = { once: true, amount: 0.25 };
