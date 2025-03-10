import Skill from "../../UI/SocialSkill/Skill"
import Titles from "../../UI/Titles"

export const SocialSkills = () => {
    return (
        <section id="Skills" className="flex flex-col justify-center w-[600px] md:w-[820px] gap-4 justify-self-center">
            <Titles title='Social Skills' />
            <div className="flex flex-wrap gap-2 md:gap-4 items-center justify-center">
                <Skill skill='Communication' />
                <Skill skill='Teamwork' />
                <Skill skill='Empathy' />
                <Skill skill='Adaptability' />
                <Skill skill='Organization' />
                <Skill skill='Problem Solving' />
                <Skill skill='Patience' />
                <Skill skill='Decision Making' />
                <Skill skill='Learning Ability' />
                <Skill skill='Listening Skills' />
                <Skill skill='Analytical Skills' />
                <Skill skill='Planning Skills' />
                <Skill skill='Organizational Skills' />
            </div>
        </section>
    )
}
export default SocialSkills
