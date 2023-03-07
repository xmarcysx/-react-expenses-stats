import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Car Insurance',
    amount: 286.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e2',
    title: 'Toilet paper',
    amount: 10.67,
    date: new Date(2021, 2, 1),
  },
  {
    id: 'e3',
    title: 'Mc donald',
    amount: 12.22,
    date: new Date(2021, 2, 30),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
