export const Tech = ({image,text}) => {
    return (
        <>
            <div className='flex flex-col items-center justify-start text-center'>
                <img src={image} alt={text} className='w-[40px] md:w-[50px] h-[40px] md:h-[50px] object-contain' />
                <p className='text-[13px] md:text-[15px] text-custom-500'>{text}</p>
            </div>
            
        </>
    )
}
export default Tech