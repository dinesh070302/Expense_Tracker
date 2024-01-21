import './index.css';
import Explist from './Explist';
import { useEffect, useState } from 'react';
import AddExpense from './AddExpense';

//Structure of the Page
//Two Cards
//1.Has two buttons in which there is Add Expense and other is Show Expenses
//2.All the expenses will be visible and based on the search will be updated.

const App = () => {
  const [expenses, setExpenses] = useState([
    {
        id    :  1,
        title : 'Fees',
        amount : 50000,
        year  : '2021-05-02'
    },
    {
        id    :  2,
        title : 'Outing',
        amount : 2000,
        year  : '2022-07-03'
    },
    {
        id      : 3,
        title : 'Shopping',
        amount : 4000,
        year  : '2023-08-02'
    }
])
const [real,setReal] =useState(expenses);
let [unique, setyearArray] = useState(['2021','2022','2023']);

let [year,setYearArray] = useState([]);

const deleteExpense = (id) =>{
  setExpenses(expenses.filter((expense) => expense.id != id))
}
 const [addExp, toggleAddExp]=useState(false);

 const updateExpArray = (payload) => {
  const expenseArray =[...expenses];
  expenseArray.push(payload);
  setExpenses(expenseArray);  
  // setReal(expenseArray);
  }


 const ddd = (year) => {
   let newArray = [...unique];
   let yearonly = year.substring(0,4);
   newArray.push(yearonly);
   unique = newArray.filter((v, i, a) => a.indexOf(v) === i);

    console.log(unique);
   setyearArray(unique);

  //  var myArray = ['a', 1, 'a', 2, '1'];
    // unique is ['a', 1, 2, '1'] 
 }
//  useEffect(())
//  useEffect(() => ddd)
//  const [thisYear,]

useEffect(()=> normal(),[expenses]);
const[filteredArray,setFilteredArray] = useState(expenses);
const filters = (id) => {
  setFilteredArray(expenses.filter((expense) => expense.year.substring(0,4) === id))
}
const normal = () =>{
  setFilteredArray(expenses);
}

  return (
    <>
    <div className='container'>
      <div className="row">
        <div className='card card-1'>
        <div className="header">
            Expense Tracker
            <button className='btn' onClick={() => toggleAddExp(!addExp)}>
            {addExp ? "Cancel" : "Add New Expense"}</button>
         </div>
        {!addExp && <button  className='btn allexpense' key={'text'} onClick={() => normal()}>View All Expenses</button>}
        {/* {!addExp && <Table  expenses={expenses}/>} */}

            {addExp && <AddExpense   addExp={addExp} toggleAddExp={toggleAddExp} expenses={expenses} updateYearArray ={ddd} yearArray ={unique} addExpense={updateExpArray} setFilteredArray={setFilteredArray} filteredArray={filteredArray} normal={normal}/>}
           
        </div>
        <div className='card card-2' >
        <ul defaultValue={'Year'} >
            <li><div className='yearmenu btn' key={'text'}>Year of Expenses</div>
            
              <ul>{unique.map((expense) =>
                <li className='btn-d' key={expense} onClick={() => filters(expense)}>{expense}</li>
            )}</ul>
            </li>
        </ul>
          {expenses.length>0 ? <Explist unique={unique} filters={filters }expenses = {filteredArray} onDelete={deleteExpense}/> : 'No expenses this year'}
          
          </div>
      </div>
    </div>
    
    
    </>
  );
}

export default App;
//need to make a dropdown using the unique years that are there

//array to store dates