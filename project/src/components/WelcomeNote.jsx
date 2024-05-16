
import { Outlet } from "react-router-dom";
import { NavLink} from "react-router-dom";


const WelcomeNotes = () => {

  return (
    <>

<h1>Calculater and diffrent Time-zones</h1>
<br />


<div className="timeContainer">
<NavLink to="/TimeNY">NewYorkTime</NavLink>
<br />
<NavLink to="/TimeLO">London-Time</NavLink>
<br />
<NavLink to="/TimeTo">Tokyo-Time</NavLink>
</div>

 <Outlet />
 
    </>
  )
}

export default WelcomeNotes