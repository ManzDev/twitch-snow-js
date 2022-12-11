import { WIDTH, HEIGHT } from "./modules/constants.js";
import { snowFlakes } from "./modules/init.js";
import { render } from "./modules/render.js";
import { update } from "./modules/update.js";
import "./components/SunStar.js";

const INTERVAL_SNOW = 100;

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = WIDTH;
canvas.height = HEIGHT;

const rePaint = (ctx, snowGround) => {
  ctx.fillStyle = "#ffffff";
  const threshold = HEIGHT - snowGround + 3;
  ctx.fillRect(0, threshold, WIDTH, HEIGHT);
};

let snowGround = 0;

const checkIsSunPresent = () => {
  const sunStar = document.querySelector("sun-star");
  return sunStar.classList.contains("appears");
};

setInterval(() => {
  if (checkIsSunPresent() && snowGround > 0) {
    snowGround -= 2;
  } else {
    snowGround += 0.25;
  }
  rePaint(ctx, snowGround);
}, INTERVAL_SNOW);

const loop = () => {
  update(ctx, snowFlakes);
  render(ctx, snowFlakes, snowGround);
  requestAnimationFrame(loop);
};

requestAnimationFrame(loop);

canvas.addEventListener("click", () => {
  const sun = document.querySelector("sun-star");
  sun.classList.add("appears");
  setTimeout(() => sun.classList.remove("appears"), 7000);
});
