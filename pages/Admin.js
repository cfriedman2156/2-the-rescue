import { useState } from 'react';
import Head from 'next/head';
import { useMutation } from '@apollo/client';
import Nav from '../components/Nav';
import Footer from '@/components/Footer';
import { ADD_ANIMAL } from '../graphql/mutations';

export default function Admin() {
  const [formData, setFormData] = useState({
    name: '',
    type: 'horse',
    age: '',
    description: '',
    adoption: 'false',
    profileImage: null,
    photos: [],
  });

  const [addAnimal] = useMutation(ADD_ANIMAL);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({
        ...formData,
        [name]: files.length > 1 ? Array.from(files) : files[0],
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const uploadData = new FormData();
    if (formData.profileImage) {
      uploadData.append('profileImage', formData.profileImage);
    }
    if (formData.photos.length > 0) {
      formData.photos.forEach((file) => uploadData.append('photos', file));
    }

    try {
      const uploadRes = await fetch('/api/upload', {
        method: 'POST',
        body: uploadData,
      });

      if (!uploadRes.ok) {
        throw new Error('Failed to upload images');
      }

      const { profileImage, photos } = await uploadRes.json();

      const variables = {
        name: formData.name,
        description: formData.description,
        age: formData.age,
        adoption: formData.adoption === 'true',
        profileImage,
        photos,
        type: formData.type,
      };

      const res = await addAnimal({ variables });
      if (res.data) {
        alert('Animal added successfully');
        setFormData({
          name: '',
          type: 'horse',
          age: '',
          description: '',
          adoption: 'false',
          profileImage: null,
          photos: [],
        });
      } else {
        throw new Error('Failed to add animal');
      }
    } catch (error) {
      console.error('Error in handleSubmit:', error);
      alert(error.message);
    }
  };

  return (
    <>
      <Head>
        <title>2 The Rescue</title>
        <meta name="description" content="Simple landing page" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css" />
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet" />
        <style>{`
          .gradient {
            background: linear-gradient(90deg, #E88562 0%, #f5c6b6 100%);
          }
          .gradient1 {
            background: linear-gradient(90deg, #f5c6b6 0%, #FFFFFF 100%);
          }
        `}</style>
      </Head>
      <main className="leading-normal tracking-normal text-white gradient" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
        <Nav />
        <section className="hero h-64 flex flex-col justify-end">
          <div className="text-center">
            <div className="max-w-md">
              <h1 className="text-5xl mt-10 font-bold">Admin Page</h1>
              <p className="text-lg py-6">Make changes to the site</p>
            </div>
          </div>
        </section>
        <div className="flex flex-wrap justify-evenly h-96 pt-10">
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
          <button className='btn w-80 text-2xl h-40 focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'>
            Edit Animal
          </button>
          <button className='btn w-80 text-2xl h-40 focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'>
            Delete Animal
          </button>
        </div>
        <Footer />
      </main>
    </>
  );
}
