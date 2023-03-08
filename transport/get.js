import {useEffect,useState} from "react"
import "../Styles/table.css"

export default function Post(){
    const[order,setOrder] = useState([]);
    useEffect(()=> {
        fetch("http://localhost:8080/tra")
        .then(res=>res.json())
        .then(res=>setOrder(res))
    })
    return(
        <div className="App">
            <table>
            <tr>
                <th>ID</th>
                <th>customer Name</th>
                <th>Phone Number</th>
                <th>Address</th>
                <th>Amount</th>
                <th>Car Model</th>
            </tr>
            {order.map(u=>(
                <tr>
                    <th>{u.id}</th>
                    <th>{u.customerName}</th>
                    <th>{u.phoneNo}</th>
                    <th>{u.address}</th>
                    <th>{u.amount}</th>
                    <th>{u.carModel}</th>
                </tr>
            ))}
            </table>
        </div>
    );
}