import Nav from "../Nav/Nav"

export const Header = () => {
    return (
        <div id="header" className="sticky top-0 flex justify-center gap-[10px] h-[50px] rounded-b-[3px] items-center font-bold text-custom-950 hover:text-custom-50 bg-custom-50">
            <Nav links=''>About Me</Nav>
            <Nav links=''>Technical Skills</Nav>
            <Nav links=''>Social Skills</Nav>
            <Nav links=''>Certificates</Nav>
        </div>
    )
}

export default Header