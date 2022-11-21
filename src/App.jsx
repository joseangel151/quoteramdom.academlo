import { useState } from 'react'
import './App.css'
import QuoteBox from './assets/components/QuoteBox'
import QuoteButton from './assets/components/QuoteButton'
import quote from './json/quotes.json'
import color from './utils/color'

function App() {
  //calcular un elemento random de un arreglo
  const getIndexRandom = quotebase => Math.floor(Math.random() * quotebase.length)

  //Obtiene el primer indice al azar
  const firstQuote = quote[getIndexRandom(quote)]
  const [randomQuote, setRandomQuote] = useState(firstQuote)

  //Obtiene el primer color al azar
  const firstColor = color[getIndexRandom(color)]
  const [randomColor, setRandomColor] = useState(firstColor)

  //Guardar el objeto de colores en una constante
  const backgroundRandom = {
    backgroundColor: randomColor
  }
  // Se calcula una frase y un color random
  const getRandomAll = () => {
    setRandomQuote(quote[getIndexRandom(quote)])
    setRandomColor(color[getIndexRandom(color)])
  }

  return (
    <div style={backgroundRandom} className="App">

      <QuoteBox
        randomQuote={randomQuote}
        randomColor={randomColor}
        getRandomAll={getRandomAll}
      />
      <div className='burbujas'>
        <div className='burbuja'></div>
        <div className='burbuja'></div>
        <div className='burbuja'></div>
        <div className='burbuja'></div>
        <div className='burbuja'></div>
        <div className='burbuja'></div>
        <div className='burbuja'></div>
        <div className='burbuja'></div>
        <div className='burbuja'></div>
        <div className='burbuja'></div>
        <div className='burbuja'></div>
        <div className='burbuja'></div>
        <div className='burbuja'></div>
        <div className='burbuja'></div>
        <div className='burbuja'></div>
        <div className='burbuja'></div>
        <div className='burbuja'></div>
        <div className='burbuja'></div>
        <div className='burbuja'></div>
        <div className='cuadrado'></div>
        <div className='cuadrado'></div>
        <div className='cuadrado'></div>
        <div className='cuadrado'></div>
        <div className='cuadrado'></div>
        <div className='cuadrado'></div>
        <div className='cuadrado'></div>
        <div className='cuadrado'></div>
        <div className='cuadrado'></div>
        <div className='cuadrado'></div>
      </div>
    </div>
  )
}
export default App
