type FormProps = {
    children :any
}
const FormContainer = (props:FormProps)=>(
    <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="p-4 bg-white shadow-sm w-75 rounded mt-5">
            {props.children}
        </div>
    </div>
)

export default FormContainer