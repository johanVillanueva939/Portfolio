import Tech from "../../UI/Tech/Tech"
import TechTitle from "../../UI/Tech/TechTitle";
import Titles from "../../UI/Titles";

const cardStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px',
    width: '220px',
    height: '220px',
    justifyContent: 'center',
    border: '1px solid var(--color-500)',
    borderBottom: '5px solid var(--color-500)',
    padding: '16px',
    borderRadius: '0 0 5px 5px',
    backgroundColor: 'var(--color-950)',
};

export const Technologies = () => {
    return (
        <div id="techSect" className="flex flex-col items-center justify-center w-fit justify-self-center gap-4">
            <Titles titulo='Habilidades Técnicas' />
            <section className="flex flex-row justify-center items-center flex-wrap gap-10 md:gap-20 w-fit justify-self-center">
                <div className="flex flex-col">
                    <TechTitle textoH3='Lenguajes' />
                    <div style={cardStyle}>
                        <Tech imagen='https://cdn-icons-png.flaticon.com/512/732/732212.png' texto='HTML5' />
                        <Tech imagen='https://cdn-icons-png.flaticon.com/512/732/732190.png' texto='CSS3' />
                        <Tech imagen='https://cdn-icons-png.flaticon.com/128/5968/5968292.png' texto='JavaScript' />
                        <Tech imagen='https://cdn-icons-png.flaticon.com/512/6132/6132221.png' texto='C#' />
                    </div>
                </div>
                <div className="flex flex-col">
                    <TechTitle textoH3='Frameworks & herramientas' />
                    <div style={cardStyle}>
                        <Tech imagen='../../src/assets/Images/react.svg' texto='React' />
                        <Tech imagen='https://www.svgrepo.com/show/374118/tailwind.svg' texto='Tailwind' />
                        <Tech imagen='https://cdn-icons-png.flaticon.com/512/733/733553.png' texto='GitHub' />
                    </div>
                </div>
                <div className="flex flex-col">
                    <TechTitle textoH3='Software' />
                    <div style={cardStyle}>
                        <Tech imagen='https://logospng.org/download/visual-studio-code/visual-studio-code-256.png' texto='VS Code' />
                        <Tech imagen='https://cdn-icons-png.flaticon.com/128/15713/15713436.png' texto='Visual Studio' />
                        <Tech imagen='https://cdn-icons-png.flaticon.com/512/919/919836.png' texto='MySQL' />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Technologies