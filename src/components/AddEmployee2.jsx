import React, { useState } from 'react';

function AddEmployee2(props) {
    const {updateEmployee}=props;
    const [formData,setformData]=useState();
    const addEmployee=(e)=>{
        e.preventDefault();
        updateEmployee(formData);
    }
    const handleChange=(e)=>{
        let {name,value}=e.target;
        setformData((prev)=>({
            ...prev,
            [name]:value,
            id:Date.now()


        }))
    }
    return (

        <div>
            <form action="">
                <input type="text" name="name" placeholder='name' onChange={handleChange}/>
                <input type="text" name="gender" placeholder='gender' onChange={handleChange}/>
                <input type="text" name="designation" placeholder='designation' onChange={handleChange}/>
                <input type="text" name="salary" placeholder='salary' onChange={handleChange}/>
                <input type="text" name="city" placeholder='city' onChange={handleChange}/>
                <button onClick={addEmployee}>Add Employee</button>
            </form>
            
        </div>
    );
}
export default AddEmployee2;