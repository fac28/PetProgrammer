import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

// Tom made us do this
export default function Dead ({state}) {
  const { width, height } = useWindowSize()

  if(!state.alive){
  return (
    <Confetti
      width={width}
      height={height}
      />
  )}
}
