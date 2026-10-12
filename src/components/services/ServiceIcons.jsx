const IconWrapper = ({ children, className = "" }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
};

export const ArrowIcon = ({ className }) => (
  <IconWrapper className={className}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </IconWrapper>
);

export const CheckIcon = ({ className }) => (
  <IconWrapper className={className}>
    <path d="m5 12 4 4L19 6" />
  </IconWrapper>
);

export const NetworkIcon = ({ className }) => (
  <IconWrapper className={className}>
    <rect x="9" y="3" width="6" height="5" rx="1" />
    <rect x="3" y="16" width="6" height="5" rx="1" />
    <rect x="15" y="16" width="6" height="5" rx="1" />
    <path d="M12 8v4" />
    <path d="M6 16v-4h12v4" />
  </IconWrapper>
);

export const ServerIcon = ({ className }) => (
  <IconWrapper className={className}>
    <rect x="3" y="4" width="18" height="6" rx="1" />
    <rect x="3" y="14" width="18" height="6" rx="1" />
    <path d="M7 7h.01" />
    <path d="M7 17h.01" />
  </IconWrapper>
);

export const CloudIcon = ({ className }) => (
  <IconWrapper className={className}>
    <path d="M7 18h10a4 4 0 0 0 .5-7.97A6 6 0 0 0 6 8.5 4.5 4.5 0 0 0 7 18Z" />
  </IconWrapper>
);

export const SecurityIcon = ({ className }) => (
  <IconWrapper className={className}>
    <path d="M12 3 20 6v5c0 5-3.4 8.2-8 10-4.6-1.8-8-5-8-10V6l8-3Z" />
    <path d="m9 12 2 2 4-4" />
  </IconWrapper>
);

export const CodeIcon = ({ className }) => (
  <IconWrapper className={className}>
    <path d="m8 9-4 3 4 3" />
    <path d="m16 9 4 3-4 3" />
    <path d="m14 5-4 14" />
  </IconWrapper>
);

export const TrainingIcon = ({ className }) => (
  <IconWrapper className={className}>
    <path d="m3 9 9-5 9 5-9 5-9-5Z" />
    <path d="M7 11v5c2.8 2 7.2 2 10 0v-5" />
    <path d="M21 9v6" />
  </IconWrapper>
);

export const ConsultingIcon = ({ className }) => (
  <IconWrapper className={className}>
    <circle cx="12" cy="8" r="3" />
    <path d="M5 21a7 7 0 0 1 14 0" />
    <path d="M4 12h3" />
    <path d="M17 12h3" />
  </IconWrapper>
);
