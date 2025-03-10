import { Paragraph } from '../../UI/About__me/Paragraph'
import MyName from '../../UI/About__me/MyName'
import Role from '../../UI/About__me/Role'
import EnglishLevel from '../../UI/About__me/EnglishLevel'
import Titles from '../../UI/Titles'
import imga from '../../assets/Images/react.svg'

export const AboutMe = () => {
    return (
        <section id='AboutMe' className='flex flex-col items-start justify-center w-fit justify-self-center gap-4'>
            <Titles title='Sobre mí' />
        <div className='flex flex-col md:flex-row gap-4 items-center justify-center md:mt-[100px]'>
            <div id='Part1AboutMe' className='flex flex-col gap-4 bg-custom-950'>
                <Paragraph />
                <EnglishLevel />
            </div>
            <section>
                <div>
                    <MyName />
                </div>
                <div>
                    <img src={imga} className='w-[100px] md:w-[150px]' />
                </div>
                <div>
                    <Role />
                </div>

            </section>
        </div>

        </section>
    )
}

export default AboutMe