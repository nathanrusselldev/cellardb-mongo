const { Schema, model } = require('mongoose')

const positionSchema = new Schema(
    {
        bottle: 
        {
            type: Schema.Types.ObjectId,
            ref: 'bottle',
            allowNull: true,
        }
        
    },
    {
        toJSON: {
          virtuals: true,
        },
    }

)

const Position = model('position', positionSchema)

module.exports = Position