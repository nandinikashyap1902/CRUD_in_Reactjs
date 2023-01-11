import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Employee from './Employee';
import {Link,useNavigate} from 'react-router-dom'

function Home() {
  let history = useNavigate();
  const DeleteEmployee =(id)=>{
    var index = Employee.map(function(e){
      return e.id
    }).indexOf(id);
    Employee.splice(index,1);
    history('/')
  }

  const handleEdit = (id, name, age)=>{
   localStorage.setItem('Name',name);
   localStorage.setItem('Age',age);
   localStorage.setItem('Id',id);
  }
  return (
    <div>
    <div>
    <table class="table">
<thead>
<tr>
  <th scope="col">Id</th>
  <th scope="col">First</th>
  <th scope="col">Last</th>
</tr>
</thead>
<tbody>
{
  Employee && Employee.length>0
  ?
  Employee.map((item)=>{
    return(
      <tr>
        <td>
          {item.Name}
        </td>
        <td>
          {item.Age}
        </td>
        <td>
          <Link to={'/Update'}>
        <button type="button" class="btn btn-primary" onClick={()=>handleEdit(item.id,item.Name,item.Age)}>EDIT</button>
        </Link>
        &nbsp;
        <button type="button" class="btn btn-primary"onClick={()=>DeleteEmployee(item.id)}>DELETE</button>
        </td>
      </tr>
    )
  })
  :
  "No data Available"
}
</tbody>
</table>
<br>
</br>
<Link className='d-grid gap-2'to="/create">
<button type="button" class="btn btn-info">ADD</button>
</Link>
</div>
</div>
   
  )
}

export default Home