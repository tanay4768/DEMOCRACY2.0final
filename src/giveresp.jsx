import {ethers} from "ethers"
const Giveresp=({state})=>{
   const protestChai=async()=>{
    const {contract}=state;
    console.log('transaction running')
    const transaction = await contract.giveresp(1, "working", 0);
    
   }
    return <><button onClick={protestChai} id="content">GetPoints
    {}</button></>
}
export default Giveresp;