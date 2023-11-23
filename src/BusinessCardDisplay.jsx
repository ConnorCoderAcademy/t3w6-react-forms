import React from "react";

export default function BusinessCardDisplay(props){
    return(
        <div>
            <h1>{props.name}</h1>
            <h3>{props.email}</h3>
        </div>
    )
}

// function BusinessCardDisplay({name, email}) {
//     return (
//         <div>
//             <h1>{name}</h1>
//             <h3>{email}</h3>
//         </div>
//     )
// }