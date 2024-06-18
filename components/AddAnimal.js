import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ANIMAL } from '../graphql/mutations';

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
    const [addAnimal] = useMutation(ADD_ANIMAL);

    const handleChange = (event) => {
        const { name, value, type, files } = event.target;
        if (type === 'file') {
            if (name === 'profileImage') {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setFormState({
                        ...formState,
                        profileImage: reader.result
                    });
                };
                reader.readAsDataURL(files[0]);
            } else if (name === 'photos') {
                const readers = [];
                for (let i = 0; i < files.length; i++) {
                    readers.push(new Promise((resolve, reject) => {
                        const reader = new FileReader();
                        reader.onloadend = () => resolve(reader.result);
                        reader.onerror = reject;
                        reader.readAsDataURL(files[i]);
                    }));
                }
                Promise.all(readers).then((results) => {
                    setFormState({
                        ...formState,
                        photos: results
                    });
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
        const { adoption, ...rest } = formState;
        await addAnimal({ variables: { ...rest, adoption: adoption === 'true' } });
        alert('animal added successfully')
    };

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
                            <input type="text" name="name" placeholder="Name" className="input input-bordered w-full max-w-xs" value={formState.name} onChange={handleChange} />
                        </label>
                        <label className="form-control w-full max-w-xs mb-4">
                            <div className="label justify-center">
                                <span className="label-text text-lg">Type</span>
                            </div>
                            <select name="type" className="select select-bordered w-full max-w-xs" value={formState.type} onChange={handleChange}>
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
                            <input type="text" name="age" placeholder="Age" className="input input-bordered w-full max-w-xs" value={formState.age} onChange={handleChange} />
                        </label>
                        <label className="form-control w-full max-w-xs mb-4">
                            <div className="label justify-center">
                                <span className="label-text text-lg">Description</span>
                            </div>
                            <textarea name="description" className="textarea textarea-bordered textarea-lg" placeholder="Description" value={formState.description} onChange={handleChange}></textarea>
                        </label>
                        <label className="form-control w-full max-w-xs mb-4">
                            <div className="label justify-center">
                                <span className="label-text text-lg">Available for Adoption?</span>
                            </div>
                            <select name="adoption" className="select select-bordered w-full max-w-xs" value={formState.adoption} onChange={handleChange}>
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
