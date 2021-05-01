import Button from "../shared/Button"
import Search from "./Search"

const Header = () => {



    return (
        <div className="Header">
            <div class="container is-fluid">
                <div class="notification is-primary">
                    <Search></Search>
                    <Button></Button>
                </div>
            </div>
        </div>
    )
}

export default Header