export const getInitials = (name: string) => {
  if (!name) return 'U';
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map((p) => p?.toUpperCase() || '').join('') || 'U';
};

export const getAvatarGradient = (name: string) => {
  const seed = Array.from(name).reduce((a, c) => a + c.charCodeAt(0), 0);
  const hueA = 220 + (seed % 10); // blue-ish
  const hueB = 275 + (seed % 12); // purple-ish
  return `linear-gradient(135deg, hsl(${hueA} 90% 55%), hsl(${hueB} 90% 60%))`;
};
