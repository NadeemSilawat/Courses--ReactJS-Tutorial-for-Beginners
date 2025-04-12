import React from "react";

// Without JSX

// const Hello = () => {
//     return (
//         <div>
//             <h1>Hello JSX</h1>
//         </div>
//     );
// }


// With JSX

const Hello = () => {
    return React.createElement('div',{id:'hy',className:'dummyClass'},React.createElement('h1',null,'Hello JSX'));
}

export default Hello;