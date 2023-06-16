// EmployeeDetailsPage.js
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json'

const EmployeeDetailsPage = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    setEmployee(data.data);
    },
    [id]);

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Employee Details</h2>
      <p>ID: {employee.id}</p>
      <p>Name: {employee.employee_name}</p>
      <p>Salary: {employee.employee_salary}</p>
      <p>Age: {employee.employee_age}</p>
    </div>
  );
};

export default EmployeeDetailsPage;
