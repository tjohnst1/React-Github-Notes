var React = require('react');

var UserProfile = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    bio: React.PropTypes.object.isRequired
  },
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
