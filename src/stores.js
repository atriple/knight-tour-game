import { getTotalLevel } from "./data";
import { writable } from "svelte/store";

const STATE = {
  //Trivia: Each individual object assigned will be unique, so it's good idea to assign value to {}
  BEGIN: {},
  GAME: {},
  CHOOSE_LEVEL: {},
  HOW_TO_PLAY: {},
};

const currentState = writable(STATE.BEGIN);
const currentLevel = writable(0);
const finishedLevel = writable(new Array(getTotalLevel()));

export { STATE, currentState, currentLevel, finishedLevel };
