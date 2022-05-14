type ButtonTypes = {
    loading: boolean,
    submit:()=>any,
    buttonName:string,
    buttonWidth:string
}
const Button = (props: ButtonTypes) => {
    return (
        <button className={`btn btn-primary mt-4 ${props.buttonWidth}`} type="button" disabled={props.loading} onClick={props.submit}>
            {props.loading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> :
                <span className="">{props.buttonName}</span>}
        </button>
    )
}
Button.defaultProps={
    buttonWidth:"w-100"
}
export default Button