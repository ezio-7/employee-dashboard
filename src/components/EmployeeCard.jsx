import './EmployeeCard.css'
import {Routes, Route, useNavigate} from 'react-router-dom';

const EmployeeCard = ({ employee, onDelete, onEdit }) => {
  const handleDelete = () => {
    onDelete(employee.id);
  };

  const handleEdit = () => {
    onEdit(employee);
  };

  const handleCardClick = () => {
    history.push('/2')
  };

  return (
    <div className="employee-card" onClick={handleCardClick}>
      <h3 onClick={handleCardClick}>Name: {employee.employee_name}</h3>
      <p onClick={handleCardClick}>Salary: {employee.employee_salary}</p>
      <p onClick={handleCardClick}>Age: {employee.employee_age}</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default EmployeeCard;
