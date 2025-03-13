import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Nav from '../../Layouts/Nav/Nav';

export const Network = () => {
    return (
        <div className='fixed top-[4px] flex flex-row items-center text-custom-950'>
            <Nav enlaces='https://github.com/johanVillanueva939'>
                <GitHubIcon id='gitHub_icon' />
            </Nav>
            <Nav enlaces='https://www.linkedin.com/in/johan-david-villanueva-gallego-565ba9354/'>
                <LinkedInIcon id='linkEdin_icon' />
            </Nav>
            <Nav enlaces='https://api.whatsapp.com/send?phone=573103872727&text=Hola,%20Johan%20David%20Villanueva%20Gallego'>
                <WhatsAppIcon id='WhatsApp_icon' />
            </Nav>
        </div>
    )
}

export default Network