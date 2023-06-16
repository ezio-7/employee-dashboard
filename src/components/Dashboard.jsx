import './Dashboard.css'
import { useState, useEffect } from 'react';
import EmployeeList from './EmployeeList';
import EmployeeDetails from './EmployeeDetails';
import data from '../data.json'
const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    setEmployees(data.data);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    if (!searchTerm) {
      setSearchResult(null);
      return;
    }

    const employee = employees.find((employee) => employee.id === searchTerm);

    setSearchResult(employee);
    setSearchTerm('');
  };

  const handleDelete = (employeeId) => {
    const updatedEmployees = employees.filter(
      (employee) => employee.id !== employeeId
    );
    setEmployees(updatedEmployees);
  };

  const handleEdit = (employee) => {
    // Implement edit functionality
    console.log('Editing employee:', employee.id);
    // You can perform edit logic here, such as navigating to an edit form or displaying a modal
  };

  return (
    <div>
      <h2>Employee Dashboard</h2>
      <div>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <EmployeeList employees={employees} onDelete={handleDelete} onEdit={handleEdit} />
      {searchResult && <EmployeeDetails employee={searchResult} />}
    </div>
  );
};

export default Dashboard;
