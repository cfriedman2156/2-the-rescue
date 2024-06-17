import Animal from './models/Animal';

const resolvers = {
  Query: {
    animals: async (_, { type }) => await Animal.find({ type }),
    animal: async (_, { id }) => await Animal.findById(id),
  },
  Mutation: {
    addAnimal: async (_, { name, description, age, profileImage, photos, type }) => {
      const newAnimal = new Animal({ name, description, age, profileImage, photos, type });
      return await newAnimal.save();
    },
    editAnimal: async (_, { id, name, description, age, profileImage, photos, type }) => {
      const updateFields = { name, description, age, profileImage, photos, type };
      Object.keys(updateFields).forEach((key) => updateFields[key] === undefined && delete updateFields[key]);
      return await Animal.findByIdAndUpdate(id, updateFields, { new: true });
    },
  },
};

export default resolvers;
