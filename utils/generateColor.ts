export default function generateHexColor() {
  let color = "#";

  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * 16);
    const hexNumber = randomNumber.toString(16);

    color += hexNumber;
  }

  return color;
}
