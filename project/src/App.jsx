import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import './App.css'
import TimeTo from "./components/TimeTO"
import TimeLO from "./components/TimeLO"
import ButtonLink from './components/ButtonLink'
import WelcomeNote from './components/WelcomeNote'

function App() {
 

  return (
    <>
      
      <WelcomeNote />

      <Router>
        <div>
          <ButtonLink> Tokyo Time</ButtonLink>
          

          <Routes>
          <Route/>
          
          </Routes>
        </div>
      </Router>


    </>
  )
}

export default App
