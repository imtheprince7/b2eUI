import React, { Component } from 'react'
import axios from 'axios'
import Nav from '../../shared/Nav'

class CreateWallet extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
          accountName:'',
          accountNumber:'',
          description:'',
          priority:''
        }
      }
      changeHandler = (event, fieldName) =>{
        this.setState({
          [fieldName]: event.target.value
        })
      }

      submitHandler = (event)=>{
        const newWallet ={
          accountName:this.state.accountName,
          accountNumber:this.state.accountNumber,
          description:this.state.description,
          priority:this.state.priority
        }
        axios.post('http://localhost:8080/wallet',newWallet).then((res)=>{
                alert("Success...!")
                // this.props.history.push('/dashboard')
        }).catch((err)=>{
            alert("Oops Error...!")
        })
        event.preventDefault()
       

      }

  render() {
    return (
        <>
        <Nav />
            <div className="project">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h5 className="display-4 text-center">Create / Edit Wallet</h5>
                    <hr />
                    <form onSubmit={(event)=>this.submitHandler(event)}>
                        <div className="form-group">
                            <input type="text" onChange={(event) =>this.changeHandler(event,"accountName")} className="form-control form-control-lg " placeholder="Account Name" />
                        </div>
                        <div className="form-group">
                            <input type="text" onChange={(event) =>this.changeHandler(event,"accountNumber")} className="form-control form-control-lg" placeholder="Account No" />
                        </div>
                        <div className="form-group">
                            <textarea  onChange={(event) =>this.changeHandler(event,"description")} className="form-control form-control-lg" placeholder="Description"></textarea>
                        </div>
                        <div className="form-group">
                            <select className="form-control form-control-lg" onChange={(event) =>this.changeHandler(event,"priority")} >
                                <option value={0}>Display Priority</option>
                                <option value={1}>High</option>
                                <option value={2}>Medium</option>
                                <option value={3}>Low</option>
                            </select>
                        </div>
                        <input type="submit" className="btn btn-primary btn-block mt-4" value="Create/Update" />
                    </form>
                </div>
            </div>
        </div>
    </div>
        </>
    )
  }
}

export default CreateWallet