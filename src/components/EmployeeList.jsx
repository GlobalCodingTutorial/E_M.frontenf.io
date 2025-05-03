import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";
function EmployeeList() {
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const Response = await EmployeeService.getEmployee();
        setEmployees(Response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteEmployee = (e,id) => {
   e.preventDefault();
       EmployeeService.deleteEmployeeById(id)
         .then(() => {
          if(employees){
            setEmployees((prevElement) => {
              return prevElement.filter((employee) => employee.id !==id);
             })
          }
         })
  };

   const editEmployee = (e,id) => {
    e.preventDefault();
    navigate(`/editEmployee/${id}`)
   };

  const navigate = useNavigate();

  return (
    <>
      <div className="container mx-auto my-8">
        <div>
          <button
            onClick={() => navigate("/addEmployee")}
            className=" flex items-center hover:bg-blue-600 bg-slate-600 mx-20 my-4 font-semibold px-20 py-2 rounded-md"
          >
            Add Employee
          </button>
        </div>
        <div className="mx-20 relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-white uppercase bg-gray-500 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-4 py-3">
                  Name
                </th>
                <th scope="col" class="px-4 py-3">
                  Phone
                </th>
                <th scope="col" class="px-4 py-3">
                  Email
                </th>
                <th scope="col" class="px-4 py-3">
                  Update
                </th>
                <th scope="col" class="px-4 py-3">
                  Delete
                </th>
              </tr>
            </thead>
            {!loading && (
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id} class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                    <td class="px-6 py-4">{employee.name}</td>
                    <td class="px-6 py-4">{employee.phone}</td>
                    <td class="px-6 py-4">{employee.email}</td>
                    <td class="px-6 py-4">
                      <a
                        onClick={(e, id) => editEmployee(e, employee.id)}
                        class="font-medium text-blue-700 dark:text-blue-500 hover:text-green-500 hover:cursor-pointer"
                      >
                        Edit
                      </a>
                    </td>
                    <td class="px-6 py-4">
                      <a
                        onClick={(e, id) => deleteEmployee(e, employee.id)}
                        class="font-medium text-blue-700 dark:text-blue-500 hover:text-red-500 hover:cursor-pointer"
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </>
  );
}

export default EmployeeList;


