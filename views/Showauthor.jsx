const React = require("react")

class Showauthor extends React.Component{
     render(){
        const authors =this.props.authors;
        return(
            <div>
           <h1> Best Authors</h1>
          <h2><ul><li>{authors},</li></ul></h2><br/>.
         </div>
        );
       }
    }
module.exports = Showauthor;