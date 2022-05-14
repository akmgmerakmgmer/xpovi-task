import { useState } from "react"

type QuestionsTemplateProps = {
    question: string,
    questionsAnswers: Array<string>,
    getAnswer:(answer:string)=>void
}
const QuestionsTemplate = (props: QuestionsTemplateProps) => {
    const submitAnswer = (e:any)=>{
        props.getAnswer(e.target.value)
    }
    return (
        <>
            <p className="fw-bolder fs-3 mt-5">{props.question}</p>
            {props.questionsAnswers.map(answer => {
                return (
                    <div className="mt-3" key={answer}>
                        <input value={answer} className="form-check-input" type="radio" name={props.question} onChange={submitAnswer}/>
                        <label className="form-check-label d-inline-block ms-3">
                            {answer}
                        </label>
                    </div>
                )
            })}
        </>
    )
}

export default QuestionsTemplate