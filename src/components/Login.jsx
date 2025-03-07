import { useNavigate, useParams } from "react-router-dom"

const Login = ()=>{

    let {newUser} = useParams()
    let navigate = useNavigate()

    let handleNavigate = ()=>{
        navigate("/")
    }

    return (
        <div>
        <h3>Login-{newUser}
        </h3>
        <button onClick={handleNavigate}> Move to Home</button>
        </div>
    )
}

export default Login