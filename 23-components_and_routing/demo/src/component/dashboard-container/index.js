import './_dashboard-container.scss';
import React from 'react';
import uuid from 'uuid/v1';

import ExpenseCreateForm from '../expense-create-form';

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.expenseCreate = this.expenseCreate.bind(this);
  }

  expenseCreate(expense) {
    expense.id = uuid();
    this.props.app.setState(state => ({
      expenses: [...state.expenses, expense]
    }));
  }

  render() {
    return (
      <div className='dashboard-container'>
        <ExpenseCreateForm handleExpenseCreate={this.expenseCreate} />
        <ExpenseCreateForm handleExpenseCreate={this.expenseCreate} />
      </div>
    )
  }
}

export default DashboardContainer;
