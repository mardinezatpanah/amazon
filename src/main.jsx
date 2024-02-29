import ReactDOM from 'react-dom/client'
import "slick-carousel/slick/slick.css";
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <App />
  </Provider>
)
