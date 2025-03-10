import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Nav from '../../Layouts/Nav/Nav';

export const Network = () => {
    return (
        <div className='fixed right-[0px] flex flex-row text-custom-50 rotate-[-90deg]'>
            <Nav links='https://github.com/johanVillanueva939'>
                <GitHubIcon id='gitHub_icon' className='text-[24px]' />
            </Nav>
            <Nav links=''>
                <LinkedInIcon id='linkEdin_icon' className='text-[24px]' />
            </Nav>
        </div>
    )
}

export default Network