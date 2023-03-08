import axios from 'axios';
import {useState } from "react";
import "../src/Styles/trans.css";
function TransportRegistration()
{
    const [id, setId] = useState('');
    const [customerName, setcustomerName] = useState("");
    const [phoneNo, setphoneNo] = useState("");
    const [address, setaddress] = useState("");
    const [amount, setamount] = useState("");
    const [carModel,setcarModel] = useState("");
   
    
 
    async function save(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8080/tra",
        {
        
        id:id,
        customerName:customerName,
        phoneNo:phoneNo,
        address:address,
        amount:amount,
        carModel:carModel
        });
          alert("Registation Successfully Completed.");
          setId("");
          setcustomerName("");
          setphoneNo("");
          setaddress("");
          setamount("");
          setcarModel("");
        }
    catch(err)
        {
          alert("User Registation Failed");
        }
   }
    return (

        <div class="form"  style={{ display: 'block', 
        width: 700, 
        padding: 30 }}>
          <center><h1>HIRE HERE</h1></center>
        <form>
        <div class="content">
        <label><span>Customer Id</span></label>
        <br></br>
            <input type="text" class="form-control" placeholder="Enter Customer Id"
             value={id}
            onChange={(event) =>
              {
                setId(event.target.value);      
              }}
            />
            <br></br>
            <label><span>Customer Name</span></label>
            <br></br>
            <input type="text" class="form-control" placeholder="Enter Customername"
             value={customerName}
            onChange={(event) =>
              {
                setcustomerName(event.target.value);      
              }}
            />
        </div>
        <br></br>
        <div class="form-group">
            <label><span>Phone Number</span></label>
            <br></br>
            <input type="text" class="form-control" placeholder="Enter Phonenumber"
             value={phoneNo}
            onChange={(event) =>
              {
                setphoneNo(event.target.value);      
              }}
            />
        </div>
        <br></br>
        <div class="form-group">
            <label><span>Address</span></label>
            <br></br>
            <input type="text" class="form-control" placeholder="Enter Address"
             value={address}
             onChange={(event) =>
               {
                setaddress(event.target.value);      
               }}
            />
        </div>
        <br></br>
        <div class="form-group">
            <label><span>Amount</span></label>
            <br></br>
            <input type="text" class="form-control" placeholder="Enter amount"
             value={amount}
             onChange={(event) =>
               {
                setamount(event.target.value);      
               }}
            />
        </div>
        <br></br>
        <div class="form-group">
            <label><span>Car Model</span></label>
            <br></br>
            <input type="text" class="form-control" placeholder="Enter Carmodel"
            value={carModel}
            onChange={(event) =>
              {
                setcarModel(event.target.value);      
              }}
           />
        </div>
        <br></br>
        
        <button class="btn btn-primary mt-4"  onClick={save}>Register</button>
        </form>
      </div>
    
    );
  }
  
  export default TransportRegistration;