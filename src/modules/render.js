import { WIDTH, HEIGHT } from "./constants.js";

export const render = (ctx, snowFlakes, snowGround) => {
  ctx.clearRect(0, 0, WIDTH, HEIGHT - snowGround);
  snowFlakes.forEach(snowflake => {
    const { x, y, radius, type, opacity } = snowflake;
    ctx.fillStyle = "#ffffff" + opacity.toString(16);

    if (type === "arc") {
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.fill();
    } else if (type === "snowflake") {
      ctx.font = "35px serif";
      ctx.fillStyle = "#ffffff" + opacity.toString(16);
      ctx.fillText("❆", x, y);
    }
  });
};
