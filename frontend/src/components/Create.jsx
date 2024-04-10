// import React, { useState } from "react";
// const Create = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [age, setAge] = useState(0);
//   // console.log(name, email, age);

//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("line no--12");

//     const addUser = { name, email, age };
//     const response = await fetch("http://localhost:5000", {
//       method: "POST",
//       body: JSON.stringify(addUser),
//       headers: { "Content-type": "application/json" },
//     });
//     console.log(response, "line no--20");
//     const result = await response.json();
//     console.log(result, "line no--22");

//     if (!response.ok) {
//       console.log(result.error);
//       setError(result.error);
//     }
//     if (!response.ok) {
//       console.log(result);
//       setError("");
//       setName("");
//       setEmail("");
//       setAge(0);
//     }
//   };

//   return (
//     <div className="container my-2">
//       {error && <div className="alert alert-danger">{error}</div>}

//       <h2 className="text-center">Enter the date</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label className="form-label">Name</label>
//           <input
//             type="text"
//             className="form-control"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Email address</label>
//           <input
//             type="email"
//             className="form-control"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Age</label>
//           <input
//             type="number"
//             className="form-control"
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//           />
//         </div>

//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Create;




import React, { useState } from "react";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const addUser = { name, email, age };

    try {
      const response = await fetch("http://localhost:5000", {
        method: "POST",
        body: JSON.stringify(addUser),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        const errorData = await response.json(); // Assuming your API returns error message in JSON format
        throw new Error(errorData.error);
      }

      // Clear form fields on successful submission
      setName("");
      setEmail("");
      setAge(0);

      // Clear error state
      setError("");

      console.log("Data added successfully!");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container my-2">
      {error && <div className="alert alert-danger">{error}</div>}

      <h2 className="text-center">Enter the data</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;

