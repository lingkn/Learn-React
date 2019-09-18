//import React from 'react';
import React, {Component} from "react" //conditional - can only use one type of react
import ReactDOM from 'react-dom';


import logo from './logo.svg';
import './App.css';
import './style.css'; //todo

import Form from "./components/Form"
import TodoItem from './components/todoItem'; //todo
import todoData from './components/todoData'; //todo
import DateTime from './components/dateTime'; //todo
import Conditional from './components/Conditional';
import fetchingDataAPI from "./components/fetchingDataAPI";
import counterButton from "./components/counterButton";

// To Do list App
// function App() {

//   const todoItems = todoData.map(item => <TodoItem key={item.id} item={item}/>)

//   return (
//   // <div className = "todo-list">
//   //     <TodoItem />
//   //     <TodoItem />
//   //     <TodoItem />
//   //     <TodoItem />
//   //     <TodoItem />
//   //   </div>
//     <div className = "todo-list">
//       {todoItems}
//    </div>
//   )
//}

// // To do App - Phase 6 
// class App extends React.Component {
//   constructor(){
//     super()
//     this.state={
//       todos: todoData
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }

//   handleChange(id){
//       console.log("Changed", id)

//       this.setState(prevState => {
//         const updatedTodos = prevState.todos.map(todo => {
//           if(todo.id === id){
//             todo.completed = !todo.completed
//           }
//           return todo
//         })
//         return{
//           todos: updatedTodos
//         }
//       })
//   }
  
//   render(){
//     const todoItems = todoData.map(item => <TodoItem key={item.id} item={item}/>)

//     return(
//       <div className = "todo-list">
//         {todoItems}
//       </div>
//     )
//   }
// }



//To do App Phase 7 

// Conditional Rendering - Log in and log out 
// class App extends React.Component {
//   constructor(){
//     super()
//     this.state = {
//       isLoggedIn: false
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick(id){
//     this.setState(prevState => {
//       return {
//         isLoggedIn : !prevState.isLoggedIn
//       }
//     })
//   }
  
//   render(){
//     let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
  
//     let displayText = this.state.isLoggedIn ? "Logged In ": "Logged Out"

//     return(
//       <div>
//         <button onClick={this.handleClick}>{buttonText}</button>
//         <h1>{displayText}</h1>
//       </div>
//     )
//   }
// }

// Counter 
// class App extends React.Component{
//     constructor(){
//       super()
//       this.state = {
//         count: 0
//       }
//       this.handleClick = this.handleClick.bind(this)
//     }

//     handleClick(){
//       this.setState(prevState => {
//         return {
//           count: prevState.count + 1
//         }
//       })
//     }

//     render() {
//      return(
//        <div>
//          <p>Task 2:38 </p>
//          <h1> {this.state.count}</h1>
//          <button onClick={this.handleClick}>Change!</button>
//          <p> Unsure of ChildComponent count={this.state.count}/></p>

//        </div>
//      )
//     }
//   }

// Conditional Rendering 
// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       isLoading: true
//     }
//   }

//   componentDidMount(){
//     setTimeout(() => {
//       this.setState({
//         isLoading: false
//       })
//     }, 1500)
//   }

//   render() {
//     <Conditional isLoading={this.state.isLoading}/> ..inside the div 
//     return ( 
//       <div>
//         {this.state.isLoading ?
//         <h1>Loading </h1> :
//         <Conditional />}
//       </div>
//     )
//   }
// }


  
//Forms - Container/Componenent Architecture 
function App(){

  return(
    <div>
 
    <DateTime/>        
    <Form/>
    <fetchingDataAPI/>
    <counterButton/>
   {/* {this.state.isLoading ?
        <h1>Loading </h1> :
   <Form/> } */}
   </div>
  )
}
export default App;
