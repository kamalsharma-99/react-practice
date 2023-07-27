import React,{useState} from 'react';
import TableRow from './TableRow';
const data=[
    {id:1,name:'Aman',course:'Full Stack',gender:'Male',fees:30000},
    {id:2,name:'Raman',course:'Front End',gender:'Male',fees:20000},
    {id:3,name:'Rahul',course:'Front End',gender:'Male',fees:20000},
    {id:4,name:'Vidushi',course:'Backend',gender:'Female',fees:20000}
]


function EmployeeSection(props) {
    const [studentData,setStudentData]=useState(data);
    return (
        <div>
             <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Gender</th>
                        <th>Fees</th>
                    </tr> </thead>
                <tbody>
                    
                        {
                            studentData.map((item)=>{
                                return(
                                  <TableRow key='{item.id}' item={item} />
                                ) 
                            })
                        }
                        
                    
                </tbody>
                </table>
            
        </div>
    );
}

export default EmployeeSection;