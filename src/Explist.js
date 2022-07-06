import './index.css';
import { useState } from 'react';
import Exp from './Exp';

const Explist = ({expenses,onDelete,unique,filters}) => {
    let amount = 0;
    // let updatedarray = [...expenses];
    // updatedarray = updatedarray.filter( (payload) =>)
    const calculate = () =>{
        expenses.map((item) => 
                {amount=amount+item.amount}
            )
            return amount;
    }
    return ( 
        
        <div className='expense-list'>
            <div className='card-header'>
            <span className='card-header-1'>Expenses List</span>
            <span className='card-header-2'>Expenses   :   ₹{calculate()}
            </span>
            </div>
            {!(expenses.length) && <div>There are no expenses in this year</div>  }
            {expenses.map((expense) =>
                <Exp key={expense.id} expense={expense} onDelete={onDelete}>
               </Exp>
            )}

            
            



        </div>
     );
}

export default Explist;