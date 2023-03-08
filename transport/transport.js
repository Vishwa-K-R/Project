import React, { useState } from 'react';
import "../src/Styles/trans.css";
function Form() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [carmodel, setCarmodel] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>HIRE HERE</h1>
      <label htmlFor="id">ID:</label>
      <input
        type="text"
        id="id"
        name="id"
        value={id}
        onChange={(event) => setId(event.target.value)}
        required
      />

      <label htmlFor="name">Customer Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />

      <label htmlFor="phone">Phone Number:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        required
      />

      <label htmlFor="address">Address:</label>
      <input
        type="text"
        id="address"
        name="address"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
        required
      />

      <label htmlFor="amount">Amount:</label>
      <input
        type="number"
        id="amount"
        name="amount"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
        required
      />

      <label htmlFor="carmodel">Car Model:</label>
      <input
        type="text"
        id="carmodel"
        name="carmodel"
        value={carmodel}
        onChange={(event) => setCarmodel(event.target.value)}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
