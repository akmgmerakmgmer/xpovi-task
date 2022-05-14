import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import AnswersTemplate from "../components/AnswersTemplate"
import RegularButton from "../components/RegularButton"
import FormButton from "../components/ButtonForm"
import { useEffect, useState } from "react"
import { Alert } from "react-bootstrap"


const Answers = () => {
    const [loading, setLoading] = useState(false)
    const [alertClass,setAlertClass]=useState('opacity-0')
    const [requestError,setRequestError]=useState('opacity-0')
    let navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('token')===null){
            navigate('/')
        }
    },[])
    const submitAnswers = () => {
        setLoading(true)
        let answers = [{
            question: 'Is your business model B2C or B2B or both?',
            answer: localStorage.getItem('firstAnswer')
        }]
        if (localStorage.getItem('firstAnswer') === "B2C") {
            answers.push({
                question: 'Do you target all age brackets?',
                answer: localStorage.getItem('secondAnswer')
            })
        }
        if (localStorage.getItem('firstAnswer') === "B2B") {
            answers.push({
                question: 'Do you target all industries?',
                answer: localStorage.getItem('thirdAnswer')
            })
        }
        if (localStorage.getItem('firstAnswer') === "both") {
            answers.push({
                question: 'Do you target all age brackets?',
                answer: localStorage.getItem('secondAnswer')
            }, {
                question: 'Do you target all industries?',
                answer: localStorage.getItem('thirdAnswer')
            })
        }
        console.log(answers)
        axios.post(`https://xpovi-4b4e5-default-rtdb.firebaseio.com/answers.json?auth=${localStorage.getItem('token')}`, answers).then(response=>{
            setAlertClass("opacity-100")
        }).catch(error=>{
            setRequestError("opacity-100")
        }).finally(() => {
            setLoading(false)
        })
        setTimeout(()=>{
            setAlertClass("opacity-0")
            setRequestError("opacity-0")
        },2000)
    }
    return (
        <div className="m-5">
            <AnswersTemplate question="Is your business model B2C or B2B or both?" answer={localStorage.getItem('firstAnswer')} />
            {localStorage.getItem('secondAnswer') ? <AnswersTemplate question="Do you target all age brackets?" answer={localStorage.getItem('secondAnswer')} /> : null}
            {localStorage.getItem('thirdAnswer') ? <AnswersTemplate question="Do you target all industries?" answer={localStorage.getItem('thirdAnswer')} /> : null}
            <div className="mt-3 d-flex w-100 justify-content-end">
                <Link to="/main" className="mx-2"><RegularButton buttonName="Previous" submit={() => { }} /></Link>
                <FormButton buttonName="Submit" submit={submitAnswers} loading={loading} buttonWidth="" />
            </div>
            <div className="position-fixed bottom-0 left-50">
                <Alert variant="success" className={`${alertClass}`} >
                    Answers Submitted Successfully
                </Alert>
                <Alert variant="danger" className={`${requestError}`} >
                    Please sign in to submit your answers
                </Alert>
            </div>
        </div>

    )
}

export default Answers