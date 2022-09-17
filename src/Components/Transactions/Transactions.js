import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Transaction from './Transaction'
import {fetchTransactions} from '../../Features/Transaction/TransactionSlice'

const Transactions = () => {
  const {transactions, isLoading, isError} = useSelector(state => state.transaction);
  const dispatch = useDispatch()
  
  //get initial data from state 
  useEffect(()=>{
    dispatch(fetchTransactions())
  },[dispatch])
  
  //decide what to render
  let content;
  if(isLoading) content =  <p>Loading...</p>
  if(!isLoading && isError) content = <p> There was an error</p>;
  if(!isLoading && !isError && transactions?.length > 0) {
  content = transactions.map(transaction => (
    
  <Transaction key={transaction.id} transaction={transaction}/>

 
))

  }
  if(!isLoading && !isError & transactions?.length === 0) {
    content = <p> No transactions found!</p>
  }

  return (
    <>
    <p className="second_heading">Your Transactions:</p>
    <div className="conatiner_of_list_of_transactions">
   {content}
    </div>
    </>
  )
}

export default Transactions