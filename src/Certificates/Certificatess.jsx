import { Children } from "react";
import Certifi from "../UI/Certificates/Certifi";
import Titles from "../UI/Titles";

export const Certificatess = () => {
    return (
        <>
        <section id="certi" className="flex flex-col items-center justify-center gap-4">
            <Titles titulo="Certificados" />
            <div className="flex items-center max-w-[820px] justify-self-center justify-center gap-4 flex-wrap">
                <Certifi url={'https://drive.google.com/file/d/1bj9KDtc8YABS_Z7ptP6XfbGRLxFXy9RM/view?usp=sharing'} titleCert={'CONSTANCIA PARTICIPACION'} children={'I ENCUENTRO INTERNACIONAL DE CTEI APLICADO AL SECTOR PRODUCTIVO'} />
                <Certifi url={'https://drive.google.com/file/d/11OQSkNjkNhLsi1WZUZNZcxRqPjfldd_7/view?usp=sharing'} titleCert={'CONSTANCIA PARTICIPACION'} children={'I ENCUENTRO SEMILLEROS ZONALES, SENNOVA 2024'} />
                <Certifi url={'https://drive.google.com/file/d/1r5RhpruEiC6YAT_GcDzdCm3cAm6Wpeqg/view?usp=sharing'} titleCert={'CONSTANCIA PARTICIPACION'} children={'EL BUEN TRATO: UN COMPROMISO POR CUMPLIR DESDE MI ROL EN EL SENA'} />
                <Certifi url={'https://drive.google.com/file/d/1tC7a4L--DGIKnCVwBi_xE1O6IhNF-Gfl/view?usp=sharing'} titleCert={'TÉCNICO EN'} children={'PROGRAMACION DE SOFTWARE'} />
                <Certifi url={'https://drive.google.com/file/d/1ENZ47UQQK76YFyEcnZK7RdCLByvy8KBw/view?usp=sharing'} titleCert={'TÉCNICO EN'} children={'PROGRAMACION DE SOFTWARE'} />
                <Certifi url={'https://drive.google.com/file/d/1w0xLjabxduz9zBdTPRdxH2vS04iBc031/view?usp=sharing'} titleCert={'TÉCNICO EN'} children={'PROGRAMACION DE SOFTWARE'} />
            </div>
        </section>
        </>
    );
}
export default Certificatess