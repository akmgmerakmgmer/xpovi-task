import axios from "axios"
import { useState } from "react"
import { Form, FormGroup } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import Button from "../components/ButtonForm"
import FormContainer from "../components/FormContainer"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading,setLoading]=useState(false)
    const [error, setError] = useState(false)
    let navigate = useNavigate();
    const login = ()=>{
        if (email.trim() !== "" && password.trim() !== "") {
            setLoading(true)
            axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAqt1V6xbhI5yBwgPbqco1L6ChWgTPMlSY`, {
                email: email,
                password: password,
                returnSecureToken: true
            }).then(response => {
                setError(false)
                navigate('/main')
                localStorage.setItem('token', response.data.idToken)
                console.log(response.data.idToken)
            }).catch(error => {
                setError(true)
            }).finally(() => {
                setLoading(false)
            })
        } else {
            setError(true)
        }
    }
    return (
        <FormContainer>
            <div>
                <h1 className="text-center fw-bolder fs-3">Login</h1>
                <Form>
                    <FormGroup className="mt-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control disabled={loading} type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                    </FormGroup>
                    <FormGroup className="mt-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control disabled={loading} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </FormGroup>
                    <Button buttonName="Login" loading={loading} submit={login}/>
                </Form>
                {error ? <span className="text-danger">Please enter your email or password correctly</span> : null}
                <p className="mt-2 text-muted">Doesn't have an account? <Link to="/signup">Signup</Link></p>
            </div>
        </FormContainer>
    )
}

export default Login