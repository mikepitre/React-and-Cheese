/* globals React */
'use strict';

var Navigation = React.createClass({
  render: function () {
    return (
      <nav>
        <NavLink name='Home' url='/' />
        <NavLink name='All Cheeses' url='/cheeses' />
        <NavLink name='Add a Cheese' url='/cheeses/new' />
        <NavLink name='Sign Up' url='/users/new' />
      </nav>
    );
  }
});

var NavLink = React.createClass({
  render: function () {
    return (<a onClick={this.clicked} className='btn btn-default'>{this.props.name}</a>);
  },

  clicked: function () {
    window.location.href = this.props.url;
  }
});
