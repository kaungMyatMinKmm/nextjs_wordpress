import Nav from "./nav";


const Header = ({ header, headerMenus }) => {
    console.warn('header', header);


    if (Object.entries(headerMenus).length === 0) {
        return null;
    }

    return (
        <header>
            <Nav header={header} headerMenus={headerMenus} />
        </header>
    )
}

export default Header;