import React from 'react'
import { useDispatch } from 'react-redux';
import { editActive, removeTransaction } from '../../Features/Transaction/TransactionSlice';
import DeleteIcon from '../../images/delete.svg';
import EditIcon from '../../images/edit.svg';
import thousandSaperator from '../../utils/thousandSaperator'

const Transaction = ({transaction}) => {
const {name, amount, type, id} = transaction || {}
const dispatch = useDispatch(transaction)


const handleEdit = ()=> {
    dispatch(editActive(transaction))
}
const handleDelete = ()=> {
    dispatch(removeTransaction(id))
}
      return (
    
                        <ul>
                            <li className={`transaction ${type}`}>
                                <p>{name}</p>
                                <div className="right">
                                    <p>৳ {thousandSaperator(amount)}</p>
                                    <button className="link"  onClick={handleEdit}>
                                        <img
                                            className="icon" alt='edit'
                                            src={EditIcon}
                                           
                                        />
                                        
                                    </button>
                                    <button className="link" onClick={handleDelete}>
                                        <img
                                            className="icon" alt='delete'

                                            src={DeleteIcon}
                                        />
                                    </button>
                                </div>
                            </li>
                        </ul>
                    
  )
}

export default Transaction;