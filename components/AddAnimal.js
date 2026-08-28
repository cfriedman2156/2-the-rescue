import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ANIMAL } from '../graphql/mutations';
import { GET_ANIMALS } from '@/graphql/queries';
import axios from 'axios';

export default function AddAnimal() {
    const [formState, setFormState] = useState({
        name: '',
        type: 'horse',
        age: '',
        description: '',
        adoption: 'false',
        profileImage: null,
        photos: []
    });
    const [addAnimal] = useMutation(ADD_ANIMAL, {
        refetchQueries: [{ query: GET_ANIMALS }],
    });

    const handleChange = (event) => {
        const { name, value, type, files } = event.target;
        if (type === 'file') {
            if (name === 'profileImage') {
                setFormState({
                    ...formState,
                    profileImage: files[0]
                });
            } else if (name === 'photos') {
                setFormState({
                    ...formState,
                    photos: [...formState.photos, ...Array.from(files)]
                });
            }
        } else {
            setFormState({
                ...formState,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        if (formState.profileImage) {
            formData.append('profileImage', formState.profileImage);
        }
        formState.photos.forEach(photo => {
            formData.append('photos', photo);
        });

        try {
            const uploadResponse = await axios.post('/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            const { profileImageUrl, photosUrls } = uploadResponse.data;

            console.log('Upload Response:', uploadResponse.data);

            await addAnimal({
                variables: {
                    name: formState.name,
                    type: formState.type,
                    age: formState.age,
                    description: formState.description,
                    adoption: formState.adoption === 'true',
                    profileImage: profileImageUrl,
                    photos: photosUrls,
                },
            });

            alert('Animal added successfully');
        } catch (error) {
            console.error('Error uploading files:', error);
            alert('Error adding animal');
        }
    };

    return (
        <>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
                <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-600">Create</p>
                        <h2 className="mt-2 text-3xl font-bold text-slate-900">Add Animal</h2>
                        <p className="mt-2 text-slate-500">Create a new animal profile with photos and adoption details.</p>
                    </div>
                    <div className="rounded-2xl bg-teal-50 px-4 py-3 text-3xl">+</div>
                </div>
                <button onClick={() => document.getElementById('add_animal_modal').showModal()} className='btn w-full border-none bg-teal-600 text-white hover:bg-teal-700'>
                    Add New Animal
                </button>
            </div>
            <dialog id="add_animal_modal" className="modal">
                <div className="modal-box max-w-2xl text-slate-800">
                    <h3 className='text-3xl font-bold'>Add New Animal</h3>
                    <p className="mb-6 mt-2 text-slate-500">Fill out the details below to publish a new animal profile.</p>
                    <form onSubmit={handleSubmit} encType="multipart/form-data" method='post' className="grid gap-4 md:grid-cols-2">
                        <label className="form-control mb-4 w-full">
                            <div className="label justify-center">
                                <span className="label-text text-lg">Name</span>
                            </div>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" value={formState.name} onChange={handleChange} />
                        </label>
                        <label className="form-control mb-4 w-full">
                            <div className="label justify-center">
                                <span className="label-text text-lg">Type</span>
                            </div>
                            <select name="type" className="select select-bordered w-full" value={formState.type} onChange={handleChange}>
                                <option value="horse">Horse</option>
                                <option value="donkey/mule">Donkey/Mule</option>
                                <option value="pig">Pig</option>
                                <option value="bird">Bird</option>
                                <option value="sheep/goat">Sheep/Goat</option>
                                <option value="other">Other</option>
                            </select>
                        </label>
                        <label className="form-control mb-4 w-full">
                            <div className="label justify-center">
                                <span className="label-text text-lg">Age</span>
                            </div>
                            <input type="text" name="age" placeholder="Age" className="input input-bordered w-full" value={formState.age} onChange={handleChange} />
                        </label>
                        <label className="form-control mb-4 w-full md:col-span-2">
                            <div className="label justify-center">
                                <span className="label-text text-lg">Description</span>
                            </div>
                            <textarea name="description" className="textarea textarea-bordered textarea-lg w-full" placeholder="Description" value={formState.description} onChange={handleChange}></textarea>
                        </label>
                        <label className="form-control mb-4 w-full">
                            <div className="label justify-center">
                                <span className="label-text text-lg">Available for Adoption?</span>
                            </div>
                            <select name="adoption" className="select select-bordered w-full" value={formState.adoption} onChange={handleChange}>
                                <option value="false">No</option>
                                <option value="true">Yes</option>
                            </select>
                        </label>
                        <label className="form-control mb-4 w-full">
                            <div className="label justify-center">
                                <span className="label-text text-lg">Add Profile Photo</span>
                            </div>
                            <input type="file" name="profileImage" className="file-input file-input-bordered file-input-md w-full" onChange={handleChange} />
                        </label>
                        <label className="form-control mb-4 w-full">
                            <div className="label justify-center">
                                <span className="label-text text-lg">Add Other Photos</span>
                            </div>
                            <input type="file" name="photos" className="file-input file-input-bordered file-input-md w-full" multiple onChange={handleChange} />
                        </label>
                        <div className="md:col-span-2 flex justify-end">
                            <button className="btn border-none bg-teal-600 text-white hover:bg-teal-700" type="submit">Save Animal</button>
                        </div>
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    )
}
