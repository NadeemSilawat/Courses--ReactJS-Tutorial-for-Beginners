import React from 'react'

function Hero({heroname}) {
    if(heroname === 'Joker') {
        throw new Error('Joker is not allowed');
    }
    return (
    <div>
        {heroname}
    </div>
  )
}

export default Hero