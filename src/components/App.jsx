import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setContact((prevValue) => ({ ...prevValue, [name]: value }));

    // setContact((prevValue) => {
    //   switch (name) {
    //     case "firstName":
    //       return {
    //         firstName: value,
    //         lastName: prevValue.lastName,
    //         email: prevValue.email
    //       };
    //     case "lastName":
    //       return {
    //         firstName: prevValue.firstName,
    //         lastName: value,
    //         email: prevValue.email
    //       };
    //     case "email":
    //       return {
    //         firstName: prevValue.firstName,
    //         lastName: prevValue.lastName,
    //         email: value
    //       };
    //     default:
    //   }
    // });
  };

  return (
    <div className="container">
      <h1>
        Hello {contact.firstName} {contact.lastName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
          value={contact.firstName}
        />
        <input
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          value={contact.lastName}
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
