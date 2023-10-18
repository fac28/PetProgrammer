import React from 'react'

import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

export const ConfettiComponent = () => {
  const { width, height } = useWindowSize()
  return (
    <Confetti
      width={width}
      height={height}
    />
  )
}

ConfettiComponent.displayName = 'Confetti';
