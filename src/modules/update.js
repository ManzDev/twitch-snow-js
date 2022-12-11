import { WIDTH, HEIGHT, WIND_FACTOR, WAVE_LIMIT } from "./constants.js";

const OFFSET = 60;

export const update = (ctx, snowFlakes) => {
  snowFlakes.forEach(snowflake => {
    // movement
    snowflake.y += snowflake.speed;

    snowflake.wave.value += snowflake.wave.direction;
    const isOutWave =
      snowflake.wave.value < (WAVE_LIMIT * -1) ||
      snowflake.wave.value > (WAVE_LIMIT);

    if (isOutWave) {
      snowflake.wave.direction *= -1;
    }

    snowflake.x += WIND_FACTOR + (snowflake.wave.value / 100);

    const isOutDown = snowflake.y > HEIGHT + OFFSET;
    const isOutRight = snowflake.x > (WIDTH + OFFSET);
    const isOutLeft = snowflake.x < (OFFSET * -1);

    // reset
    if (isOutDown) {
      snowflake.y = OFFSET * -1;
      snowflake.x = ~~(Math.random() * WIDTH);
    }

    if (isOutRight) {
      snowflake.x = OFFSET * -1;
      // snowflake.y = 500; // surtidor
      snowflake.y = ~~(Math.random() * HEIGHT);
    }

    if (isOutLeft) {
      snowflake.x = WIDTH + OFFSET;
      snowflake.y = ~~(Math.random() * HEIGHT);
    }
  });
};
