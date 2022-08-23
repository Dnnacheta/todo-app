import { ethers } from "hardhat";

async function main() {
  
    const Todo = await ethers.getContractFactory("TodoApp");
    const todo = await Todo.attach(
        "0x8d8593a3AD310fc69D4A1297690B44a58147f997" // The deployed contract address. Rinkeby Network
      );
    await todo.setTesk("Testing 1", "This is atest"); // 0xfdfc986c927723c8b21ac4693481612efa45b3fd83888e119f919bb0b54eeb4e
    
    //   const y = await todo.getTask(0); 

    //   await todo.updateStatus(0, true); // 0x88d63a0029fbe45e7ebc60383033c65f565669aa50974df507b2af62407d9e2e
    
    //   await todo.deleteTask(0); // 0x373f70198decb2f6cd1dba0c4266436e4775a3e8aade3b644d8ba835ad5bec07
    
    
    // const todo = await Todo.deploy();
    // await todo.deployed();
    // console.log(`This contract is deploy on Goerli Address deployed to ${todo.address}`);
  }

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});