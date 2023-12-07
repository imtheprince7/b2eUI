import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Nav from '../shared/Nav';
import { getWallets } from '../../actions/ProjectActions';

const Transaction = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const walletDetails = useSelector((state) => state.walletDetails);
  const [balance, setBalance] = useState(0);
  const [accountName, setAccountName] = useState('');
  

  useEffect(() => {
    if (userId) {
      dispatch(getWallets(userId));
    }
  }, [userId, dispatch]);

  useEffect(() => {
    if (walletDetails) {
      setBalance(walletDetails.currentAmount || 0);
      setAccountName(walletDetails.accountName || '');
    }
  }, [walletDetails]);

  return (
    <>
      <Nav />
      <div>
        <Link to="/dashboard" className="btn btn-default btn-lg mb-3">
          Back
        </Link>
        <Link to={`/newtransaction/${userId}`} className="btn btn-info btn-lg mb-3">
          <i className="fas fa-plus-circle"> Record new Transaction</i>
        </Link>
        <br />
        <div className="card text-center">
          <div className="card-header bg-success text-white">
            <h4>{accountName}</h4>
            <h1>Rs. {balance}</h1>
          </div>
        </div>
        <hr />

        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Description</th>
              <th scope="col">Amount</th>
              <th></th>
            </tr>
          </thead>
          {/* <tbody>
            <tr className="table-danger">
              <td>2020-04-15</td>
              <td>PTCL Bill</td>
              <td className="text-danger">-3000</td>
              <td>
                <Link className="text-info" to="">
                  <i className="fas fa-edit fa-2x"></i>
                </Link>
                <span className="text-danger">
                  <i className="fas fa-trash fa-2x"></i>
                </span>
              </td>
            </tr>
            <tr className="table-success">
              <td>2020-04-01</td>
              <td>Income</td>
              <td className="text-success">+30000</td>
              <td>
                <a className="text-info" href="">
                  <i className="fas fa-edit fa-2x"></i>
                </a>
                <span className="text-danger">
                  <i className="fas fa-trash fa-2x"></i>
                </span>
              </td>
            </tr>
          </tbody> */}
        </table>
      </div>
    </>
  );
};

export default Transaction;
