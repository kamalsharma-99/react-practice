import React, { useState } from 'react';

function AddEmployee(props) {

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData((prev)=>({
            ...prev,
            [name]:value,
            // id:studentData[studentData.length-1].id+1
            
            
        }))
    }
    
    const[formData,setFormData]=useState();
    return (
        <div>
             <div className='form-container'>
           
            <form action="">
                <input type="text" placeholder="enter your name" name='name' onChange={handleChange}/>
                <br />
                <input type="text" placeholder="Enter your course" name='course' onChange={handleChange}/>
                <br />
                <input type="text" pladceholder='gender' name='gender' onChange={handleChange}/>
                <br />
                <input type="number" pladceholder='fees' name='fees' onChange={handleChange}/>
                <p>Name:{formData?.name}</p>
                <p>Course:{formData?.course}</p>
                <p>Gender:{formData?.gender}</p>
                <p>Fees:{formData?.fees}</p>
                <button onClick="">Add Student</button>

            </form>
            </div>
        </div>
    );
}

export default AddEmployee;