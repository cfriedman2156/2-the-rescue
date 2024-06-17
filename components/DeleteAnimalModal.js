import { useMutation, useQuery } from '@apollo/client';
import { DELETE_ANIMAL } from '../graphql/mutations';
import { GET_ANIMALS } from '@/graphql/queries';

export default function DeleteAnimalModal() {
  const { data, refetch } = useQuery(GET_ANIMALS);
  const [deleteAnimal] = useMutation(DELETE_ANIMAL);

  const handleDelete = async (id) => {
    try {
      const res = await deleteAnimal({ variables: { id } });
      if (res.data) {
        alert('Animal deleted successfully');
        refetch();
      } else {
        throw new Error('Failed to delete animal');
      }
    } catch (error) {
      console.error('Error in handleDelete:', error);
      alert(error.message);
    }
  };

  return (
    <>
      <button onClick={() => document.getElementById('delete_animal_modal').showModal()} className='btn w-80 text-2xl h-40 focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'>
        Delete Animal
      </button>
      <dialog id="delete_animal_modal" className="modal">
        <div className="modal-box max-w-sm">
          <h3 className="font-bold text-lg">Delete Animal</h3>
          <ul className='text-black text-xl'>
            {data?.animals.map(animal => (
              <li key={animal.id} className="flex justify-between">
                <span>{animal.name}</span>
                <button className="btn btn-error m-2" onClick={() => handleDelete(animal.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
