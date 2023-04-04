import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hello from './Hello';
import 'tachyons'
// import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
      <Hello greeting={'Hello React Ninja'} />
      {/* <App /> */}
    </div>
);