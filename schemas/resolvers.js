const {Bottle, Cellar, Position} = require('../models')

const resolvers = {
    Query: {
        cellars: async () => Cellar.find(),
        bottles: async () => Bottle.find()
    },
    Mutation: {
        addCellar: async (parent, args) => {
            const newCellar = await Cellar.create(args);

            return { newCellar };
        },
        addBottle: async (parent, args) => {
            const newBottle = Bottle.create(args);
            console.log(args)
            return { newBottle };
        }
    }
}

module.exports = resolvers