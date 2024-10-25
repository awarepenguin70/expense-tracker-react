import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import  { AT } from './components/AT';
import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider >
      <Header/>
      <div className="container"></div>
         <Balance/>
         <IncomeExpenses/>
         <TransactionList/>
         <AT/>
    </GlobalProvider>
  );
}

export default App;
