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
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-600">Remove</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">Delete Animal</h2>
            <p className="mt-2 text-slate-500">Remove an animal profile that should no longer appear on the site.</p>
          </div>
          <div className="rounded-2xl bg-rose-50 px-4 py-3 text-3xl">×</div>
        </div>
        <button onClick={() => document.getElementById('delete_animal_modal').showModal()} className='btn w-full border-none bg-rose-600 text-white hover:bg-rose-700'>
          Open Delete List
        </button>
      </div>
      <dialog id="delete_animal_modal" className="modal">
        <div className="modal-box max-w-xl text-slate-800">
          <h3 className="text-3xl font-bold">Delete Animal</h3>
          <p className="mt-2 text-slate-500">Choose an animal to permanently remove from the database.</p>
          <ul className='mt-6 divide-y divide-slate-100 text-slate-800'>
            {data?.animals.map(animal => (
              <li key={animal.id} className="flex items-center justify-between gap-4 py-3">
                <span className="font-semibold">{animal.name}</span>
                <button className="btn btn-sm border-none bg-rose-600 text-white hover:bg-rose-700" onClick={() => handleDelete(animal.id)}>Delete</button>
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
