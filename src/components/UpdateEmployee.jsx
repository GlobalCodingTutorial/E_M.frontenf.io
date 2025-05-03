import { React,useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import EmployeeService from "../service/EmployeeService"
function UpdateEmployee() {
    const {id} = useParams();

    const [employee, setEmployee] = useState({
        id: id,
        name: "",
        phone: "",
        email: "",
      });


        useEffect(() => {
          const fetchData = async () => {
            try {
              const Response = await EmployeeService.getEmployeeById(employee.id);
              setEmployee(Response.data);
            } catch (error) {
              console.log(error);
            }
          };
          fetchData();
        }, [employee.id]);
      
    
      const updateEmployee = (e) => {
        e.preventDefault();
        EmployeeService.updateEmployee(employee, id)
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
    
      const navigate = useNavigate();
  return (
    <div className="max-w-xl bg-slate-800 mx-40 my-20 px-8 py-4 rounded shadow">
      <div className="text-3xl tracking-wider font-bold text-center px-8 py-4">
        <p>Update Employee</p>
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
          onClick={updateEmployee}
          className="bg-green-400 hover:bg-green-700 py-2 px-6 rounded"
        >
          Update
        </button>
      
        <button
          onClick={() => navigate("/")}
          className="bg-red-400 hover:bg-red-700 py-2 px-6 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

export default UpdateEmployee;



