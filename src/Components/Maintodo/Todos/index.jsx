import React,{Component} from 'react';
import styles from "./style.module.css";

export class Todos extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const todo=this.props.todoData
        
        return (
            <div className={styles.Todos}>
                <h1>
                    {todo.name}
                    
                </h1>
            </div>
           
            
        )
    }
}