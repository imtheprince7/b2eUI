import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Nav from './component/shared/Nav'
import '../src/component/shared/App.css'

class Welcome extends Component {
  render() {
    return (
        <>
        <Nav />
        <div className = "landing">
        <div className="light-overlay landing-inner text-dark">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1 className="display-3 mb-4">Personal Expense Management</h1>
                        <p className="lead"> Create your account to manage your daily expenses with ease</p>
                        <hr />
                        <Link className="btn btn-lg btn-primary mr-2 customSpace" to="/notfound">Sign Up </Link>&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link className="btn btn-lg btn-secondary mr-2 customSpace" to="/notfound"> Login </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
  }
}

export default Welcome