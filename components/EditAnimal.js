import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ANIMALS } from '@/graphql/queries';
import { EDIT_ANIMAL } from '../graphql/mutations';
import axios from 'axios';

export default function EditAnimalModal() {
    const { data, refetch } = useQuery(GET_ANIMALS);
    const [formState, setFormState] = useState({
        id: '',
        name: '',
        type: 'horse',
        age: '',
        description: '',
        adoption: 'false',
        existingProfileImage: '',
        existingPhotos: [],
        newProfileImage: null,
        newPhotos: []
    });
    const [editAnimal] = useMutation(EDIT_ANIMAL);

    const handleChange = (event) => {
        const { name, value, type, files } = event.target;
        if (type === 'file') {
            if (name === 'profileImage') {
                setFormState({
                    ...formState,
                    newProfileImage: files[0] || null
                });
            } else if (name === 'photos') {
                setFormState({
                    ...formState,
                    newPhotos: Array.from(files)
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
        if (formState.newProfileImage) {
            formData.append('profileImage', formState.newProfileImage);
        }
        formState.newPhotos.forEach((photo) => {
            formData.append('photos', photo);
        });

        try {
            let profileImage = formState.existingProfileImage;
            let photos = formState.existingPhotos;

            if (formState.newProfileImage || formState.newPhotos.length > 0) {
                const uploadResponse = await axios.post('/api/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                const { profileImageUrl, photosUrls } = uploadResponse.data;

                if (profileImageUrl) {
                    profileImage = profileImageUrl;
                }

                if (photosUrls?.length) {
                    photos = [...photos, ...photosUrls];
                }
            }

            await editAnimal({
                variables: {
                    id: formState.id,
                    name: formState.name,
                    type: formState.type,
                    age: formState.age,
                    description: formState.description,
                    adoption: formState.adoption === 'true',
                    profileImage,
                    photos,
                },
            });

            alert('Animal edited successfully');
            refetch();
            document.getElementById('edit_animal_modal').close();
        } catch (error) {
            console.error('Error uploading files:', error);
            alert('Error editing animal');
        }
    };

    const handleEditClick = (animal) => {
        setFormState({
            id: animal.id,
            name: animal.name,
            type: animal.type,
            age: animal.age,
            description: animal.description,
            adoption: animal.adoption ? 'true' : 'false',
            existingProfileImage: animal.profileImage || '',
            existingPhotos: animal.photos || [],
            newProfileImage: null,
            newPhotos: []
        });
        document.getElementById('edit_animal_modal').showModal();
    };

    return (
        <>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
                <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">Manage</p>
                        <h2 className='mt-2 text-3xl font-bold text-slate-900'>Edit Animals</h2>
                        <p className="mt-2 text-slate-500">Update profile details, adoption status, and photos.</p>
                    </div>
                    <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">{data?.animals?.length || 0} animals</span>
                </div>
                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                    {data?.animals.map(animal => (
                        <div key={animal.id} className="flex items-center justify-between gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                            <div>
                                <p className="font-bold text-slate-900">{animal.name}</p>
                                <p className="text-sm capitalize text-slate-500">{animal.type}</p>
                            </div>
                            <button className="btn btn-sm border-none bg-indigo-600 text-white hover:bg-indigo-700" onClick={() => handleEditClick(animal)}>Edit</button>
                        </div>
                    ))}
                </div>
            </div>
            <dialog id="edit_animal_modal" className="modal">
                <div className="modal-box max-w-2xl text-slate-800">
                    <h3 className='text-3xl font-bold'>Edit Animal</h3>
                    <p className="mb-6 mt-2 text-slate-500">Make changes to the selected animal profile.</p>
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
                                <span className="label-text text-lg">Replace Profile Photo</span>
                            </div>
                            <input type="file" name="profileImage" className="file-input file-input-bordered file-input-md w-full" onChange={handleChange} />
                        </label>
                        <label className="form-control mb-4 w-full">
                            <div className="label justify-center">
                                <span className="label-text text-lg">Add New Photos</span>
                            </div>
                            <input type="file" name="photos" className="file-input file-input-bordered file-input-md w-full" multiple onChange={handleChange} />
                        </label>
                        <div className="flex justify-end md:col-span-2">
                            <button className="btn border-none bg-indigo-600 text-white hover:bg-indigo-700" type="submit">Save Changes</button>
                        </div>
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    );
}
