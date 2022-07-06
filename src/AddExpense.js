import { useEffect, useState } from "react";
import { FaDAndD } from "react-icons/fa";





const AddExpense =  ({normal,expenses,addExpense,addExp,toggleAddExp,updateYearArray,yearArray,filteredArray,setFilteredArray}) => {


        const [title,setTitle] = useState('');
        const [amount,setAmount] = useState('');
        const [year,setYear] = useState('');
        

        const onSubmit = (e) => {
            e.preventDefault()
            if(!title ){
                alert('Please add title')
                return
            }
            if(!amount){
                alert('Please enter the Amount')
                return
            }
            if(!year){
                alert('Please enter the Date')
                return
            }
            const id = Math.floor(Math.random()*1000) + 1;
            addExpense({title,amount:Number(amount),year,id});
            
            updateYearArray(year);
          
            toggleAddExp(!addExp);
            
        }

    return ( 
        <div className='options'>
            <label>Expense Title</label>
            <input type='text' placeholder ='Title' 
            className='takein' value={title} onChange={(e) => setTitle(e.target.value)}
            />
            <label>Expense Amount</label>
            <input type='number' placeholder='Amount' 
             className='takein' value={amount} onChange={(e) => setAmount(e.target.value)}
             />
            <label>Expense Date</label>
            <input type='date' placeholder='Year'  
            className='takein' value={year} onChange={(e) => setYear(e.target.value)}
            />

            <button className='addexp' onClick={onSubmit } >Add Expense</button>
            {/* {addExp && <AppendExpense addExp={addExp} toggleAddExp={toggleAddExp}  />} */}
        </div> 

     );
}

export default AddExpense;