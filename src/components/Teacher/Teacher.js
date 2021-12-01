import React,{useEffect,useState} from 'react';
import './Teacher.css';
import teacherData from '../FakeData/teacherData.json';
import Teachers from '../Teachers/Teachers'

const Teacher = () => {
    const [teachers,setTeachers] = useState([]);
    useEffect(()=>{
        setTeachers(teacherData)
    },[teachers])
    return (
        <div>
            <div className="containers">
                {
                    teachers.map(teacher => <Teachers key={teacher.key}
                        teacher={teacher}></Teachers>
                        )
                }
            </div>
        </div>
    );
};

export default Teacher;