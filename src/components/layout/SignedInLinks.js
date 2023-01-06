import { NavLink, useNavigate } from "react-router-dom";
import auth from "../../firebase/fireBaseCof"
import { useDispatch } from "react-redux";
import { signOutAction } from "../../redux/authSlice";

const SignedInLinks = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = () => {
            dispatch(signOutAction())
            navigate("/")
    }

    return ( 
        <ul className="right">
            <li><NavLink to="/create">New Project</NavLink></li>
            <li onClick={ handleClick }><NavLink to="/">Log Out</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">AB</NavLink></li> 
        </ul>
     );
}
 
export default SignedInLinks;