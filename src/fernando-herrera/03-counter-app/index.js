import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';
// import App from './App';
import './index.css';

const divRoot = document.querySelector('#root');

// ReactDOM.render( <App welcome="Hello World!" />, divRoot );
// ReactDOM.render( <CounterApp value={ 10 } />, divRoot );
ReactDOM.render( <CounterApp />, divRoot );
