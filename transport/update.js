import * as React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import { useState} from 'react';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './patient.css';

// import './patient.css';
export default function UpdateForm() {
    const [id, setId] = useState('');
    const [customerName, setCustomerName] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [address, setAddress] = useState("");
    const [amount, setAmount] = useState("");
    const [carModel, setCarModel] = useState("");
    async function save(event) {
        event.preventDefault();
        try {
            await axios.put("http://localhost:8080/tra",

                { id:id,
                   customerName:customerName,
                   phoneNo:phoneNo,
                    address : address,
                    amount:amount,
                    carModel:carModel

                });
            alert("Updation Successfully Completed");
            setId("");
            setCustomerName("");
            setPhoneNo("");
            setAddress("");
            setAmount("");
            setCarModel("");


        }
        catch (err) {
            alert("User Updation Failed");
        }
    }

    return (
        <div>
           
           <center ><h2>Update The Details</h2></center>
            <div class="container mt-4"  style={{ display: 'block', 
        width: 500, 
        padding: 30 }}></div>
          
        <form>
        <div class="form-group">
       <center> <input type="number" placeholder='Enter ID Number' className="form-control1" value={id} onChange={(e) => setId(e.target.value)}/></center>
        <br></br>
            <label><span>CustomerName</span></label>
            <input type="text" class="form-control" placeholder="Enter CustomerName"
             value={customerName}
            onChange={(event) =>
              {
                setCustomerName(event.target.value);      
              }}
            />
        </div>
        <br></br>
        <div class="form-group">
            <label><span>Phone Number</span></label>
            <input type="text" class="form-control" placeholder="Enter Phonenumber"
             value={phoneNo}
            onChange={(event) =>
              {
                setPhoneNo(event.target.value);      
              }}
            />
        </div>
        <br></br>
        <div class="form-group">
            <label><span>Address</span></label>
            <input type="text" class="form-control" placeholder="Enter Address"
             value={address}
             onChange={(event) =>
               {
                setAddress(event.target.value);      
               }}
            />
        </div>
        <br></br>
        <div class="form-group">
            <label><span>Amount</span></label>
            <input type="text" class="form-control" placeholder="Enter amount"
             value={amount}
             onChange={(event) =>
               {
                setAmount(event.target.value);      
               }}
            />
        </div>
        <br></br>
        <div class="form-group">
            <label><span>CarModel</span></label>
            <input type="text" class="form-control" placeholder="Enter Carmodel"
            value={carModel}
            onChange={(event) =>
              {
                setCarModel(event.target.value);      
              }}
           />
        </div>
        <br></br>
        <center>
               <center> <button type="submit" class="btn btn-primary" onClick={save}>Update</button></center>
                </center>
                
            </form>
            

        </div>
    );
}