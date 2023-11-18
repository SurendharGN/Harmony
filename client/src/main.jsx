// Importing packages
import React from 'react'
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

// Importing components
import App from './App.jsx';
import { Homepage } from './pages(routes)/homepage.jsx';
import { Error } from './pages(routes)/404-error.jsx';
import { Login } from './pages(routes)/login.jsx';
import { Product } from './pages(routes)/product.jsx';

import { Auth } from './components/auth.jsx';

// Importing CSS
import './index.css';

const router = createBrowserRouter([{
  path:"/",
  element: <App/>,
  errorElement: <Error/>
},
  {path:"/createAccount",
  element: <Auth/>
},
  {path:"/homepage",
  element: <Homepage/>

},
  {path:"/login",
  element: <Login/>

},
  {path:"/shop/:product",
  element: <Product/>

},
  {path:"/",
  element: <App/>

},
  {path:"/",
  element: <App/>

}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
