Truffle is meant to made the propper connection to an certain blockchain.
We build contracts in the contracts dir and we export them in migrations with the name of the contract and not the contract file.
test dir will be our truffle unit test , be free to check out the examples there.
.gitgnore para ignorar files da nossa dir , neste caso .env
no .env pusemos as nossas private keys de 2 contas criadas no metamask e tambem a frase secreta..
depois instalamos um modulo npm dotenv e importamos o mesmo e atraves dessa livraria fomos buscar as nossas chaves secretas
depois disso colocamos uma configuracao nova de rede para uma test net atraves da ethereum API senao tinhamos que ser nos mesmos a configurar um node.
minuto 51:21