import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

// import { createStore }  from 'redux'
// import todoApp from './Diff/reducers/index'

// const store = createStore(todoApp);


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);









// const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//
// ReactDOM.render(
//     <Provider store={store}>
//         <MainComp/>
//     </Provider>
//     ,document.getElementById('root'));


// import React from 'react'
// import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
// // import App from './Redux/App'
// // import {createStore,} from 'redux'
// // import store  from './Redux/store';
// import MainApp from './comp/ReduxLearning/MainComp'
//
// const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//
// ReactDOM.render(
//     <Provider store={store}>
//         <MainComp/>
//     </Provider>
//     ,document.getElementById('root'));


// ReactDOM.render(( //ToDoList
//     <Provider store={store}>
//         <App />
//     </Provider>
// ), document.getElementById('root'));


// ReactDOM.render(
//     <Provider store={store}>
//         <App/>
//     </Provider>,
//     document.getElementById('root')
// );


// import MainApp from './newLearning/MainApp'
//
//
// ReactDOM.render(
//     <MainApp/>,
//     document.getElementById('root')
// );


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import { Provider} from 'react-redux';
// import {createStore,applyMiddleware} from 'redux';
// import MainComp from './comp/ReduxLearning/MainComp'
// // import index from './comp/ReduxLearning/TrackList/reducers/index'
// // import {composeWithDevTools} from 'redux-devtools-extension'
// // import thunk from 'redux-thunk'
// // import {Router,Route,hashHistory} from 'react-redux'
// // import {syncHistoryWithStore} from 'react-router-redux'
// import rootReducer from './comp/ReduxLearning/store/reducers/reducers'
//
//
// const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//
// ReactDOM.render(
//     <Provider store={store}>
//         <MainComp/>
//     </Provider>
//     ,document.getElementById('root'));


// const store = createStore(index,composeWithDevTools(applyMiddleware(thunk)));
// const history =syncHistoryWithStore(hashHistory,store);
//
// ReactDOM.render(
//     <Provider store={store}>
//         <Router history={history}>
//             <Route path='/' component={App}/>
//             <Route path='/about' component={About}/>
//         </Router>
//     </Provider>,
//     document.getElementById('root')
// );


// import WebPage from './comp/ReduxLearning/Cars/WebPage';
// import {rootReducer} from './comp/ReduxLearning/store/reducers/reducers'
// import Validation from './comp/ReduxLearning/Validation/Validation';
// import Counter from './comp/ReduxLearning/Counter/Counter'
// import allReducers from './comp/ReduxLearning/Cars/reducers/index';
// const store = createStore(allReducers); //Cars Dydar


// ReactDOM.render(<Provider store={store}>
//         <WebPage/>
//     </Provider>,
//     document.getElementById('root'));


// const store = createStore(rootReducer); //User name and Surname
//
// ReactDOM.render(
//     <Provider store={store}>
//         <MainComp/>
//     </Provider>
//     ,document.getElementById('root'));
//


// ReactDOM.render(( //ToDoList
//     <Provider store={store}>
//         <App />
//     </Provider>
// ), document.getElementById('root'));


// let Greeting = (props)=>{
//   const isLoggedIn = props.isLoggedIn;
//
//   if(isLoggedIn)
//       return <UserGreeting/>;
//   else
//       return<GuestGreeting/>
// };
//
// let UserGreeting = (props)=>{
//     return <h1>Welcome Back!</h1>
// };
//
// let GuestGreeting = (props)=>{
//     return(<h2>Please Sign up</h2>)
// };
//
// function LoginButton(props) {
//     return (
//         <button onClick={props.onClick}>
//             Login
//         </button>
//     )
// }
//
// function LogoutButton(props) {
//     return (
//         <button onClick={props.onClick}>
//             Logout
//         </button>
//     )
// }
//
// class LoginControl extends React.Component {
//     constructor(props) {
//         super(props)
//         this.handleLoginClick = this.handleLoginClick.bind(this)
//         this.handleLogoutClick = this.handleLogoutClick.bind(this)
//         this.state = {isLoggedIn: false}
//     }
//
//     handleLoginClick() {
//         this.setState({isLoggedIn: true})
//     }
//
//     handleLogoutClick() {
//         this.setState({isLoggedIn: false})
//     }
//
//     render() {
//         const isLoggedIn = this.state.isLoggedIn;
//         let button;
//
//         if (isLoggedIn) {
//             button = <LogoutButton onClick={this.handleLogoutClick} />
//         } else {
//             button = <LoginButton onClick={this.handleLoginClick} />
//         }
//
//         return (
//             <div>
//                 <Greeting isLoggedIn={isLoggedIn} />
//                 {button}
//             </div>
//         )
//     }
// }
//
// ReactDOM.render(
//     <LoginControl />,
//     document.getElementById('root')
// )