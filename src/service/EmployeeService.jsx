import axios from "axios";
const EMPLOYEE_S_APIBASE_URL ="https://ems-backend-i27s.onrender.com/employees";
class EmployeeService {
  saveEmployee(employee) {
    return axios.post(EMPLOYEE_S_APIBASE_URL, employee);
  }

  getEmployee() {
    return axios.get(EMPLOYEE_S_APIBASE_URL);
  }

  getEmployeeById(id) {
    return axios.get(EMPLOYEE_S_APIBASE_URL + "/" + id);
  }

  deleteEmployeeById(id) {
    return axios.delete(EMPLOYEE_S_APIBASE_URL + "/" + id);
  }
  updateEmployee(employee, id) {
    return axios.put(EMPLOYEE_S_APIBASE_URL + "/" + id, employee);
  }
}

export default new EmployeeService();
