import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Nav from '../../Layouts/Nav/Nav';


export const Network = () => {
    return (
        <div className='fixed left-[5px] flex flex-col text-custom-50 '>
            <Nav links='https://github.com/johanVillanueva939'>
                <GitHubIcon id='gitHub_icon' />
            </Nav>
            <Nav links=''>
                <LinkedInIcon id='linkEdin_icon' />
            </Nav>
        </div>
    )
}

export default Network