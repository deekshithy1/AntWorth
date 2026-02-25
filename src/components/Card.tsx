// // // import React from 'react'



// // // interface props{
// // //   title:string,
// // //   description:string,
// // //   image:React.ReactNode,
// // //   backImg:string
// // // }
// // // const Card = ({title,description,image,backImg}:props) => {
// // //   return (
// // //     <div className='w-full rounded-2xl flex  flex-row justify-center relative bg-gray-50'>
// // //       <div>
// // //       <div className='absolute top-3 '>
// // //        {image}
// // //        </div>

// // //        <h3>{title}</h3>
// // //        <p>{description}</p>
// // //        </div>
// // //        <img src={backImg} alt="" className='rounded-xl w-lg'/>
// // //     </div>
// // //   )
// // // }

// // // export default Card
// // import React from "react";

// // interface Props {
// //   title: string;
// //   description: string;
// //   image: React.ReactNode;
// //   backImg: string;
// // }

// // const Card = ({ title, description, image, backImg }: Props) => {
// //   return (
// //     <div  className="cards  w-2/4  h-screen rounded-2xl bg-gray-50 shadow-md overflow-hidden flex flex-col md:flex-row items-center mt-2">
      
// //       <div className="w-1/2 relative">
// //       <div className="absolute top-1">
// //       {image}
// //       </div>
      
// //       <h3>    {title}</h3>
    
// //       <p>{description}</p>  
// //       </div>
   
// //       <div className="relative w-1/2">
// //         <img src={backImg} alt="" className=""  />
// //         <div className=" absolute inset-0  bg-gradient-to-t from-black/100 to-black/0"></div>
// //       </div>

// //     </div>
// //   );
// // };

// // export default Card;
// import React from "react";

// interface Props {
//   title: string;
//   description: string;
//   image: React.ReactNode;
//   backImg: string;
// }

// const Card = ({ title, description, image, backImg }: Props) => {
//   return (
//     <div className="cards w-full h-screen relative rounded-3xl overflow-hidden flex flex-col md:flex-row items-center p-12">
  
//   {/* Background Layer */}
//   <div className="absolute inset-0 "></div>
//   <div className="absolute inset-0 backdrop-blur-3xl bg-white/30"></div>

//   {/* Content */}
//   <div className="relative z-10 w-full md:w-1/2 space-y-6">
//     <div className="text-orange-500">{image}</div>
//     <h3 className="text-4xl font-bold">{title}</h3>
//     <p className="text-gray-700 text-lg">{description}</p>
//   </div>

//   <div className="relative z-10 w-full md:w-1/2 mt-8 md:mt-0">
//   <div className= " absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent"></div>
//     <img
//       src={backImg}
//       alt=""
//       className="rounded-2xl w-full object-cover shadow-2xl"
//     />
//   </div>
// </div>
//   );
// };

// export default Card;
// import React from "react";

// interface Props {
//   title: string;
//   description: string;
//   image: React.ReactNode;
//   backImg: string;
// }

// const Card = ({ title, description, image, backImg }: Props) => {
//   return (
//     <div className="cards absolute inset-0 flex items-center justify-center px-6 md:px-12">
      
//       <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-12">
        
//         {/* Left Content */}
//         <div className="flex-1 space-y-6 text-center lg:text-left">
//           <div className="inline-block">{image}</div>
//           <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
//             {title}
//           </h3>
//           <p className="text-gray-700 text-base md:text-lg">
//             {description}
//           </p>
//         </div>

//         {/* Right Image */}
//         <div className="flex-1">
//           <img
//             src={backImg}
//             alt=""
//             className="rounded-2xl shadow-2xl w-full object-cover"
//           />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Card;
import React from "react";

interface Props {
  title: string;
  description: string;
  image: React.ReactNode;
  backImg: string;
}

const Card = ({ title, description, image, backImg }: Props) => {
  return (
<div className="cards absolute inset-0 flex items-center justify-center px-6 md:px-12 bg-transparent">
      
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <div className="inline-block">{image}</div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-400">
            {title}
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            {description}
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative  rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/40 to-transparent  rounded-2xl"></div>
          <img
            src={backImg}
            alt=""
            className=" border-0 rounded-2xl shadow-2xl w-full object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default Card;