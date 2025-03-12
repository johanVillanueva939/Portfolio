const subTitles = {
    color: "var(--color-500)",
}
const contentSubTitles = {
    color: "var(--color-100)",
    fontWeight: "bold"
}

export const XP = ({ proffesion, about, time, contact }) => {
    return (
        <>
            <div id="XP" className="flex flex-col bg-custom-950 max-w-[600px] gap-3">
                <div>
                    <h3 className="text-[36px] text-custom-50 font-bold">{proffesion}</h3>
                    <h4 className="text-custom-200">{about}</h4>
                </div>
                <section className="flex flex-col">
                    <div className="flex gap-2">
                        <p style={subTitles}>Tiempo:</p>
                        <p style={contentSubTitles}>{time}</p>
                    </div>
                    <div className="flex gap-2">
                        <p style={subTitles}>Contacto:</p>
                        <p style={contentSubTitles}>{contact}</p>
                    </div>
                </section>
            </div>
        </>
    )
}
export default XP