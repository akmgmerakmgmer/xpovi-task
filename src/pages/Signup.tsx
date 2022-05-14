import axios from "axios"
import { useState } from "react"
import { Form, FormGroup } from "react-bootstrap"
import { Link,useNavigate} from "react-router-dom"
import Button from "../components/ButtonForm"
import FormContainer from "../components/FormContainer"

const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    let navigate = useNavigate();
    const signup = () => {
        if (email.trim() !== "" && password.trim() !== "") {
            setLoading(true)
            axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAqt1V6xbhI5yBwgPbqco1L6ChWgTPMlSY`, {
                email: email,
                password: password,
                returnSecureToken: true
            }).then(response => {
                setError(false)
                navigate('/')
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
                <h1 className="text-center fw-bolder fs-3">Signup</h1>
                <Form>
                    <FormGroup className="mt-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control disabled={loading} type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                    </FormGroup>
                    <FormGroup className="mt-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control disabled={loading} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </FormGroup>
                    <Button buttonName="Signup" loading={loading} submit={signup} />
                </Form>
                {error ? <span className="text-danger">Please enter your email or password correctly</span> : null}
                <p className="mt-2 text-muted">Have an account?<Link to="/">Login</Link></p>
            </div>
        </FormContainer>
    )
}

export default Signup