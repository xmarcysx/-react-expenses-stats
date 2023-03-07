import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
  return (
    <ul className="expenses-list">
      {props.items.length === 0 ? (
        <p className="expenses-list__fallback">No expenses found!</p>
      ) : (
        props.items.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))
      )}
    </ul>
  );
};

export default ExpensesList;
