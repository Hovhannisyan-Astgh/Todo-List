import React, { Component } from 'react';
import styles from "./style.module.css";
import { Todos } from './Todos';

export class Maintodo extends Component {

    state = {
        todo: [
            { name: "Sleep 8 hour", id: Math.random(), copleted:true },
            { name: "Working", id: Math.random(), copleted:true },
            { name: "Go to gym", id: Math.random(), copleted:false },
            { name: "Eating", id: Math.random(), copleted:true},
            { name: "Party at night", id: Math.random(), copleted:false},
        ],
        box:[
            {  copleted:true },
            {  copleted:true },
            {  copleted:false },
            {  copleted:true},
            {  copleted:false},
        ],
    };

    changeinput =(e)=>{
        console.log(e.target.value)
    }

   
    render() {
        const todo = this.state.todo;
        const box =this.state.box
        return (
            <div className={styles.todolist}>
              
                <input onChange={this.changeinput} type="text" value="working"/>
                {
                    todo.map((element)=>{
                        return(
                            <Todos key ={element.id}todoData={element}/>
                        )
                    })
                    
                }
            </div>
        )
    }
}