import Tech from "../UI/Tech/Tech";

// Importar imágenes
import html5 from 'https://cdn-icons-png.flaticon.com/512/732/732212.png';
import css3 from 'https://cdn-icons-png.flaticon.com/512/732/732190.png';
import js from 'https://cdn-icons-png.flaticon.com/512/919/919828.png';
import csharp from 'https://cdn-icons-png.flaticon.com/512/6132/6132221.png';
import react from '../assets/Images/react.svg';
import tailwind from 'https://www.svgrepo.com/show/374118/tailwind.svg';
import github from 'https://cdn-icons-png.flaticon.com/512/733/733553.png';
import vscode from 'https://logospng.org/download/visual-studio-code/visual-studio-code-256.png';
import visualStudio from 'https://cdn-icons-png.flaticon.com/128/15713/15713436.png';
import mysql from 'https://cdn-icons-png.flaticon.com/512/919/919836.png';

export const Technologies = () => {
    return (
        <>
            <div className='grid grid-cols-4 gap-4'>
                <Tech image={html5} text='HTML5' />
                <Tech image={css3} text='CSS3' />
                <Tech image={js} text='JavaScript' />
                <Tech image={csharp} text='C#' />
            </div>
            <div className='grid grid-cols-3 gap-4'>
                <Tech image={react} text='React' />
                <Tech image={tailwind} text='Tailwind' />
                <Tech image={github} text='GitHub' />
            </div>
            <div className='grid grid-cols-3 gap-4'>
                <Tech image={vscode} text='VS Code' />
                <Tech image={visualStudio} text='Visual Studio' />
                <Tech image={mysql} text='MySQL' />
            </div>
        </>
    )
}

export default Technologies