import Expenses from './components/Expenses/Expenses';

function App() {
  const expenses = [
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

  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
