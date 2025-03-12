import { Paragraph } from '../../UI/About__me/Paragraph'
import MyName from '../../UI/About__me/MyName'
import Role from '../../UI/About__me/Role'
import EnglishLevel from '../../UI/About__me/EnglishLevel'
import Titles from '../../UI/Titles'
import imga from '../../assets/Images/Johan David Villanueva.jpg'

export const AboutMe = () => {
    return (
        <section id='AboutMe' className='flex items-start text-center justify-center w-fit justify-self-center'>
            <div className='flex flex-col-reverse items-center justify-center md:flex-row gap-[50px]'>
                <section className='flex gap-4 flex-col'>
                    <Titles titulo='Sobre mí' />
                    <div id='Part1AboutMe' className='flex flex-col gap-4 bg-custom-950'>
                        <Paragraph />
                        <EnglishLevel />
                    </div>
                </section>
                <section className='flex flex-col gap-4 justify-center items-center text-center'>
                    <div>
                        <MyName />
                    </div>
                    <div>
                        <img src={imga} className='w-[150px] rounded-b-3xl' />
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