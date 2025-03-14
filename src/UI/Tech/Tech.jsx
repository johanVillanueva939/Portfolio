export const Tech = ({imagen, texto}) => {
    return (
        <>
            <div className='flex flex-col items-center justify-start text-center'>
                <img id="imgTech" src={imagen} alt={texto} className='w-[40px] md:w-[50px] h-[40px] md:h-[50px] object-contain' />
                <p className='text-[13px] md:text-[15px] text-custom-500'>{texto}</p>
            </div>
            
        </>
    )
}
export default Tech