import Animal from './models/Animal';
import { uploadFile } from '../lib/aws';

const resolvers = {
  Query: {
    animalsType: async (_, { type }) => await Animal.find({ type }),
    animals: async () => await Animal.find(),
    animal: async (_, { id }) => await Animal.findById(id),
    animalByName: async (_, { name }) => await Animal.findOne({ name }),
    animalByAdoption: async (_, { adoption }) => await Animal.find({ adoption })
  },
  Mutation: {
    addAnimal: async (_, { name, description, age, adoption, profileImage, photos, type }) => {
      const newAnimal = new Animal({ name, description, age, adoption, profileImage, photos, type });
      return await newAnimal.save();
    },
    editAnimal: async (_, { id, name, description, age, adoption, profileImage, photos, type }) => {
      const updateFields = { name, description, age, adoption, type };

      if (profileImage) {
        updateFields.profileImage = await uploadFile(profileImage);
      }

      if (photos) {
        updateFields.photos = await Promise.all(photos.map(photo => uploadFile(photo)));
      }

      return await Animal.findByIdAndUpdate(id, updateFields, { new: true });
    },
    deleteAnimal: async (_, { id }) => {
      return await Animal.findByIdAndDelete(id);
    },
  },
};

export default resolvers;
