import * as wasm from "hello-rusty";
import { Universe } from "hello-rusty";

wasm.greet("Hello person.  Let's play the game of life.");

const pre = document.getElementById("game-of-life-canvas");
const universe = Universe.new();

const renderLoop = () => {
  pre.textContent = universe.render();
  universe.tick();

  requestAnimationFrame(renderLoop);
};

requestAnimationFrame(renderLoop);
