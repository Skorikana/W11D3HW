const React = require("react")

class Show extends React.Component{
     render(){
        const flowers =this.props.flowers;
        return(
            <div>
           <h1> Flowers display page</h1>
          <h2>Here goes our various flowers:</h2><br/>{flowers}.
         </div>
        );
       }
    }
module.exports = Show;