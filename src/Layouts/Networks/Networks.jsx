import { Network } from "../../UI/Network/Network"

export const Networks = () => {
    return (
        <>
            <div id="net" className="fixed bottom-[0] left-[50%] h-1 w-[160px] clip-path-custom bg-transparent flex items-center justify-center">
                <Network />
            </div>
            <div className="fixed bottom-[110px] right-[-100px] text-custom-600 flex flex-col items-center justify-center gap-4 rotate-90">
                <p>jvillanuevagallego@gmail.com</p>
            </div>
        </>
    )
}

export default Networks