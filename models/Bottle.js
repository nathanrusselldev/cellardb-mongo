const { Schema, model } = require('mongoose')
const cellar = require('./Cellar')

const bottleSchema = new Schema(
    {
        vintage: {
            type: String,
            allowNull: true,
            required: false
        },
        type: {
            type: String,
            allowNull: false,
            required: true
        },
        location: {
            type: String,
            required: false
        },
        notes: {
            type: String,
            allowNull: true,
            required: false
        },
        winery: {
            type: String,
            require: true,
            allowNull: false
        },
    },
        {
            toJSON: {
              virtuals: true,
            },
        }
)

const Bottle = model('bottle', bottleSchema)

module.exports = Bottle;