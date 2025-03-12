import Nav from "../Nav/Nav"

export const Header = () => {

    const toggleMenu = () => {
        const menu = document.getElementById("header");
        if (menu.style.display == "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "block";

        }
    }

    return (
        <>
            <div id="header" className="sticky top-0 flex flex-wrap justify-center gap-[20px] md:gap-[70px] h-[50px] rounded-b-[3px] items-center font-bold text-custom-950 hover:text-custom-50 ">
                <Nav enlaces=''>Sobre mí</Nav>
                <Nav enlaces=''>Habilidades Técnicas</Nav>
                <Nav enlaces=''>Habilidades Sociales</Nav>
                <Nav enlaces=''>Certificados</Nav>
            </div>
            <div id="menuHamburguer" className="w-fit" onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-[30px] w-[30px] text-custom-950 hover:text-custom-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </div>
        </>
    )
}

export default Header