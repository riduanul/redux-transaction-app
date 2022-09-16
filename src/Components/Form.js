import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTransaction } from '../Features/Transaction/TransactionSlice'

const Form = () => {
    const dispatch = useDispatch() 
    const {isLoading, isError, error} = useSelector(state => state.transaction)
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [amount, setAmount] = useState('')

    const handleCreate = (e) => {
        e.preventDefault();

        dispatch(createTransaction({
            name,
            type,
            amount
        }))
        setName('')
        setAmount('')
    }

  return (
    <>
    <div className="form">
    <h3>Add new transaction</h3>
<form onSubmit={handleCreate}>
    <div className="form-group">
        <label >Name</label>
        <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={name}
            required
            onChange={(e)=> setName(e.target.value)}

        />
    </div>

    <div className="form-group radio">
        <label >Type</label>
        <div className="radio_group">
            <input
                type="radio"
                value="income"
                required
                name="type"
                checked= {type === 'income'}
                onChange={e => setType('income')}
            />
            <label >Income</label>
        </div>
        <div className="radio_group">
            <input
                type="radio"
                value="expense"
                name="type"
                placeholder="Expense"
                checked= {type === 'expense'}
                onChange={e => setType('expense')}
            />
            <label >Expense</label>
        </div>
    </div>

    <div className="form-group">
        <label >Amount</label>
        <input
            type="number"
            required
            placeholder="Enter Amount"
            name="amount"
            value={amount}
                onChange={(e)=> setAmount(e.target.value)}
        />
    </div>

    <button type='submit' className="btn">Add Transaction</button>
    </form>
    <button className="btn cancel_edit">Cancel Edit</button>
    

</div> 

</>
  )
}

export default Form