import { useRef, useState } from "react"

const SignUp = ({toggle2}) => {

    // uri_endpoint = api endpoint via which post request are sent to signup new users 
    const uri_endpoint = "https://api-tree-app.onrender.com/users" 
    const password = useRef()
    const email = useRef()

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    let count = 0

    const handleEmailAuth = async(uri_endpoint) => {
        try {
            const res = await fetch(uri_endpoint, {
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({email, password})
            })
            console.log(res)
            
            isAuthenticated === false && setIsAuthenticated(true)
            console.log(isAuthenticated);
            toggle2()

        } catch (err) {
            console.log(err.message);
        }

    }

    const handleGoogleAuth = async() =>{
        
        count += 1
        console.log(count);

        try {
            const user = await fetch('https://api-tree-planting.onrender.com/auth/google')
            console.log(user);
            toggle2()
        } catch (error) {
            console.log(error.message);
        }
    }
    // end of signup logic
    console.log(count);

    return ( 
        <div className="signup">
            <button className="g-btn" onClick={() => handleGoogleAuth()}> Continue with Google </button>
            <h3>OR</h3>
            <form>
                <input 
                    type="email" 
                    placeholder="email" 
                    ref={email} 
                    required />

                <input 
                    type="password" 
                    placeholder="password" 
                    ref={password} 
                    required/>

                <button 
                    className="e-btn" 
                    onClick={() => handleEmailAuth(uri_endpoint)}
                    >Sign up</button>
            </form>
        </div>
     );
}
 
export default SignUp;