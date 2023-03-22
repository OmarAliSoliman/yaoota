import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import PostDetails from './routes/PostDetails';
import Posts from './routes/Posts';
import UserPosts from './routes/UserPosts';


const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Posts /> },
      { path: "post-details/:id", element: <PostDetails /> },
      { path: "userposts/:userId", element: <UserPosts /> },
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <RouterProvider router={routes} />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

