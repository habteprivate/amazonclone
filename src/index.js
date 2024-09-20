import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import { DataProvider } from './Components/Data Provider/DataProvider';
import { reducer, initialState } from "./Utility/reducer.js";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider reducer={reducer} initialState={initialState}>
      <App />
    </DataProvider>
  </React.StrictMode>
);


