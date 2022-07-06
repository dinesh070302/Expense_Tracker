const  DropDownMenu = (expenses) => {
    return ( 
        <ul defaultValue={'Year'} >
            <li>Year
              <ul>{expenses.map((expense) =>
                    <li>{expense.year.substring(0,4)}</li>
            )}</ul>
            </li>
        </ul>
     );
}

export default DropDownMenu;