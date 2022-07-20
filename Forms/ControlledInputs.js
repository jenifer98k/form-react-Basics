import React, {useState,useEffect} from 'react';


const ControlledInputs = () => {
  const [firstName,setFirstName]=useState('');
  const [email,setEmail]=useState('');
  const  [age,setAge]=useState('');
  const [people,setPeople]=useState([])
    const handleSubmit=(e)=>{
       e.preventDefault();
    if(firstName && email){
      
      const person={id:new Date().getTime().toString(),firstName,email,age};
      setPeople((people)=>{
        return [...people,person]
                });
                setFirstName('')
                setEmail('')
                setAge('')
    }
       else {
        console.log('empty values')
       }
      }
  return ( 
   
<div class="login-box">
  <form onSubmit={handleSubmit}>
    <div class="user-box">
      <input type="text" id='firstName'name="firstName" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
      <label>Username</label>
    </div>
    <div class="user-box">
      <input type="text"  id='email' name="email"  value={email} onChange={(e)=>setEmail(e.target.value)} />
      <label>Email</label>
    </div>
    <div class="user-box">
      <input type="text"  id='age' name="age"  value={age} onChange={(e)=>setAge(e.target.value)} />
      <label>Email</label>
    </div>
    <button className="btn1" type='submit'>
      <span></span>
      Submit
    </button>
   <br></br> <br></br>
  </form>
  
  {people.map((person)=>{
    const {id,firstName,email,age}=person;
    return( <div className='Items'>
      <div className="addItem" >
      <div className='id'>{id}</div>   
   <div className='name'>{firstName}</div>
   <div className='mail'>{email}</div>
   <div className='age'>{age}</div>
</div>
    </div>
    

    )
   
  })}
  
</div>
)
}

export default ControlledInputs;
