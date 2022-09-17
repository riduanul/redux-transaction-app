import React from 'react'
import { useSelector } from 'react-redux'
import thousandSaperator from '../utils/thousandSaperator'
const Balance = () => {
  const {transactions} = useSelector(state=> state.transaction)

  const calculatedIncome = (transactions) => {
    let income = 0;
    transactions.forEach(transaction => {
        const {type, amount} = transaction;
        if(type === 'income'){
          income += amount;
        }else {
          income -= amount
        }
    });
    return income;
  }

  return (
                <div className="top_card">
                        <p>Your Current Balance</p>
                        <h3>
                            <span>৳</span> {transactions?.length > 0 ? (<span>{thousandSaperator(calculatedIncome(transactions))}</span>) : (0)}
                        </h3>
                    </div>
  )
}

export default Balance