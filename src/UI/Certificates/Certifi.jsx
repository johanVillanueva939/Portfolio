import { Link } from 'react-router-dom';

export const Certifi = ({ route, children, titleCert }) => {
    return (
        <>
                <Link to={route} id="cert" className="bg-custom-950 w-[300px] h-[130px] flex flex-col text-center text-custom-300 items-center justify-center">
                    <h4>{titleCert}</h4>
                    <p>{children}</p>
                </Link>
        </>
    )
}
export default Certifi