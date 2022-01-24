import './App.css'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Main from './Main/Main'
import { zodiac } from './data'
console.log(zodiac)
function App() {
  return (
    <div className="App">
      <Header name='Philippe Ngom'/>
      <Main zodiac={ zodiac }/>
      <Footer year='2022'/>
    </div>
  )
}

export default App

      // {/* import and use the Header. Main, and Footer components here */}
      // {/* the Header component needs a string passed in as the `name` prop */}
      // {/* the Footer component needs a year passed in as the `year` prop */}
      // {/* pass the zodiac array imported above to the Main component as a `zodiacs` prop */}