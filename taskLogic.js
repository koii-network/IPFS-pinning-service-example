const crypto = require('crypto');

async function generateProof() {
    try {
        const files = {
        cid: "file1",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        };

        const hash = calculateHash(files);
        const totalSize = calculateFileSize(files.content);

        const proofs = {
        files,
        hash,
        totalSize,
        };

        console.log('Proofs stored successfully', proofs);
    } catch (error) {
        console.error('Error in populating proofs database', error);
    }


        function calculateHash(data) {
        const hash = crypto.createHash('sha256');
        hash.update(JSON.stringify(data));
        const hashDigest = hash.digest('hex');
        return hashDigest;
        }

        function calculateFileSize(content) {
        const fileSizeInBytes = Buffer.byteLength(content, 'utf8');
        return fileSizeInBytes;
        }
}

generateProof();
