export const STEP_LABELS: Record<string, string> = {
  INHALE: 'Nefes Al',
  EXHALE: 'Nefes Ver',
  HOLD_AFTER_INHALE: 'Nefesi Tut',
  HOLD_AFTER_EXHALE: 'Bekle',
};

export const STEP_COLORS: Record<string, string> = {
  INHALE: 'from-emerald-400 to-blue-500',
  EXHALE: 'from-orange-400 to-red-500',
  HOLD_AFTER_INHALE: 'from-blue-400 to-purple-500',
  HOLD_AFTER_EXHALE: 'from-gray-400 to-slate-500',
};

export const STEP_ICONS: Record<string, string> = {
  INHALE: '🫁',
  EXHALE: '💨',
  HOLD_AFTER_INHALE: '⏸️',
  HOLD_AFTER_EXHALE: '⏳',
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};
