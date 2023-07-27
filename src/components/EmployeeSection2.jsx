import React, { useState } from 'react';
import AddEmployee2 from './AddEmployee2';
import EmployeeList from './EmployeeList';

function EmployeeSection2(props) {
    
    
    const [employeeList,setEmployeeList]=useState([])
    const updateEmployee=(formData)=>{
        setEmployeeList((prev)=>(
            [
                ...prev,
                formData
            ]
        ))
    }
    return (
        <div>
            <AddEmployee2 updateEmployee={updateEmployee}/>
            <EmployeeList employeeList={employeeList} />
            
        </div>
    );
}

export default EmployeeSection2;