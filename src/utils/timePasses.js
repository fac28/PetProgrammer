import isDead from "./deathCheck.js";

export default function timePasses(age) {
  isDead(age);
  return age + 1;
}
