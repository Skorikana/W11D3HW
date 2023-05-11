const React = require('react');

    class indexcountry extends React.Component {
      render() {
          const { countries } = this.props;
          return (
            <div>
            <h1>Countries n Capitals display Page</h1>
            <ul>
            {countries.map((country, i) => {
            return (
            <li>
            {' '}
            
             {country.name}
            {' '} 
            has capital as {country.capital}. <br></br>
            Its in continent:{country.continent}<br />
            </li>
            );
            })}
            </ul>
            </div>
          );
      }
    }
    module.exports = indexcountry;