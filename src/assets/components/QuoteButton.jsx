import React from 'react'



const QuoteButton = ({randomColor, getRandomAll}) => {

    const buttonColor = {
        backgroundColor: randomColor 
    }
 
    return (
    <button 
    onClick={getRandomAll} 
    className='card__btn' 
    style={buttonColor}
    > &#10145; 
    </button>
  )
}

export default QuoteButton