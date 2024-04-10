import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalState } from "../context/GlobalContext";
const About = () => {
  const { state, setState, addContact, removeContact } =
    useContext(GlobalState);
  const [contact, setContact] = useState({
    id: uuidv4(),
    name: "",
    phone: "",
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);
    addContact(contact);
    setContact({
      name: "",
      phone: "",
    });
  };
  return (
    <>
      {state.map((item) => {
        return (
          <h1>
            {item.name}{" "}
            <button onClick={() => removeContact(item.id)}>X</button>
          </h1>
        );
      })}
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={contact.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="text"
              className="form-control"
              name="phone"
              value={contact.phone}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default About;
