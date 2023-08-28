import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import './App.css';
import Login from './pages/Login';
import Sidebar from "./components/sidebar";
import Tasks from "./pages/tasks";
import Location from "./pages/Location";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Sidebar />,
  },
  {
    path: "/tasks",
    element: <Tasks />,
  },
  {
    path: "/location",
    element: <Location />,
  },
]);
function App() {
  return (
    <div className="App">

      <RouterProvider router={router} />


    </div>
  );
}

export default App;
