import Nav from '../nav/nav'
import './create.css'
import { useState,useRef } from 'react';

const Create = () => {
    const [createForm,setCreateForm] = useState({
        name:'',
        phone:'',
        address:'',
        provideDate:'',
        dueMonth:'',
        amount:'',
        interest:''
    })
    const [error,setError] = useState('')

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setCreateForm({...createForm,[name]:value})
    }

    const handleSave=()=>{
    if(!createForm.name &&! createForm.phone &&! createForm.address &&! createForm.provideDate &&! createForm.dueMonth &&! createForm.amount &&! createForm.interest){
        setError('please fill all fields')
    }else if(createForm.phone.length !== 10){
        setError('invalid phone number')
    }else if(createForm.dueMonth < 1 || createForm.amount < 1 || createForm.interest < 1){
        setError('invalid numbers')
    }
    else{
        console.log(createForm)
    }
    } 

    return(<div className='create'>
    <Nav />
    <div className='createContainer'>
    <h1>create form</h1>
    <input type='text' placeholder='name' name='name' value={createForm.name} onChange={handleChange}/>
    <input type='number' placeholder='phone' name='phone' value={createForm.phone} onChange={handleChange}/>
    <input type='text' placeholder='address' name='address' value={createForm.address} onChange={handleChange}/>
    <input type='text' placeholder='provide date' name='provideDate' value={createForm.provideDate} onChange={handleChange} />
    <input type='number' placeholder='due month' name='dueMonth' value={createForm.dueMonth} onChange={handleChange}/>
    <input type='number' placeholder='amount' name='amount' value={createForm.amount} onChange={handleChange}/>
    <input type='number' placeholder='interest' name='interest' value={createForm.interest} onChange={handleChange} />
    <p>{error}</p>
    <div className='buttonContainer'>
        <button onClick={handleSave}>save</button>
        <button >reset</button>
    </div>
    
    </div>
    </div>)
}
export default Create