const express = require('express');
const router = express.Router();
const db = require('./db');

// Retrieve file data for the given CID
router.get('/:cid', async (req, res) => {
  try {
    const cid = req.params.cid;
    const fileData = await db.getFile(cid);
    res.json(fileData);
  } catch (error) {
    console.error('Error retrieving file data for CID ' + req.params.cid, error);
    res.sendStatus(500);
  }
});

// Retrieve proofs for the given round ID
router.get('/proofs/:roundId', async (req, res) => {
  try {
    const roundId = req.params.roundId;
    const proofs = await db.getProofs(roundId);
    res.json(proofs);
  } catch (error) {
    console.error('Error retrieving proofs for round ID ' + req.params.roundId, error);
    res.sendStatus(500);
  }
});

// Store file data for the given CID
router.post('/sharing/:cid', async (req, res) => {
  const cid = req.params.cid;
  const { key, value } = req.body;

  try {
    await db.setFile(cid, value);
    console.log('Data stored successfully');
    res.sendStatus(200);
  } catch (error) {
    console.error('Error storing file data for CID ' + req.params.cid, error);
    res.sendStatus(500);
  }
});

module.exports = router;



// TODO - consider revising to use bespoke controller files - not urgent!
// const proofController = require('./controllers/proofs.js')

// router.get('/example', proofController.example) // for later, consider reorganizing like this