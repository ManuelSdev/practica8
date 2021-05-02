

const FormField = ({ children, ...props }) => {

    return (
        <div className="formField">
            <input
                className="input is-primary"
                type="text"
                placeholder={children}
                // autoComplete="off"
                {...props}
            />

        </div>
    )

}

export default FormField