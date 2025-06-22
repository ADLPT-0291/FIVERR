/**
 * 
 *  Props
 * - img (alt, src)
 * - button (buy tickets, trailer)
 * 
 * 
 */
import { useState } from "react";

export function ProductCard({ img, button }) {
    const [videoUrl, setVideoUrl] = useState("");

    const handleTrailerClick = () => {
        const url = button.trailer.replace("watch?v=", "embed/");
        setVideoUrl(url);
    };
    return (
            <div className="flex flex-col justify-center items-center">
            <div className="card-head group relative w-[350px] h-[480px]">
                <img className="rounded-xl w-full h-full" src={img.src} alt={img.alt} />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="card-footer grid grid-cols-2 gap-4">
                    {["buyTickets", "trailer"].map((type, index) => (
                    <button
                        key={index}
                        onClick={type === "trailer" ? handleTrailerClick : undefined}
                        className="p-4 font-medium rounded-md border border-[#ece6f2] bg-gradient-to-r hover:from-[#6a298f] hover:to-[#aa52dd] text-white"
                    >
                        {type === "trailer" ? (
                        <>
                            <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="circle-play"
                            className="svg-inline--fa fa-circle-play mr-2"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            >
                            <path
                                fill="currentColor"
                                d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"
                            ></path>
                            </svg>
                            Trailer
                        </>
                        ) : (
                        button.buyTickets
                        )}
                    </button>
                    ))}
                </div>
                </div>
            </div>
            {videoUrl && (
                <iframe
                id="videoId"
                allow="autoplay;"
                className="w-full h-full rounded-xl mt-4"
                src={videoUrl}
                allowFullScreen
                ></iframe>
            )}
            </div>
        );
    };

export default ProductCard;
//     return (
//         <div className="flex flex-col justify-center items-center ">
//             <div className="card-head group relative w-[350px] h-[480px]">
//                 <img className="rounded-xl w-full h-full" src={img.src} alt={img.alt} />
//                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 
//                 transition-opacity duration-300">
//                     <div className="card-footer grid grid-cols-2 gap-4 ">
//                         <button className="p-4 font-medium rounded-md border border-[#ece6f2] 
//                             bg-gradient-to-r hover:from-[#6a298f] hover:to-[#aa52dd] text-white">
//                             {button.buyTickets}
//                         </button>
//                         <button onClick={()=>{
//                             const videoUrl = button.trailer.replace("watch?v=", "embed/");
//                             console.log(videoUrl);
//                             <iframe id='videoId' allow="autoplay;" className="w-full h-full rounded-xl" src={`${videoUrl}`} allowFullScreen></iframe>
//                         }} className="p-4 font-medium rounded-md border border-[#ece6f2] 
//                             bg-gradient-to-r hover:from-[#6a298f] hover:to-[#aa52dd] text-white">
//                             <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-play" class="svg-inline--fa fa-circle-play mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" 
//                             d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"></path></svg>
//                             Trailer
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
