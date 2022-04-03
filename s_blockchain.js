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
        return  crypto.createHmac('sha256',JSON.stringify(this.transaction))
        .update(JSON.stringify(this.timestamp))
        .update(JSON.stringify(this.previousBlockHash))
        .update(JSON.stringify(this.nonce)).digest('hex');
    }

    createBlock(){
        this.hash = this.createHash();
        while(this.hash.substring(0,this.difficulty) !== Array(this.difficulty+1).join(""))
        {
             this.hash = this.createHash();
             this.nonce++;
        }
        return this.hash;
  }
}

class transaction{
    constructor(fromAddress,toAddress,amount){
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
    }
}

const chain = new blockchain();
    const GenesisBlock =  new block("01/01/2013","this is genesis",0,'');
    console.log("genesis file yaratıldı: " + GenesisBlock.hash);
    chain.createGenesisBlock(GenesisBlock);
    const concreteTranscation1 = new transaction("alice","bob","10");
    const concreteTranscation2 = new transaction("james","alice","3");
    console.log("transaction1 yaratıldı: "+concreteTranscation1.amount);
    console.log("transaction2 yaratıldı: "+concreteTranscation2.amount);
    chain.addtransaction(concreteTranscation1);
    chain.addtransaction(concreteTranscation2);
    console.log("transactionlar miners pool içine eklendi");
    var lastBlock = chain.chain.pop();
    console.log("son blok :"+ lastBlock.hash);
    const concreteBlock = new block("14/09/2018",JSON.stringify(chain.pendingTransaction),0,lastBlock.hash);
    var lastBlock = concreteBlock.createBlock(lastBlock.hash.toString());
    console.log("block zincire eklendi: " + concreteBlock.hash);