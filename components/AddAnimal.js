import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ANIMAL } from '../graphql/mutations';

export default function AddAnimal() {

    

    return (
        <>
            <button onClick={() => document.getElementById('add_animal_modal').showModal()} className='btn w-80 text-2xl h-40 focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'>
                Add Animal
            </button>
            <dialog id="add_animal_modal" className="modal">
                <div className="modal-box text-black flex flex-col items-center">
                    <h3 className='text-2xl font-bold mb-2'>Add New Animal</h3>
                    <form onSubmit={handleSubmit} encType="multipart/form-data" method='post'>
                        <label className="form-control w-full max-w-xs mb-4">
                            <div className="label justify-center">
                                <span className="label-text text-lg">Name</span>
                            </div>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered w-full max-w-xs" value={formData.name} onChange={handleChange} />
                        </label>
                        <label className="form-control w-full max-w-xs mb-4">
                            <div className="label justify-center">
                                <span className="label-text text-lg">Type</span>
                            </div>
                            <select name="type" className="select select-bordered w-full max-w-xs" value={formData.type} onChange={handleChange}>
                                <option value="horse">Horse</option>
                                <option value="donkey/mule">Donkey/Mule</option>
                                <option value="pig">Pig</option>
                                <option value="bird">Bird</option>
                                <option value="sheep/goat">Sheep/Goat</option>
                                <option value="other">Other</option>
                            </select>
                        </label>
                        <label className="form-control w-full max-w-xs mb-4">
                            <div className="label justify-center">
                                <span className="label-text text-lg">Age</span>
                            </div>
                            <input type="text" name="age" placeholder="Age" className="input input-bordered w-full max-w-xs" value={formData.age} onChange={handleChange} />
                        </label>
                        <label className="form-control w-full max-w-xs mb-4">
                            <div className="label justify-center">
                                <span className="label-text text-lg">Description</span>
                            </div>
                            <textarea name="description" className="textarea textarea-bordered textarea-lg" placeholder="Description" value={formData.description} onChange={handleChange}></textarea>
                        </label>
                        <label className="form-control w-full max-w-xs mb-4">
                            <div className="label justify-center">
                                <span className="label-text text-lg">Available for Adoption?</span>
                            </div>
                            <select name="adoption" className="select select-bordered w-full max-w-xs" value={formData.adoption} onChange={handleChange}>
                                <option value="false">No</option>
                                <option value="true">Yes</option>
                            </select>
                        </label>
                        <label className="form-control w-full max-w-xs mb-4">
                            <div className="label justify-center">
                                <span className="label-text text-lg">Add Profile Photo</span>
                            </div>
                            <input type="file" name="profileImage" className="file-input file-input-bordered file-input-md w-full max-w-xs" onChange={handleChange} />
                        </label>
                        <label className="form-control w-full max-w-xs mb-4">
                            <div className="label justify-center">
                                <span className="label-text text-lg">Add Other Photos</span>
                            </div>
                            <input type="file" name="photos" className="file-input file-input-bordered file-input-md w-full max-w-xs" multiple onChange={handleChange} />
                        </label>
                        <button className="btn btn-primary mt-6" type="submit">Submit</button>
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    )
}


// const [formData, setFormData] = useState({
//     name: '',
//     type: 'horse',
//     age: '',
//     description: '',
//     adoption: 'false',
//     profileImage: null,
//     photos: [],
// });

// const [addAnimal] = useMutation(ADD_ANIMAL);

// const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (files) {
//         setFormData({
//             ...formData,
//             [name]: files.length > 1 ? Array.from(files) : files[0],
//         });
//     } else {
//         setFormData({ ...formData, [name]: value });
//     }
// };

// const uploadFiles = async () => {
//     const formDataToUpload = new FormData();
//     if (formData.profileImage) {
//         formDataToUpload.append('profileImage', formData.profileImage);
//     }
//     if (formData.photos.length > 0) {
//         formData.photos.forEach(photo => {
//             formDataToUpload.append('photos', photo);
//         });
//     }

//     const response = await fetch('/api/upload', {
//         method: 'POST',
//         body: formDataToUpload,
//     });

//     return response.json();
// };

// const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//         const uploadResponse = await uploadFiles();

//         const variables = {
//             name: formData.name,
//             description: formData.description,
//             age: formData.age,
//             adoption: formData.adoption === 'true',
//             profileImage,
//             photos,
//             type: formData.type,
//         };

//         const res = await addAnimal({ variables });
//         if (res.data) {
//             alert('Animal added successfully');
//             setFormData({
//                 name: '',
//                 type: 'horse',
//                 age: '',
//                 description: '',
//                 adoption: 'false',
//                 profileImage: null,
//                 photos: [],
//             });
//         } else {
//             throw new Error('Failed to add animal');
//         }
//     } catch (error) {
//         console.error('Error in handleSubmit:', error);
//         alert(error.message);
//     }
// };