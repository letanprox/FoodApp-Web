import './App.css';
import './CustomPage/Menu.css'
import './CustomPage/OrdersPage.css'
import './CustomPage/AccountPage.css'
import './CustomPage/StaticPage.css'


import Login from './Page/Login';
import Routerx from './Routerx';
import Signup from './Page/Signup';



function App() {

  if(window.location.pathname.includes('/login')){
    return (
      <Login/>
    );

  }else if(window.location.pathname.includes('/signup')){
    return (
      <Signup/>
    );

  }else{
    return (
      <Routerx></Routerx>
    );
  }
  





}

export default App;
