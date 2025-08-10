import React from "react";
import ReactDOM from "react-dom/client"

const k = React.createElement("h1",
    {id:"h1"},
    "hola"
)
const number = 1122;

const Heading1 = function () {(           <h1>yo man
     </h1>   )}

const Heading = ()=>  
<>

<Heading1/>
<h1>
    yo girl

</h1>
 <p>wassup {number * 9999999999}</p></>;
const jsx = <h1>this is jsx in single linke without function</h1>

const Tit = function (){return( <> <Heading/> <h1>  yoda</h1> </>    )
}



const j = document.getElementById("root")
const root = ReactDOM.createRoot(j);
root.render(<Tit/>)