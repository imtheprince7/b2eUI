import React, { useState, useEffect } from 'react';
import Nav from '../../shared/Nav';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createTransaction } from '../../../actions/ProjectActions';
import { connect } from 'react-redux';

const AddTransaction = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [state, setState] = useState({
    amount: '',
    description: '',
    transactionType: '1',
    transactionDate: '',
  });

  const changeHandler = (event, fieldName, checkBox) => {
   
    setState((prevState) => ({
      ...prevState,
      [fieldName]: checkBox ? event.target.checked : event.target.value,
    }));
  };

  const { amount, description, transactionType, transactionDate } = state;

  useEffect(() => {
    console.log('User ID:', userId);
  }, [userId, dispatch]);

  const handleSubmit = (event) => {
    console.log(this.state)
    event.preventDefault();

    const newTransaction = {
      amount: amount,
      description: description,
      transactionType: transactionType,
      transactionDate: transactionDate,
    };

    // Dispatch the action
    dispatch(createTransaction(newTransaction, navigate, userId));
  };

  return (
    <>
      <Nav />
      <div className="add-PBI">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to={`/transaction/${userId}`} className="btn btn-light">
                Back to Wallet
              </Link>

              <div className="w-75 p-3" style={{ backgroundColor: '#eee' }}>
                <h4 className="display-4 text-center">Record New Transaction</h4>
                <label htmlFor="exampleInputEmail1">Account Name</label>
                <p className="lead text-center">UBL Account</p>

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Spent Amount</label>
                    <input
                      type="text"
                      min="1"
                      max="7"
                      className="form-control form-control-lg"
                      value={state.amount}
                      onChange={(event) => changeHandler(event, 'amount', false)}
                      placeholder="Spent amount"
                    />
                  </div>{' '}
                  <br />
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Purchase Description</label>
                    <textarea
                      className="form-control form-control-lg"
                      min="3"
                      max="50"
                      value={state.description}
                      onChange={(event) => changeHandler(event, 'description', false)}
                      placeholder="Must be between 5 to 50 characters"
                    ></textarea>
                  </div>{' '}
                  <br />
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Transaction Type : </label>
                    <br />
                    <div className="form-check form-check-inline">
                      <label className="form-check-label" htmlFor="income">
                        Income
                      </label>
                      <input
                        checked
                        className="form-check-input"
                        type="radio"
                        name="type"
                        id="income"
                        value="1"
                        onChange={(event) => changeHandler(event, 'transactionType', false)}
                      />
                    </div>
                    <div className="form-check form-check-inline">
                      <label className="form-check-label" htmlFor="expense">
                        Expense
                      </label>
                      <input
                        className="form-check-input"
                        type="radio"
                        id="expense"
                        name="type"
                        value="2"
                        onChange={(event) => changeHandler(event, 'transactionType', false)}
                      />
                    </div>
                    <div className="form-check form-check-inline">
                      <label className="form-check-label" htmlFor="givingLoan">
                        Giving Loan
                      </label>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="type"
                        id="givingLoan"
                        value="3"
                        onChange={(event) => changeHandler(event, 'transactionType', false)}
                      />
                    </div>
                    <div className="form-check form-check-inline">
                      <label className="form-check-label" htmlFor="takingLoan">
                        Taking Loan
                      </label>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="type"
                        id="takingLoan"
                        value="4"
                        onChange={(event) => changeHandler(event, 'transactionType', false)}
                      />
                    </div>
                  </div>
                  <br />
                  <h6>Transaction Date</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      value={state.transactionDate}
                      onChange={(event) => changeHandler(event, 'transactionDate', false)}
                    />
                  </div>
                  <input type="submit" className="btn btn-primary btn-block mt-4" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(null, {createTransaction})(AddTransaction);
