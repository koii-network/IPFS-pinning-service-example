const { namespaceWrapper } = require('./namespaceWrapper');
const db = await namespaceWrapper.getDb();


const getFile = async CID => {
    try {
      const resp = await db.findOne({ CID });
      if (resp) {
        return resp.data;
      } else {
        return null;
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
  const getProofs = async roundID => {
    try {
      const resp = await db.findOne({ roundID });
      if (resp) {
        return resp.proofs;
      } else {
        return null;
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
  const setFile = async (CID, value) => {
    try {
      await db.insert({ CID, value });
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
  module.exports = {
    getFile,
    getProofs,
    setFile,
  };
  

