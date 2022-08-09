const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Cellar {
        id: ID
        positions: [Position]
    }
    type Position {
        bottle: Bottle
    }
    type Bottle {
        id: ID
        vintage: String
        type: String
        location: String
        notes: String
        winery: String
        
    }

    type Query {
        bottles: [Bottle]
        cellars: Cellar
    }
    type Mutation {
        addCellar(positions: Int!): Cellar,
        addBottle(vintage: String, type: String, location: String, notes: String, winery: String): Bottle
    }
`

module.exports = typeDefs