import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import Chats from'./Chats';
import ChatScreen from './ChatScreen';
import Profile from './Profile';
import HoroDates from './HoroDates';
import {createBrowserRouter,
RouterProvider,} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/> 
    },
    {
      path: "/chat",
      element: <Chats/>
    },
    {
      path: "/chat/:person",
      element: <ChatScreen/>
    },
    {
      path: "/profile",
      element: <Profile/>
    },
    {
      path: "/horoscope",
      element: <HoroDates/>
    }
])

root.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
