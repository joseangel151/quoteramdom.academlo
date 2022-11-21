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
    > &gt;
    </button>
  )
}

export default QuoteButton