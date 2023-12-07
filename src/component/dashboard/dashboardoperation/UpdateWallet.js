import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Nav from '../../shared/Nav';
import { useNavigate } from 'react-router-dom';
import { getWalletDetails,updateWalletDetails } from '../../../actions/ProjectActions';

const UpdateWallet = ({ createWallet, errors, getWalletDetails, wallet }) => {
    const navigate = useNavigate();
  const [state, setState] = useState({
    accountName: '',
    accountNumber: '',
    description: '',
    priority: '',
    errors: null,
  });

  useEffect(() => {
    if (errors) {
      setState((prevState) => ({
        ...prevState,
        errors: errors,
      }));
    }
  }, [errors]);

  useEffect(() => {
    getWalletDetails(); // You may need to pass an argument to get the specific wallet details
  }, [getWalletDetails]);

  useEffect(() => {
    if (wallet) {
      const { accountName, accountNumber, description, priority } = wallet;
      setState((prevState) => ({
        ...prevState,
        accountName,
        accountNumber,
        description,
        priority,
      }));
    }
  }, [wallet]);

  const changeHandler = (event, fieldName) => {
    setState({
      ...state,
      [fieldName]: event.target.value,
    });
  };

  const submitHandler = async (event) => {
    const updatewallet = {
      id: this.state.id,
      accountName: this.state.accountName,
      accountNumber: this.state.accountNumber,
      description: this.state.description,
      priority: this.state.priority,
    };
    // // Call the action creator
    // await createWallet(newWallet, navigate);
    this.props.updateWalletDetails(this.state.id,updatewallet,navigate)
    event.preventDefault();
  };

  return (
    <>
      <Nav />
      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <div className="w-75 p-3" style={{ backgroundColor: "#eee" }}>
                <h5 className="display-4 text-center">Update Your Wallet</h5>
                <hr />

                <form onSubmit={(event) => submitHandler(event)}>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Account Name</label>
                    <input
                      type="text"
                      onChange={(event) => changeHandler(event, "accountName")}
                      value={state.accountName}
                      className="form-control form-control-lg"
                      placeholder="For whom you're creating the account"
                    />
                    {state.errors && state.errors.accountName && (
                      <p className="text-danger">{state.errors.accountName}</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Account Number</label>
                    <input
                      type="text"
                      onChange={(event) => changeHandler(event, "accountNumber")}
                      value={state.accountNumber}
                      className="form-control form-control-lg"
                      placeholder="Account No"
                    />
                    {state.errors && state.errors.accountNumber && (
                      <p className="text-danger">{state.errors.accountNumber}</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Account Description</label>
                    <textarea
                      onChange={(event) => changeHandler(event, "description")}
                      value={state.description}
                      className="form-control form-control-lg"
                      placeholder="Description"
                    ></textarea>
                    {state.errors && state.errors.description && (
                      <p className="text-danger">{state.errors.description}</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Choose Priority</label>
                    <select
                      className="form-control form-control-lg"
                      onChange={(event) => changeHandler(event, "priority")}
                      value={state.priority}
                    >
                      <option value={0}>Display Priority</option>
                      <option value={1}>High</option>
                      <option value={2}>Medium</option>
                      <option value={3}>Low</option>
                    </select>
                    {state.errors && state.errors.priority && (
                      <p className="text-danger">{state.errors.priority}</p>
                    )}
                  </div>
                  <input
                    type="submit"
                    className="btn btn-primary btn-block mt-4 customSpace"
                    value="Update"
                  />
                </form>
                {state.errors && (
                  <div className="alert alert-danger mt-3">
                    {state.errors}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  wallet: state.wallet.wallet,
});

export default connect(mapStateToProps, { getWalletDetails,updateWalletDetails })(UpdateWallet);