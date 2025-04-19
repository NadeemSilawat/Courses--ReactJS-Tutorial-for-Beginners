import React from "react";

// function Greet(){
//     return <h1>Hello World</h1>
// }

// const Greet = () => <h1>Hello World</h1>


// Using props

    // step 1
// const Greet = ({name,heroName}) => {
//     // console.log(props);
    
//     return (
//         <div>
//             <h1>Hello {name} a.k.a {heroName}</h1>
//             {/* {children} */}
//         </div>
//     );
// }

    // step 1

const Greet = (props) => {
    const {name, heroName, children} = props;
    // console.log(props);
    
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
            {children}
        </div>
    );
}
 
 
export default Greet;