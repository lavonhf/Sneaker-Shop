import { Link } from "react-router-dom"

export default function Index() {
    let font = " w-[17rem] h-[17rem] md:w-fit md:h-fit md:ml-20 flex justify-center items-center "
    return <div className="bg-gradient-to-r from-zinc-700 to-neutral-800 h-screen flex flex-col-reverse md:flex-row-reverse justify-between">
        <div  className="w-full md:w-1/2 h-1/2 md:h-screen object-cover flex md:items-center items-start">
            <img src="src/assets/[removal.ai]_688ca9e1-4bf1-44de-b2be-ced00bdb9b7c-domino-164_6wvehfi-unsplash_V68788.png"/>
        </div>
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-end md:items-center pt-10">
            <h1 className={" absolute font-extrabold text-neutral-600 text-[15rem] md:text-[20rem]" + font}>PS</h1>
            <div className={" z-10 flex flex-col text-white font-semibold" + font}>
                <h1 className=" text-6xl md:text-8xl">PRO SNEAKERS</h1>
                <p className="text-2xl w-full">Find your dream sneaker Be proud of your style with Pro Sneakers</p>
            <Link to="/shop"
            className="bg-neutral-800 w-28 h-11 rounded-full flex justify-center items-center hover:bg-neutral-900 transition-all">
                See More
            </Link>
            </div>
        </div>
    </div>
}
