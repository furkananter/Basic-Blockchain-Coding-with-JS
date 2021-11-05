const crypto = require('crypto');
class blockchain {
    constructor() {
        if (!blockchain.instance) {
            this.pendingTranscation = [];
            this.chain = [];
            blockchain.instance = this;
        }
        return blockchain.instance;
    }
    createGenesisBlock(block) {
        this.chain.push(block);
    }
    addBlocktoChain(block) {
        if (this.isBlockValid()) {
            this.chain.push(block);
            this.pendingTranscation = [];
        }
    }
    isBlockValid() {
        return block.hash === block.createHash();
    }
}
class block {
    constructor(timestamp, transaction, difficulty, previousBlockHash = '') {
        this.timestamp = timestamp;
        this.nonce = 0;
        this.transaction = transaction;
        this.difficulty = difficulty;
        this.previousBlockHash = previousBlockHash;
        this.hash = 0;
    }

    createHash() {

    }
}