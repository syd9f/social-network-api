const { Schema } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: { 
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: { 
        type: String, 
        maxlength: 280,
        required: true 
      },
    username: { 
      type: String, 
      required: true 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
      },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
