import Nav from "../Nav/Nav";
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
            <div id="header" className="sticky top-0 text-center flex justify-center flex-col gap-[20px] sm:flex-row md:gap-[70px] h-fit rounded-b-[3px] items-center font-bold text-custom-950 hover:text-custom-50 ">
                <Nav route='/Portfolio'>Sobre mí</Nav>
                <Nav route='Portfolio/technologies' style='a-link'>Habilidades Técnicas</Nav>
                <Nav route='Portfolio/social-skills' style='a-link'>Habilidades Sociales</Nav>
                <Nav route='Portfolio/certificates' style='a-link'>Certificados</Nav>
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