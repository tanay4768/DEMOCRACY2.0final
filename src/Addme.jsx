import {ethers} from "ethers"
const Addme=({state})=>{
   const addme=async()=>{
    const {contract}=state;
    console.log('transaction running')
    const transaction = await contract.setComplaint(1);
    
   }
    return <><button onClick={addme} id="content">GetPoints
    {}</button></>
}

export default Complaint;