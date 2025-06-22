// import { useState } from "react";

// export function Carousel({src,maPhim, maBanner}) {
//   const [sttBanner, setmaBanner] = useState("1");
//   return (
//     <>
//     <div className="h-[800px] relative bg-[#272838] overflow-hidden">
//         <div className="h-full flex justify-center items-center">
//             <img
//             className="w-full h-auto max-h-none object-cover rounded-xl"
//             src={src.src}
//             alt=""
//             />

//         </div>
//         <div className="absolute bottom-3 right-10">
//             <div className="grid grid-cols-4 gap-2">
//                 {[...Array(3)].map((_, index) => (
//                 <div key={index} className="w-8 h-4 bg-gray-800 opacity-80 rounded-xl border-2 border-indigo-600 "></div>
//                 ))}
//             </div>
//         </div>
//     </div>
//     </>
//   );
// }

import { useState, useEffect } from "react";

export function Carousel({ src, maPhim, maBanner }) {
  const [sttBanner, setSttBanner] = useState(maBanner || 1);

  useEffect(() => {
    setSttBanner(maBanner || 1);
  }, [maBanner]);

  return (
    <div className="h-[800px] relative bg-[#272838] overflow-hidden">
      <div className="h-full flex justify-center items-center">
        {maBanner === sttBanner && (
          <img
            className="w-full h-auto max-h-none object-cover rounded-xl"
            src={src.src}
            alt=""
          />
        )}
      </div>
      <div className="absolute bottom-3 right-10">
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className={`w-8 h-4 rounded-xl cursor-pointer ${
                sttBanner === index ? "bg-indigo-600 border-indigo-600" : "bg-gray-800 border-gray-400"
              }`}
              onClick={() => setSttBanner(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
