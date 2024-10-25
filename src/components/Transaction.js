import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const Transaction = (props) => {
    const {deletetransaction}= useContext(GlobalContext);
    const { transaction } = props; // Destructuring the transaction from props
    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={()=>deletetransaction(transaction.id)} className="delete-btn">x</button>
        </li>
    );
}

export default Transaction;
