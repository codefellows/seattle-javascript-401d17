import React from 'react';
import ExpenseForm from '../expense-form';

class ExpenseList extends React.Component {
  render() {
    return (
      <section className='expense-list'>
        <ul>
          {this.props.expenses.map((item, i) =>
            <li key={i}>
              <button onClick={() => this.props.expenseRemove(item)}>X</button>

              <div>
                <p>title: {item.title}</p>
                <p>price: {item.price}</p>
              </div>

              <ExpenseForm
                expense={item}
                submitTitle='update expense'
                handleSubmit={(expense) => {
                  expense.id = item.id;
                  this.props.expenseUpdate(expense);
                }}
              />
            </li>
          )}
        </ul>
      </section>
    )
  }
}

export default ExpenseList;
              
