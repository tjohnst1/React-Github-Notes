var React = require('react');

var UserProfile = React.createClass({

  render: function(){
    return (
      <div>
        UserProfile
        Username: {this.props.username}
        Name: {this.props.bio.name}
      </div>
    )
  }

});

module.exports = UserProfile;
