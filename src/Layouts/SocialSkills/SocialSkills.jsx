import Skill from "../../UI/SocialSkill/Skill"
import Titles from "../../UI/Titles"

export const SocialSkills = () => {
    return (
        <section id="Skills" className="flex flex-col justify-center w-[820px] gap-4 justify-self-center">
            <Titles title='Habilidades Sociales' />
            <div className="flex flex-wrap gap-4 items-center justify-center">
                <Skill skill='Comunicación' />
                <Skill skill='Trabajo en equipo' />
                <Skill skill='Empatía' />
                <Skill skill='Adaptabilidad' />
                <Skill skill='Organización' />
                <Skill skill='Resolución de problemas' />
                <Skill skill='Paciencia' />
                <Skill skill='Toma de decisiones' />
                <Skill skill='Capacidad de aprendizaje' />
                <Skill skill='Capacidad de escucha' />
                <Skill skill='Capacidad de análisis' />
                <Skill skill='Capacidad de planificación' />
                <Skill skill='Capacidad de organización' />
            </div>
        </section>
    )
}
export default SocialSkills
