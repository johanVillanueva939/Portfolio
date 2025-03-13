export const Certifi = ({ route, children, titleCert }) => {
    return (
        <>
                <a href={route} target="_blank" rel="noopener noreferrer" id="cert" className="bg-custom-950 w-[300px] h-[130px] flex flex-col text-center text-custom-300 items-center justify-center">
                    <h4>{titleCert}</h4>
                    <p>{children}</p>
                </a>
        </>
    )
}
export default Certifi