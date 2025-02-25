const MAX_BYTE_VALUE = 255;

export function generateHexColor() {
  let color = "#";

  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * 16);
    const hexNumber = randomNumber.toString(16);

    color += hexNumber;
  }

  return color;
}

export function getComplementaryHexColor(hexColor: string) {
  const r = MAX_BYTE_VALUE - parseInt(hexColor.substring(1, 3), 16);
  const g = MAX_BYTE_VALUE - parseInt(hexColor.substring(3, 5), 16);
  const b = MAX_BYTE_VALUE - parseInt(hexColor.substring(5), 16);

  return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
}
