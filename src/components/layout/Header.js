import Button from "../shared/Button"
import Search from "./Search"

const Header = () => {



    return (
        <div className="Header">
            <div className="container is-fluid">
                <div className="notification is-primary">
                    <Search></Search>
                    <Button></Button>
                </div>
            </div>
        </div>
    )
}

export default Header