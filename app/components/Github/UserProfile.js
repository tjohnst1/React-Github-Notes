var React = require('react');

var UserProfile = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    bio: React.PropTypes.object.isRequired
  },
  render: function(){
    console.log('Bio: ', this.props.bio);
    return (
      <div>
        UserProfile
        Username: {this.props.username}
      </div>
    )
  }

});

module.exports = UserProfile;
