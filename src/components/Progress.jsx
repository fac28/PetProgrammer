export default function Progress({dispatch, state}){

  const energy_percent = Math.min(Math.max(state.energy, 0), 100);
  const filledEnergy = Math.floor((energy_percent / 100) * 20);
  const emptyEnergy = 20 - filledEnergy;
  const energyBar = "▓".repeat(filledEnergy) + "░".repeat(emptyEnergy);

  const codingLevel = Math.min(Math.max(state.codingSkill, 0), 25);
  const filledCoding = Math.max(Math.floor((codingLevel/ 25) * 20), 0);
  const emptyCoding = 20 - filledCoding;
  const codeBar = "▓".repeat(filledCoding) + "░".repeat(emptyCoding);

  return (
    <>
      <p>
        Energy Level [<span id="ascii-progress-bar-1">{energyBar}</span>]
      </p>
      <p>
        Coding Level [<span id="ascii-progress-bar-2">{codeBar}</span>]
      </p>
    </>
  );
}
