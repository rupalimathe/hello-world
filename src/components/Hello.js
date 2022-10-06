import React from "react";

//**With JSX**/
// const  Hello = () => {
//     return (
//     <div className='dummyClass>
//         <h1>Hello Rupali</h1>
//         </div>
//         )
// }

//**Without Using JSX**//

const Hello =() =>{
   return React.createElement(
    'div',
     {id: "hello", className: "dummyClass"},
      React.createElement('h1', null, 'Hello Rupali' )) ;
}
export default Hello