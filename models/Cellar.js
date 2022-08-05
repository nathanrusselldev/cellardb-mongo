const { Schema, model } = require('mongoose')

const cellarSchema = new Schema(
    {
        positions: [
            {
                type: Schema.Types.ObjectId,
                ref: 'position'
            }
        ]
    },
    {
        toJSON: {
          virtuals: true,
        },
    }
)

const Cellar = model('cellar', cellarSchema)

module.exports = Cellar