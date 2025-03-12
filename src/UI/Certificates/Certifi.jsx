export const Certifi = ({ url, children, titleCert }) => {
    return (
        <>
                <a href={url} target="_blank" rel="noopener noreferrer" id="cert" className="bg-custom-950 max-w-[300px] h-[130px] flex flex-col text-center underline text-custom-300 items-center justify-center">
                    <h4>{titleCert}</h4>
                    <p>{children}</p>
                </a>
        </>
    )
}
export default Certifi