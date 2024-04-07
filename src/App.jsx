import { useEffect, useState } from 'react'
import {ethers} from "ethers"
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Buy from './buy'
import Home from './Home'
import Protest from './protest'

function App() {
  const [state, setState] = useState({
    provider:null,
    signer:null,
    contract:null
  })
  const [account,setAccount]=useState('not connected');
useEffect(()=>{
  const template=async()=>{
    const contractAddress="0x1969DE7f8bfbf0400F898660833c56210C07B283";
    const contractAbi=[
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "protestId",
            "type": "uint256"
          }
        ],
        "name": "addMe",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "politicianId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "compindex",
            "type": "uint256"
          }
        ],
        "name": "getComplaintdes",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "politicianId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "compindex",
            "type": "uint256"
          }
        ],
        "name": "getComplaintresp",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "politicianId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "compindex",
            "type": "uint256"
          }
        ],
        "name": "getComplainttime",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "poli_num",
            "type": "uint256"
          }
        ],
        "name": "getcompno",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "poli_num",
            "type": "uint256"
          }
        ],
        "name": "getpoints",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "poli",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "resp",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "compid",
            "type": "uint256"
          }
        ],
        "name": "giveresp",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "protestid",
            "type": "uint256"
          }
        ],
        "name": "participants",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "politicians",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "points",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "complaintCount",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "protestid",
            "type": "uint256"
          }
        ],
        "name": "prodate",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "protestid",
            "type": "uint256"
          }
        ],
        "name": "prodesc",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "protestid",
            "type": "uint256"
          }
        ],
        "name": "proloc",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "protests",
        "outputs": [
          {
            "internalType": "string",
            "name": "title",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "description",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "location",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "date",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "participants",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "protestid",
            "type": "uint256"
          }
        ],
        "name": "protitle",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "politicianId",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "description",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "times",
            "type": "string"
          }
        ],
        "name": "setComplaint",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "title",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "description",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "location",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "date",
            "type": "string"
          }
        ],
        "name": "setProtest",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ]
    try{
      const {ethereum}=window;
      const account=await ethereum.request({
        method: "eth_requestAccounts"
      })
      window.ethereum.on("accountsChanged",()=>{
        window.location.reload();
      })
      setAccount(account);
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer=provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractAbi,
        signer
      )
      setState({provider,signer,contract});
    }catch(error){
      alert(error);

    }
  }
  template();
})

  return (

    <>
    <h1>Vocie Your Project</h1>
  <Protest></Protest>
    </>
  )
}

export default App
