import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import './App.css'




import WelcomeNote from './components/WelcomeNote'
import TokyoTime from './components/TimeTO'
import LondonTime from './components/TimeLO'
import NewYorkTime from './components/TimeNY'

function App() {
 

  return (
    <Router>
      
      
      <TokyoTime />
      <LondonTime/>
      <NewYorkTime/>
      <WelcomeNote />

      
      



    </Router>
  )
}

export default App
