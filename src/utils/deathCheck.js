export default function isDead(age) {
  if (age + 1 > 49) {
    setAlive(false);
    return;
  }
}
