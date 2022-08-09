const { Schema, model } = require('mongoose')
const Position = require('./Position')

const cellarSchema = new Schema(
    {
        positions: [Position.schema]
    },
    {
        toJSON: {
          virtuals: true,
        },
    }
)

const Cellar = model('cellar', cellarSchema)

module.exports = Cellar