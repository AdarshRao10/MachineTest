import React from 'react';
import axios from 'axios';
import {Card,Button,Form,Col} from "react-bootstrap";


class Task extends React.Component{
    constructor(){
        super();
        this.state ={
          IncomingData:[],
          newTask:""
        }
    }
    async componentDidMount(){
     let ApiData = await axios.get('https://jsonplaceholder.typicode.com/todos');
     console.log(ApiData);
     this.setState({IncomingData:ApiData.data});
     console.log(this.state);
    }

   handleItem=(value)=>{
       console.log(value);
   }

   inputTask=(e)=>{
       this.setState({newTask:e.target.value});
   }

   AddTask=()=>{
       let item = {
           id: this.state.IncomingData.length + 1,
           title: this.state.newTask
       };
       console.log(item);
       this.state.IncomingData.push(item);
       console.log(this.state.IncomingData);
       this.setState({newTask:""});
   }

    deleteItem(data){
       console.log(data);
       for(let i=0;i<this.state.IncomingData.length;i++)
     {
        if(this.state.IncomingData[i].id===data)
        {
            console.log(this.state.IncomingData[i]);
            this.state.IncomingData.splice(i,1);
            let RemainingData=this.state.IncomingData;
            this.setState({IncomingData:RemainingData});

        }
     }
       
   }

    render(){
        return(
            <div style={{marginTop:20,marginLeft:50,marginRight:50}}>
             <Form>
                 <Form.Row>
                    <Col>
                     <Form.Control placeholder="Add Task" value={this.state.newTask} onChange={this.inputTask}/>
                    </Col>
                     <Col>
                     <Button variant="primary" style={{background:"green"}} onClick={this.AddTask} >Add Task</Button>  
                     </Col>
            </Form.Row>
            </Form>
 
            <h3>Total items {this.state.IncomingData.length}</h3>
            <div>
                {
                    this.state.IncomingData.map((data)=>(
                        <Card key={data.id} style={{marginTop:10}}>
                  <Card.Body>
                   <Card.Text>
                   {data.title}
                    </Card.Text>
                  <Button variant="primary" style={{background:"#CD5C5C"}} onClick={()=>{this.deleteItem(data.id)}}>Delete Task</Button>
                  </Card.Body>
                      </Card>
                    ))
                }
              
            </div>
 
            </div>
           
        )
    }
}
export default Task;