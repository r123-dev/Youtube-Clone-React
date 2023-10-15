import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './Components/body';
import WatchVideo from './Components/WatchVideo';
import MainContainer from './Components/MainContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>,
      children:[
        {
          path:'/',
          element:<MainContainer/>
        },
        {
          path:'/watch',
          element:<WatchVideo/>
        }

      ]
    }
  ]
)
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
