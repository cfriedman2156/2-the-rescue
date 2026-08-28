import Animal from './models/Animal';

const resolvers = {
  Query: {
    animalsType: async (_, { type }) => await Animal.find({ type }),
    animals: async () => await Animal.find(),
    animal: async (_, { id }) => await Animal.findById(id),
    animalByName: async (_, { name, type }) => await Animal.findOne(type ? { name, type } : { name }),
    animalByAdoption: async (_, { adoption }) => await Animal.find({ adoption })
  },
  Mutation: {
    addAnimal: async (_, { name, description, age, adoption, profileImage, photos, type }) => {
      const newAnimal = new Animal({ name, description, age, adoption, profileImage, photos, type });
      return await newAnimal.save();
    },
    editAnimal: async (_, { id, name, description, age, adoption, profileImage, photos, type }) => {
      const updateFields = {};

      if (name !== undefined) updateFields.name = name;
      if (description !== undefined) updateFields.description = description;
      if (age !== undefined) updateFields.age = age;
      if (adoption !== undefined) updateFields.adoption = adoption;
      if (type !== undefined) updateFields.type = type;
      if (profileImage !== undefined) updateFields.profileImage = profileImage;
      if (photos !== undefined) updateFields.photos = photos;

      return await Animal.findByIdAndUpdate(id, updateFields, { new: true });
    },
    deleteAnimal: async (_, { id }) => {
      return await Animal.findByIdAndDelete(id);
    },
  },
};

export default resolvers;
