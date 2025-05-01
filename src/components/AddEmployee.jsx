import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";
function AddEmployee() {
  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    phone: "",
    email: "",
  });

  const saveEmployee = (e) => {
    e.preventDefault();
    EmployeeService.saveEmployee(employee)
      .then((Response) => {
        console.log("saved", Response);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  const reset = (e) => {
    e.preventDefault();
    setEmployee({
      id: "",
      name: "",
      phone: "",
      email: "",
    });
  };

  const navigate = useNavigate();

  return (
    <div className="max-w-xl bg-slate-800 mx-40 my-20 px-8 py-4 rounded shadow">
      <div className="text-3xl tracking-wider font-bold text-center px-8 py-4">
        <p>Add New Employee</p>
      </div>
      <div className="mx-10 my-2">
        <input
          type="text"
          name="name"
          onChange={(e) => handleChange(e)}
          value={employee.name}
          className="w-full py-2 px-4 my-4 text-slate-800 rounded"
          placeholder="Name"
        ></input>
        <input
          type="number"
          name="phone"
          onChange={(e) => handleChange(e)}
          value={employee.phone}
          className="w-full py-2 px-4 my-4 text-slate-800 rounded"
          placeholder="Phone"
        ></input>
        <input
          type="email"
          name="email"
          onChange={(e) => handleChange(e)}
          value={employee.email}
          className="w-full py-2 px-4 my-4 text-slate-800 rounded"
          placeholder="Email"
        ></input>
      </div>
      <div className="flex my-4 space-x-4 px-20 mx-6">
        <button
          onClick={saveEmployee}
          className="bg-green-400 hover:bg-green-700 py-2 px-6 rounded"
        >
          Save
        </button>
        <button
          onClick={reset}
          className="bg-blue-400 hover:bg-blue-700 py-2 px-6 rounded"
        >
          Clear
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-red-400 hover:bg-red-700 py-2 px-6 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default AddEmployee;
