import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import QuestionsTemplate from "../components/QuestionsTemplate"
import Button from "../components/RegularButton"

const Main = ()=>{
    const firstQuestion = ['B2C','B2B','both']
    const secondQuestion = ['yes','no']
    const thirdQuestion = ['yes','no']
    const [firstAnswer,setFirstAnswer]=useState("")
    const [secondAnswer,setSecondAnswer]=useState("")
    const [thirdAnswer,setThirdAnswer]=useState("")
    let navigate = useNavigate()
    useEffect(()=>{
        if(localStorage.getItem('token')===null){
            navigate('/')
        }
    },[])
    const getFirstAnswer = (answer:string)=>{
        if(answer==="B2C"){
            localStorage.removeItem('thirdAnswer')
        }
        if(answer==="B2B"){
            localStorage.removeItem('secondAnswer')
        }
        setFirstAnswer(answer)
        localStorage.setItem('firstAnswer',answer)
    }
    const getSecondAnswer = (answer:string)=>{
        setSecondAnswer(answer)
        localStorage.setItem('secondAnswer',answer)
    }
    const getThirdAnswer = (answer:string)=>{
        setThirdAnswer(answer)
        localStorage.setItem('thirdAnswer',answer)
    }
    const showSubmitButton = ()=>{
        if(firstAnswer==="B2C"&&secondAnswer!==""){
            return true;
        }
        if(firstAnswer==="B2B"&&thirdAnswer!==""){
            return true;
        }
        if(firstAnswer==="both"&&secondAnswer!==""&&thirdAnswer!==""){
            return true;
        }
    }
    return(
        <div className="m-5">
            <QuestionsTemplate question="Is your business model B2C or B2B or both?" questionsAnswers={firstQuestion} getAnswer={(answer)=>getFirstAnswer(answer)}/>
            {firstAnswer==='B2C'||firstAnswer==='both'?<QuestionsTemplate question="Do you target all age brackets?" questionsAnswers={secondQuestion} getAnswer={(answer)=>getSecondAnswer(answer)}/>:null}
            {firstAnswer==='B2B'||firstAnswer==='both'?<QuestionsTemplate question="Do you target all industries?" questionsAnswers={thirdQuestion} getAnswer={(answer)=>getThirdAnswer(answer)}/>:null}
            {showSubmitButton()?<div className="mt-3 d-flex w-100 justify-content-end">
                <Link to="/answers"><Button buttonName="Next" submit={()=>{}}/></Link>
            </div>:null}
        </div>
    )
}


export default Main