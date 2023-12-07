import React, { Component } from 'react'
import Nav from '../shared/Nav'
import DashboardItem from './DashboardItem'
import { Link } from 'react-router-dom' 
import { connect } from 'react-redux';
import { getWallets } from '../../actions/ProjectActions';

class Dasdboard extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       totalBalance:0.0
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.wallets){
      let totalBal =0;
     for(let i=0; i<nextProps.wallets.length; i++){
      totalBal =  totalBal+nextProps.wallets[i].currentBalance
     }
      this.setState({totalBalance: totalBal})
    }
  }

  componentDidMount() {
    this.props.getWallets();
  }

   render() {

  // console.log("Wallets from props:", this.props.wallets); 
  const wallets = this.props.wallets || [];
  const walletComponent = wallets.map(wallet => (<DashboardItem key={wallet.id} wallet={wallet} />));

  if(walletComponent.length === 0){

  }
    return (
        <>
    <Nav />
     <div className="projects">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="display-4 text-center">My Wallet</h1>
                    <br />
                    <div className="btn-group">
                        <button type="button" className="btn btn-info btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Create new
                        </button>
                        <div className="dropdown-menu">
                          <Link  className="dropdown-item" to ="/createwallet">Create Wallet</Link>
                          {/* <Link  className="dropdown-item" to ={`/updatewallet/${wallets.id}`}>Update Wallet</Link> */}
                          <Link  className="dropdown-item" to ="/newtransaction">New Transaction</Link>
                        </div>
                      </div>
                    <br />
                    <div className="card text-center">
                        <div className="card-header bg-success text-white">
                            <h4>Current Balance (Total)</h4>
                            <h1>{this.state.totalBalance}</h1>
                        </div>
                    </div>
                    <hr />
                   {/* <DashboardItem /> */}
                    {walletComponent}
                  
                </div>
            </div>
        </div>
    </div>
        </>
    )
  }
}

const mapStateToProps = state => ({
  wallets: state.wallet.wallets,
  loading: state.wallet.loading, // Add loading state
});

export default connect(mapStateToProps ,{getWallets})(Dasdboard)