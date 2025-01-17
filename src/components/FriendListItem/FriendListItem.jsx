import PropTypes from "prop-types";

const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  friend: PropTypes.object,
};
