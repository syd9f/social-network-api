const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:studentId/assignments').post(createReaction);

// /api/thoughts/:thoughtId/reactions/:reactiontId
router.route('/:thoughtId/reactions/:reactiontId').delete(deleteReaction);

module.exports = router;
