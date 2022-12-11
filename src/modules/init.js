import { WIDTH, HEIGHT, WAVE_LIMIT } from "./constants.js";
export const TOTAL_SNOWFLAKES = 500;
export const snowFlakes = [];

const DIRECTIONS = [
  -1, 1
];

const TYPES = [
  "arc", "arc", "arc", "arc", "arc", "arc", "arc", "arc",
  "arc", "arc", "arc", "arc", "arc", "arc", "arc", "arc",
  "arc", "arc", "arc", "arc", "arc", "arc", "arc", "arc",
  "arc", "arc", "arc", "arc", "arc", "arc", "arc", "arc",
  "snowflake"
];

// ❆❅

for (let i = 0; i < TOTAL_SNOWFLAKES; i++) {
  const x = ~~(Math.random() * WIDTH);
  const y = ~~(Math.random() * HEIGHT);
  const radius = ~~(Math.random() * 6);
  const opacity = ~~(Math.random() * 255);
  const speed = (0.05 * radius) + Math.random();
  const wave = {
    value: -WAVE_LIMIT + (~~(Math.random() * WAVE_LIMIT) * 2),
    direction: DIRECTIONS[~~(Math.random() * DIRECTIONS.length)]
  };

  const typeIndex = ~~(Math.random() * TYPES.length);
  const type = TYPES[typeIndex];

  snowFlakes.push({ x, y, radius, type, speed, opacity, wave });
}
