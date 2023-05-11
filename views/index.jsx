const React = require('react');

    class index extends React.Component {
      render() {
          const { foods } = this.props;
          return (
            <div>
            <h1>Foods Index Page</h1>
            <ul>
            {foods.map((food, i) => {
            return (
            <li>
            The{' '}
            <a href={`/foods/${i}`}>
             {food.name}
            </a>{' '}
            is from {food.origin}. <br></br>
            It is ready to eat<br />
            </li>
            );
            })}
            </ul>
            </div>
          );
      }
    }
    module.exports = index;