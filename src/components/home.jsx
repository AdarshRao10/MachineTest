import React from 'react';
import Select from 'react-select';


const candys = [
    { value: 1, label: 'Chocolate is a preparation of roasted and ground cacao seeds that is made in the form of a liquid, paste, or in a block, which may also be used as a flavoring ingredient in other foods.' },
    { value: 2, label: 'The garden strawberry is a widely grown hybrid species of the genus Fragaria, collectively known as the strawberries, which are cultivated worldwide for their fruit.' },
    { value: 3, label: 'Vanilla is a spice derived from orchids of the genus Vanilla,primarily obtained from pods of the Mexican species,flat-leaved vanilla.' },
  ];

//  let handleSelectedData=(e)=>{
//     console.log(e);
//     result="select kiya wo";
//   }

  class Home extends React.Component{
      constructor(){
          super();
          this.state ={
            selectedOption: ""
          }
      }

      handleSelectedData=(e)=>{
        console.log(e);
        this.setState({selectedOption:e.label});
      }

      render(){
          return(
            <div style={{marginTop:20,marginLeft:50,marginRight:50}}>   
            <Select options={candys} onChange={this.handleSelectedData}/>
            <h4 style={{marginTop:20}}><i>{this.state.selectedOption}</i></h4>
        </div>
          )
      }
  }
 

// const Home = ()=>{
 
//     return(
//         <div style={{marginTop:20,marginLeft:50,marginRight:50}}>   
//             <Select options={candys} onChange={handleSelectedData}/>
//             <h3>{result}</h3>
//         </div>
       
//     )
// }

export default Home;