import {ethers} from "ethers"
const Complaint=({state})=>{
   const complaint=async()=>{
    const {contract}=state;
    console.log('transaction running')

   }
    return (<>
    <form action="/submit_protest_details" method="post">
  <label for="title">Protest Title:</label><br />
  <input type="text" id="title" name="title" required /><br />
  
  <label for="desc">Description:</label><br />
  <textarea id="desc" name="description" required></textarea><br />
  
  <label for="location">Location:</label><br/>
  <input type="text" id="location" name="location" required/><br/>
  
  <label for="date">Date:</label><br/>
  <input type="date" id="date" name="date" required/><br/><br/>
  
  <button onClick={complaint}>
    Add a complaint
  </button>
</form></>)
}
export default Complaint;