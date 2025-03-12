import XP from "../../UI/Experience/XP"
import Titles from "../../UI/Titles"

export const Experience = () => {
    return (
        <>
            <div id="Experience" className="flex flex-col items-center justify-center gap-4">
                <Titles titulo='Experiencia' />
                <XP proffesion={'Ayudante instalaciones de gas'} about={'Oficios varios'} time={'1 año'} contact={'+57 3127591150'}/>
            </div>
        </>
    )
}
export default Experience