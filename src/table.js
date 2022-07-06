import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import App from './App';
import './index.css'

const Table = ({expenses}) => {
    return(
        <div>
                <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="btn spacing"
                    table="table-to-xls"
                    filename="Expenses"
                    sheet="Sheet"
                    buttonText="Convert to Excel Sheet"/>
                <table className='should' id="table-to-xls">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                    {expenses.map((item)=>{
                        return (
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>{item.amount}</td>
                                <td>{item.year}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
 
            </div>
    )
} 
export default Table;