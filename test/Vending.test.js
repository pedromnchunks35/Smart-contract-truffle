//REQUIRE SOLIDITY CONTRACT
const VendingMachine = artifacts.require("Donutvending");
//grab de contract
contract("Donutvending",(accounts)=>{
    //before everything in the program we deploy the contract
    before(
        //assync function
        async () =>{
            instance= await VendingMachine.deployed()
        });
        //check if the balance actually is 100
        it('Ensure that the vending balance of the machine is 100',async() => {
            //take the instance of the contract and get the balance
         let balance = await instance.getVendingMachineBalance();
         //check the information
         assert.equal(balance,100,'THe initial balance should be 100 donuts.');
        });

        it('Ensure that the vending balance of the vending machine can be updated',async() => {
            await instance.restock(100);
            //take the instance of the contract and get the balance
         let balance = await instance.getVendingMachineBalance();
         //check the information
         assert.equal(balance,200,'THe initial balance should be 200 donuts.');
        });
        
        //another test but this time we purchase an donut
        it('Ensure that i can purchase something',async()=>{
            
            await instance.purchase(1,{from: accounts[1],value: web3.utils.toWei('3','ether')});
            let balance = await instance.getVendingMachineBalance();
            assert.equal(balance,199,'It should take one out');
        })
});