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
        <div id="techSect" className="flex flex-col items-star justify-center w-fit justify-self-center gap-4">
            <Titles title='Habilidades Técnicas' />
            <section className="flex flex-row justify-center items-center flex-wrap gap-20 w-fit justify-self-center">
                <div className="flex flex-col">
                    <TechTitle texth3='Lenguajes' />
                    <div style={cardStyle}>
                        <Tech image='https://cdn-icons-png.flaticon.com/512/732/732212.png' text='HTML5' />
                        <Tech image='https://cdn-icons-png.flaticon.com/512/732/732190.png' text='CSS3' />
                        <Tech image='https://cdn-icons-png.flaticon.com/128/5968/5968292.png' text='JavaScript' />
                        <Tech image='https://cdn-icons-png.flaticon.com/512/6132/6132221.png' text='C#' />
                    </div>
                </div>
                <div className="flex flex-col">
                    <TechTitle texth3='Frameworks & tools' />
                    <div style={cardStyle}>
                        <Tech image='../../src/assets/Images/react.svg' text='React' />
                        <Tech image='https://www.svgrepo.com/show/374118/tailwind.svg' text='Tailwind' />
                        <Tech image='https://cdn-icons-png.flaticon.com/512/733/733553.png' text='GitHub' />
                    </div>
                </div>
                <div className="flex flex-col">
                    <TechTitle texth3='Software' />
                    <div style={cardStyle}>
                        <Tech image='https://logospng.org/download/visual-studio-code/visual-studio-code-256.png' text='VS Code' />
                        <Tech image='https://cdn-icons-png.flaticon.com/128/15713/15713436.png' text='Visual Studio' />
                        <Tech image='https://cdn-icons-png.flaticon.com/512/919/919836.png' text='MySQL' />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Technologies