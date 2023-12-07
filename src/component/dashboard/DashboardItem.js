import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { deleteWallets } from '../../actions/ProjectActions'
import { connect } from 'react-redux'

class DashboardItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userId: this.getUserId(),
        };
      }    
      getUserId() {
        return this.props.wallet.id; 
      }

    deleteBtnClick = () =>{
        if(window.confirm(`DO you wanna delete your account:`)){
            this.props.deleteWallets(this.props.wallet.id);
        }
    }
  render() {
    const wallet = this.props.wallet
    // console.log("Coming argu,,",wallet)
    return (
        <> <div className="container">
        <div className="card card-body bg-light mb-3">
            <div className="row" >
                <div className="col-lg-4 col-md-3 col-6">
                    <h4>Account Name:<br /></h4>
                    <h5 style={{color:'blue'}}>{wallet.accountName}</h5>
                    <h4>Account No.<br /></h4>
                    <p style={{color:'green'}}>{wallet.accountNumber}</p>
                    <h4>Description<br /></h4>
                    <p style={{color:'green'}}>{wallet.description}</p>
                </div>
                <div className="col-lg-4 col-md-3 col-6 text-center">
                    <h3>Balance</h3>
                    <h1>{wallet.currentBalance}</h1>
                </div>
                <div className="col-md-4 col-12 d-lg-block">
                    <ul className="list-group">
                        <Link  to = {`/transaction/${wallet.id}`}>
                            <li className="list-group-item board text-success">
                                <i className="fa fa-flag-checkered pr-1"> View Transactions </i>
                            </li>
                        </Link>
                        <Link  to= {`/updatewallet/${wallet.id}`}>
                            <li className="list-group-item update text-info">
                                <i className="fa fa-edit pr-1"> Update Account Info</i>
                            </li>
                        </Link>
                        <Link  to ="/dashboard" onClick={this.deleteBtnClick} >
                            <li className="list-group-item delete text-danger">
                                <i className="fa fa-minus-circle pr-1"> Delete Account</i>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    </div>

        </>
    )
  }
}
const mapStateToProps = (state) => ({
    wallets: state.wallet.wallets,
  });

export default connect(mapStateToProps, {deleteWallets})(DashboardItem)