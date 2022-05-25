require('dotenv').config()
//waler provider mechanism to sign transactions
const HDWalletProvider = require("@truffle/hdwallet-provider"); 
//storage private keys
const private_keys = [
process.env.PRIVATE_KEY_0,
process.env.PRIVATE_KEY_1,
]

module.exports={

  networks:{
    //APENAS UMA NETWORK , PODEMOS ADICIONAR MAIS , ESTA CHAMA-SE DEVELOPMENT
    development:{
      host: "127.0.0.1",
      port: "8545",
      network_id: "*" //ANY NETWORK ID
    },
    //eth testnet
    rinkeby:{
      provider: () => new HDWalletProvider({
      privateKeys: private_keys,
      providerOrUrl: 'https://rinkeby.infura.io/v3/ffa0ca21d5a543e791026bf4e6ae6dc9',
      numberOfAddress: 2
      }),
      network_id: 4,
      gas: 5500000,
      confirmations : 2,
      timeoutBlocks : 200, // # of blocks before a deployment times out (minimum/default : 50)
      skipDryRun: true
    }
  },
  //eth itself
  mainnet:{
    provider: () => new HDWalletProvider(
    process.env.SECRET_KEY,
   `https://mainnet.infura.io/v3/ffa0ca21d5a543e791026bf4e6ae6dc9`,
    ),
    network_id: 1,
    gas: 5500000,
    confirmations : 2,
    timeoutBlocks : 200, // # of blocks before a deployment times out (minimum/default : 50)
    skipDryRun: true
  },
  solc:{
    optimizer:{
      enabled: true,
      runs: 200
    }
  },
  compilers: {

    solc: {
    
    version: "0.8.7"
    
    }
  }
}