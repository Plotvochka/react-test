import PropTypes from "prop-types";
import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";
// import clsx from "clsx";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map((friend) => {
        return (
          <li key={friend.id} className={css.listItem}>
            <FriendListItem friend={friend} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
