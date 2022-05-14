type ButtonTypes = {
    submit:()=>any,
    buttonName:string
}
const Button = (props: ButtonTypes) => {
    return (
        <button className="btn btn-primary mt-4 text-white" type="button" onClick={props.submit}>{props.buttonName}</button>
    )
}

export default Button