
import { Outlet } from "react-router-dom";
import { NavLink} from "react-router-dom";


const WelcomeNotes = () => {

  return (
    <>

<h1>Calculator and diffrent Time-zones Display</h1>
<br />


<div className="timeContainer">
<NavLink to="/TimeNY">NewYorkTime</NavLink>
<br />
<NavLink to="/TimeLO">London-Time</NavLink>
<br />
<NavLink to="/TimeTo">Tokyo-Time</NavLink>
<br />
<NavLink to="/Calculator">Calculator</NavLink>

</div>

 <Outlet />
 
    </>
  )
}

export default WelcomeNotes