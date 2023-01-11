import React, { useState ,useEffect} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Employee from './Employee';
import {v4 as uuid} from 'uuid'
import {Link,useNavigate} from 'react-router-dom'
function Update() {
    const [name,setName] = useState("");
    const [age, setAge]= useState("");
    const [id,setId] = useState("");

    let history = useNavigate();

    var index = Employee.map(function(e){
        return e.id
      }).indexOf(id);

      const handleSubmit=(e)=>{
        e.preventDefault();
        let a = Employee[index];
        a.Name = name;
        a.Age = age;
        history('/')  
    }

    useEffect(()=>{
      setName(localStorage.getItem('Name'))
      setAge(localStorage.getItem('Age'))
      setId(localStorage.getItem('Id'))
    },[])
  return (
    <div>
       <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"></label>
    <input type="text" class="form-control" id="exampleInputEmail1"value={name} aria-describedby="emailHelp" placeholder="Enter name" onChange={(e)=>setName(e.target.value)}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label"></label>
    <input type="text" class="form-control" id="exampleInputPassword1" value={age} placeholder="Enter Age" onChange={(e)=>setAge(e.target.value)}/>
  </div>
  <button type="submit" class="btn btn-primary" onClick={(e)=>handleSubmit(e)}>Update</button>
</form> 
    </div>
  )
}

export default Update