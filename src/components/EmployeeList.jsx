// EmployeeList.js
import React from 'react';
import EmployeeCard from './EmployeeCard';

const EmployeeList = ({ employees, onDelete, onEdit }) => {
  return (
    <div>
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default EmployeeList;
