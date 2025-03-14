import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Nav from '../../Layouts/Nav/Nav';

export const Network = () => {
    return (
        <div className='fixed top-[4px] flex flex-row items-center text-custom-950'>
            <a href='https://github.com/johanVillanueva939' target='_blank' rel='noopener noreferrer'>
                <GitHubIcon id='gitHub_icon' />
            </a>
            <a href='https://www.linkedin.com/in/johan-david-villanueva-gallego-565ba9354/' target='_blank' rel='noopener noreferrer'>
                <LinkedInIcon id='linkEdin_icon' />
            </a>
            <a href='https://api.whatsapp.com/send?phone=573103872727&text=Hola,%20Johan%20David%20Villanueva%20Gallego.%20FrontEnd%20Developer' target='_blank' rel='noopener noreferrer'>
                <WhatsAppIcon id='WhatsApp_icon' />
            </a>
        </div>
    )
}

export default Network