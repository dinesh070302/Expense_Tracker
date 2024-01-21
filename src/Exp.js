import './index.css';

const Exp = ({expense,onDelete}) =>  {

    return ( 
        <div className='cell'>
            <span className='span1'>{expense.title}</span>
            <span className='span2'>₹{expense.amount}</span>
            <span className='span3'>{expense.year.substring(0,4)}</span>
            <button className='delete' onClick={() => onDelete(expense.id)}>Delete</button>

        </div>
     );
}

export default Exp;


