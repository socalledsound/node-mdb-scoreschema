const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
// const Currency = mongoose.Types.Currency;


const ScoreSchema = new Schema(
    { 
    user: {
        type: String,
        required: true,
        },
    score: {
        type: Number,
        required: true,
        },
    }, 
    {
        timestamps: true
    }
)

const Scores = mongoose.model('Scores', ScoreSchema);

module.exports = Scores;