/* globals React */
'use strict';

var Navigation = React.createClass({
  render: function () {
    return (
      <nav>
        <NavLink name='Home' url='/' />
        <NavLink name='Cheeses' url='/cheeses' />
        <NavLink name='Users' url='/users' />
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