type AnswersTemplateProps = {
    question:string,
    answer:any,
}
const AnswersTemplate = (props:AnswersTemplateProps)=>{
    return(
        <div className="mt-3">
            <p className="fw-bolder fs-3 mt-5">{props.question}</p>
            <span className="fs-4 d-block mt-2">{props.answer}</span>
        </div>
    )
}

export default AnswersTemplate