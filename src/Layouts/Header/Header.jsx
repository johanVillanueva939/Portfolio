import Nav from "../Nav/Nav"

export const Header = () => {
    return (
            <div id="header" className="sticky top-0 flex justify-center gap-[20px] h-[50px] rounded-b-[3px] items-center font-bold text-custom-950 hover:text-custom-50 bg-custom-50">
            <Nav links=''>Sobre mi</Nav>
            <Nav links=''>Habilidades Tecnicas</Nav>
            <Nav links=''>Habilidades Sociales</Nav>
            <Nav links=''>Certificados</Nav>
        </div>
    )
}

export default Header