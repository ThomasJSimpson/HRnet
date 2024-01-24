export default function getPageSizeNumber(nb) {
  return Array.from({ length: nb }, (_, i) => ({ value: (i + 1) * 10, label: (i + 1) * 10 }));
}
