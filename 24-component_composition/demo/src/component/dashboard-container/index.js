import React from 'react';
import uuid from 'uuid/v1';

import Modal from '../modal';
import Navbar from '../navbar';
import ExpenseList from '../expense-list';
import ExpenseForm from '../expense-form';

let renderIf = (test, component) => test ? component : undefined;

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showErrors: true
    }

    this.expenseCreate = this.expenseCreate.bind(this);
    this.expenseRemove = this.expenseRemove.bind(this);
    this.expenseUpdate = this.expenseUpdate.bind(this);
  }

  expenseCreate(expense) {
    expense.id = uuid();
    let {app} = this.props;
    app.setState(prevState => ({
      expenses: prevState.expenses.concat([expense])
    }));
  }

  expenseRemove(expense) {
    let {app} = this.props;
    app.setState(prevState => ({
      expenses: prevState.expenses.filter((item) => {
        return item.id !== expense.id;
      })
    }));
  }

  expenseUpdate(expense) {
    let {app} = this.props;
    app.setState(prevState => ({
      expenses: prevState.expenses.map((item) => {
        return item.id === expense.id ? expense : item;
      })
    }));
  }

  render() {
    let {app} = this.props;

    let totalSpent = app.state.expenses.reduce((p, c) => {
      return p + c.price;
    }, 0);

    let remainingBudget = app.state.total - totalSpent;

    console.log('__STATE__', app.state);

    return (
      <section className='dashboard'>
        <Navbar />

        <div>
          <p>total budget: {app.state.total}</p>
          <p>total spent: {totalSpent}</p>
          <p>remaining budget: {remainingBudget}</p>
        </div>

        <ExpenseForm
          handleSubmit={this.expenseCreate}
          submitTitle='add expense' />

        <ExpenseList
          expenseRemove={this.expenseRemove}
          expenseUpdate={this.expenseUpdate}
          expenses={app.state.expenses} />

        {renderIf(remainingBudget < 0 && this.state.showErrors,
          <Modal close={() => this.setState({ showErrors: false })}>
            <h1>sorry, you have used all of your available funds</h1>
            <p>current balance: {remainingBudget}</p>
          </Modal>
        )}
      </section>
    )
  }
}

export default DashboardContainer;
