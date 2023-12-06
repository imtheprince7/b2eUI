import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Welcome from "./Welcome";
import Dasdboard from './component/dashboard/Dashboard';
import CreateWallet from './component/dashboard/dashboardoperation/CreateWallet';
import Notfound from './component/shared/Notfound';
import { Provider } from 'react-redux';
import store from './Store';


function App() {
  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/" Component ={Welcome} />
      <Route path="/dashboard" exact Component ={Dasdboard} />      
      <Route path="/createwallet" exact Component ={CreateWallet} />  
      <Route path="/notfound" exact Component ={Notfound} />  
    </Routes>
    </BrowserRouter>
</Provider>
    </>
  );
}

export default App;
