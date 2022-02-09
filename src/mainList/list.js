import { React, useState } from 'react'
import data from "./ListData.json"

function List(props) {
    const filteredData = data.filter((el) => {
        if (props.input === '') {
            return el;
        } else {
            return el.name.toLowerCase().includes(props.input)
        }
    })
    return (
        // <ul>
        //     {filteredData.map((item) => (
        //         <li key={item.id}>{item.name}</li>
        //     ))}
        // </ul>
        
        <div className='container'>{
            filteredData.map((item) => (
              <div key={item.id}>
                <div className='container bg-light' style={{borderRadius: '7px'}}>
                <div className='row'>
                <div style={{fontWeight:'bold', paddingTop:'20px'}}>{item.name}</div>
                </div>
                </div>
                <div style={{backgroundColor:'#e1eded', height:'20px'}}></div>
              </div>
            ))
          }
        </div>
       
    )
}

export default List