export function getRandomHexColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

export function lightenColor(color, factor) {
  let r = parseInt(color.slice(1, 3), 16);
  let g = parseInt(color.slice(3, 5), 16);
  let b = parseInt(color.slice(5, 7), 16);

  r += (255 - r) * factor;
  g += (255 - g) * factor;
  b += (255 - b) * factor;

  r = Math.min(Math.round(r), 255);
  g = Math.min(Math.round(g), 255);
  b = Math.min(Math.round(b), 255);

  return `#${r.toString(16).padStart(2, "0")}${g
    .toString(16)
    .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}

export function darkenColor(color, factor) {
  let r = parseInt(color.slice(1, 3), 16);
  let g = parseInt(color.slice(3, 5), 16);
  let b = parseInt(color.slice(5, 7), 16);

  r *= factor;
  g *= factor;
  b *= factor;

  return `#${Math.max(0, Math.round(r))
    .toString(16)
    .padStart(2, "0")}${Math.max(0, Math.round(g))
    .toString(16)
    .padStart(2, "0")}${Math.max(0, Math.round(b))
    .toString(16)
    .padStart(2, "0")}`;
}
