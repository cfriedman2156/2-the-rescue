// import { useState } from 'react';


// export default function AddPhotos() {

//     const convertToBase64 = (e) => {
//         console.log(e);
//         const reader = 
//     }



//     return (
//         <>
//             <button onClick={() => document.getElementById('add_photo_modal').showModal()} className='btn w-80 text-2xl h-40 focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'>
//                 Add Photos
//             </button>
//             <dialog id="add_photo_modal" className="modal">
//                 <div className="modal-box text-black flex flex-col items-center">
//                     <h3 className='text-2xl font-bold mb-2'>Add New Photos</h3>
//                     <form  encType="multipart/form-data" method='post'>  
//                         <label className="form-control w-full max-w-xs mb-4">
//                             <div className="label justify-center">
//                                 <span className="label-text text-lg">Add Profile Photo</span>
//                             </div>
//                             <input 
//                             type="file" 
//                             accept="image/*"
//                             name="profileImage" 
//                             className="file-input file-input-bordered file-input-md w-full max-w-xs" 
//                             onChange={convertToBase64} />
//                         </label>
//                         <button className="btn btn-primary mt-6" type="submit">Submit</button>
//                     </form>
//                 </div>
//                 <form method="dialog" className="modal-backdrop">
//                     <button>close</button>
//                 </form>
//             </dialog>
//         </>
//     )
// }
