import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './TaskList';

class App extends Component {
    constructor(){
        super()
        this.state = {
            todoList: 'item2',
            task: ''
        }
    }
    render(){
        return (
            <div className="App">
                <h1>To-do List</h1>
                <form onSubmit={(e) => this.addTodo(e)}>
                    <input
                        type='text'
                        className='input'
                        placeholder='Enter Todo Item'
                        value={this.state.task}
                        onChange={e => this.setState({task: e.target.value})}
                    />
                    <button type='submit'> Add Todo</button>
                </form>
                {/* <TaskList title={'Pending Todo'} buttonText={'Done'} tasks={this.state.todoList} buttonFunction={this.removeTodo()} />
                <TaskList title={'Completed'} buttonText={"Delete"} tasks={'done'} buttonFunction={this.removeTodo()} /> */}
            </div>
        );
    }
    addTodo(e){
        //this.setState({ todoList: 'item1'});
        e.preventDefault();
        console.log(this.state.task);
        this.setState({task: ''});
        console.log(this.state.task);
    }
    removeTodo(){
        if(this.state.todoList != null){
            this.setState({ todoList: null})
        }
    }
}

export default App;