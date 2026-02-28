import React from 'react '
const Squares = (props) => {
    return (
        <div  style={{border: "1px solid black",
         width: "100px",
          height: "100px",
           display:"flex",
            justifyContent:"center", 
            alignItems:"center"}}
            className='square'> 
          <h1> {props.value}</h1>
        </div>
         );  
};
export default Squares