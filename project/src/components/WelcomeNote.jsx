
import { Outlet } from "react-router-dom";
import { NavLink} from "react-router-dom";


const WelcomeNotes = () => {

  return (
    <>

<h1>Calculate and time</h1>
<div>
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