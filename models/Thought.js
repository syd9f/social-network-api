const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema(
  {
    thoughtText: { 
      type: String, 
      required: true 
    },
    createdAt: { 
      type: Date, 
      default: Date.now 
    },
    username: { 
      type: String, 
      required: true 
    },
    reactions: [ 
      {
        type: Schema.Types.ObjectID, 
        ref: 'reaction'}
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);



// add reaction
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
