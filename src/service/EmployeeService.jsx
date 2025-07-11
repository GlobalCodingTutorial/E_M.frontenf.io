import axios from "axios";
const EMPLOYEE_S_APIBASE_URL = "http://ec2-51-20-95-167.eu-north-1.compute.amazonaws.com:8080/employees";
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
