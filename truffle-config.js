module.exports={

  networks:{
    //APENAS UMA NETWORK , PODEMOS ADICIONAR MAIS , ESTA CHAMA-SE DEVELOPMENT
    development:{
      host: "127.0.0.1",
      port: "8545",
      network_id: "*" //ANY NETWORK ID
    }
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