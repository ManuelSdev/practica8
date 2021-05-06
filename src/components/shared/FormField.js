

const FormField = ({ children, ...props }) => {

    return (
        <div className="formField">
            <input
                className="input is-primary"
                placeholder={children}
                // autoComplete="off"
                {...props}
            />

        </div>
    )

}

export default FormField