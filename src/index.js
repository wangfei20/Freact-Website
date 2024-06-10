import React,{render} from 'freact'
import App from "./app.jsx"
import '@/styles/globals.css';

const hotRrender = async (Component) => {

    render(
      <Component/>,
      document.getElementById('root')
    );
  };

hotRrender(App)
