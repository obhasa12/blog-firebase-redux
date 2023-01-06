import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase/fireBaseCof"
import { useNavigate } from "react-router-dom"


const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] =useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleChange = (e) => {
        e.target.id === 'email'? setEmail(e.target.value): setPassword(e.target.value)
    }
    const handleSumbit =(e) => {
        e.preventDefault()
        const credetial = [email, password]
        signInWithEmailAndPassword(auth , ...credetial)
            .then(() => {
                console.log("Login Succes")
                setError(null)
                navigate("/")
            }).catch((err) => {
                console.log(err)
                setError("Loading Failed")
            })
        e.target.reset()
    }

    return ( 
        <div className="container">
            <form onSubmit={handleSumbit} className="white">
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Login</button>
                    <div className="red-text center">
                        { error && <p>{ error }</p>}
                    </div>
                </div>
            </form>
        </div>
     );
}
 
export default SignIn;