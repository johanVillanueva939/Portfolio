import { Paragraph } from '../../UI/About__me/Paragraph'
import MyName from '../../UI/About__me/MyName'
import Role from '../../UI/About__me/Role'
import EnglishLevel from '../../UI/About__me/EnglishLevel'
import imga from '../../assets/Images/react.svg'

export const AboutMe = () => {
    return (
        <div id='AboutMe' className='flex flex-row gap-4 items-center justify-center mt-[100px]'>
            <div id='Part1AboutMe' className='flex flex-col gap-4 bg-custom-950'>
                <Paragraph />
                <EnglishLevel />
            </div>
            <section>
                <div>
                    <MyName />
                </div>
                <div>
                    <img src={imga} />
                </div>
                <div>
                    <Role />
                </div>

            </section>
        </div>
    )
}

export default AboutMe