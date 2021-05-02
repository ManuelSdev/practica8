



const Button = ({ children }) => {

    return (
        <div className="Button">
            <div className="buttons">
                <button className="button is-primary">{children}</button>
            </div>
        </div>
    )
}

export default Button