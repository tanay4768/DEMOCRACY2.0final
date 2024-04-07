// import {ethers} from "ethers"
// const Protest=({state})=>{
//    const protestChai=async()=>{
//     const {contract}=state;
//     console.log('transaction running')
    
//     const title=document.getElementById('title').value;
//     console.log(title)
//     const desc=document.getElementById('desc').value;
//     console.log(desc)
//     const location=document.getElementById('location').value;
//     console.log(location)
//     const date=document.getElementById('date').value.toString();
//     console.log(date)
//     // const transaction = await contract.setProtest(title, desc,location,date);
//     console.log("Protest successfully created")
//     console.log(date)
//     const p=document.createElement('p');
//     p.innerText=title+location+;
//     document.getElementById("cont").appendChild(p);
//    }


//     return (<>
//        <div className="cont">
//        <form >
//   <label>Protest Title:</label><br />
//   <input type="text" id="title" name="title" required /><br />
  
//   <label >Description:</label><br />
//   <textarea id="desc" name="description" required></textarea><br />
  
//   <label >Location:</label><br/>
//   <input type="text" id="location" name="location" required/><br/>
  
//   <label >Date:</label><br/>
//   <input type="date" id="date" name="date" required/>
  
//   <button onClick={protestChai}>
//     Add a complaint
//   </button>
// </form>
//        </div>
//     </>)
// }
// export default Protest;
import { ethers } from "ethers";
import React, { useState } from 'react';
import './protest.css'

const Protest = ({ state }) => {
  const [protestData, setProtestData] = useState({
    title: '',
    description: '',
    location: '',
    date: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProtestData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const protestChai = async () => {
    const { contract } = state;
    console.log('Transaction running');

    // Assuming setProtest is a function in your smart contract
    // Uncomment the next line and provide the correct parameters as needed
    // const transaction = await contract.setProtest(protestData.title, protestData.description, protestData.location, protestData.date);

    console.log("Protest successfully created");
    
    // Create a paragraph element to display the protest data
    const p = document.createElement('p');
    p.innerHTML += `<br>"title:"${protestData.title}"description" <br>${protestData.desc}<br>"location" ${protestData.location}<br>"date"${protestData.date}`;
    document.querySelector(".cont").appendChild(p);
  };

  return (
    <>
      <div className="cont">
        <h2>Add a Protest</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>Protest Title:</label><br />
          <input type="text" id="title" name="title" required onChange={handleInputChange} />
          
          <label>Description:</label><br />
          <textarea id="desc" name="description" required onChange={handleInputChange}></textarea>
          
          <label>Location:</label><br/>
          <input type="text" id="location" name="location" required onChange={handleInputChange}/>
          
          <label>Date:</label><br/>
          <input type="date" id="date" name="date" required onChange={handleInputChange}/>
          
          <button type="button" onClick={protestChai}>
            Add a Protest
          </button>
        </form>
      </div>
    </>
  );
};

export default Protest;
