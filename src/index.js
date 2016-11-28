//Component Three
var Course=React.createClass({
  render: function() {
    return (
    <div>
    <h2>{this.props.title}</h2>
    <ul>
      {this.props.foods.map(function(item){
        return ( <li>{item}</li> )
      })}
    </ul>
    </div>
    )
  }
});

//Component Two
var Menu = React.createClass({
  render: function() {
    return (
    <div>
      <Course foods={this.props.courses[0]}
        title="Appetizers"/>
      <Course foods={this.props.courses[1]}
        title="Entres"/>
      <Course foods={this.props.courses[2]}
      title="Desserts"/>
    </div>
    )
  }
});

//Component One
var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Welcome to {this.props.name}</h1>
        <Menu courses={this.props.courses} />
      </div>
    )
  }
});

//Bootstrapping
ReactDOM.render(<App name="Bob's Restaurant"
courses={[['soup','bread','sugar'],['pizza','pasta', 'chicken'],
['ice cream', 'pie', 'cake']]} />, document.getElementById('root'));
