import React from 'react'
import DeleteIcon from '../images/delete.svg';
import EditIcon from '../images/edit.svg';
const Transection = () => {
  return (
    <div className="conatiner_of_list_of_transactions">
                        <ul>
                            <li className="transaction income">
                                <p>Earned this month</p>
                                <div className="right">
                                    <p>৳ 100</p>
                                    <button className="link">
                                        <img
                                            className="icon" alt='edit'
                                            src={EditIcon}
                                        />
                                    </button>
                                    <button className="link">
                                        <img
                                            className="icon" alt='delete'

                                            src={DeleteIcon}
                                        />
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
  )
}

export default Transection