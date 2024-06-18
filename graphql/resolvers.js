import Animal from './models/Animal';

const resolvers = {
  Query: {
    animalsType: async (_, { type }) => await Animal.find({ type }),
    animals: async () => await Animal.find(),
    animal: async (_, { id }) => await Animal.findById(id),
    horseByName: async (_, { name }) => await Animal.findOne({ name }),
  },
  Mutation: {
    addAnimal: async (_, { name, description, age, adoption, profileImage, photos, type }) => {
      const newAnimal = new Animal({ name, description, age, adoption, profileImage, photos, type });
      return await newAnimal.save();
    },
    editAnimal: async (_, { id, name, description, age, adoption, profileImage, photos, type }) => {
      const updateFields = { name, description, age, adoption, profileImage, photos, type };
      Object.keys(updateFields).forEach((key) => updateFields[key] === undefined && delete updateFields[key]);
      return await Animal.findByIdAndUpdate(id, updateFields, { new: true });
    },
    deleteAnimal: async (_, { id }) => {
      return await Animal.findByIdAndDelete(id);
    },
  },
};

export default resolvers;
