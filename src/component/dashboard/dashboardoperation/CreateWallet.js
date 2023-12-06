import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { createWallet } from '../../../actions/ProjectActions';
import Nav from '../../shared/Nav';
import '../../shared/App.css';

const CreateWallet = ({ createWallet, errors }) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    accountName: '',
    accountNumber: '',
    description: '',
    priority: '',
    errors: null // Initialize errors as null
  });

  useEffect(() => {
    // This will be triggered whenever errors prop changes
    if (errors) {
      setState((prevState) => ({
        ...prevState,
        errors: errors
      }));
    }
  }, [errors]);

  const changeHandler = (event, fieldName) => {
    setState({
      ...state,
      [fieldName]: event.target.value
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const newWallet = {
      accountName: state.accountName,
      accountNumber: state.accountNumber,
      description: state.description,
      priority: state.priority
    };

    // Call the action creator
    await createWallet(newWallet, navigate);
  };

  return (
    <>
      <Nav />
      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <div className="w-75 p-3" style={{ backgroundColor: "#eee" }}>
                <h5 className="display-4 text-center">Create / Edit Wallet</h5>
                <hr />

                <form onSubmit={(event) => submitHandler(event)}>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Account Name</label>
                    <input type="text" onChange={(event) => changeHandler(event, "accountName")}
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
                    value="Create | Update"
                  />
                </form>
                {/* Display errors if present */}
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
  errors: state.errors
});

export default connect(mapStateToProps, { createWallet })(CreateWallet);
