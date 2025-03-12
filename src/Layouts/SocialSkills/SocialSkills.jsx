import Skill from "../../UI/SocialSkill/Skill"
import Titles from "../../UI/Titles"

export const SocialSkills = () => {
    return (
        <section id="Skills" className="flex flex-col justify-center items-center w-fit gap-4 justify-self-center">
            <Titles titulo='Habilidades Sociales' />
            <div className="flex flex-wrap gap-2 md:gap-4 items-center justify-center">
                <Skill habilidad='Comunicación' />
                <Skill habilidad='Trabajo en equipo' />
                <Skill habilidad='Empatía' />
                <Skill habilidad='Adaptabilidad' />
                <Skill habilidad='Organización' />
                <Skill habilidad='Resolución de problemas' />
                <Skill habilidad='Paciencia' />
                <Skill habilidad='Toma de decisiones' />
                <Skill habilidad='Capacidad de aprendizaje' />
                <Skill habilidad='Habilidades de escucha' />
                <Skill habilidad='Habilidades analíticas' />
                <Skill habilidad='Habilidades de planificación' />
                <Skill habilidad='Habilidades organizativas' />
            </div>
        </section>
    )
}
export default SocialSkills
