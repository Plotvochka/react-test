import PropTypes from "prop-types";
import css from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.container}>
      <div className={css.info}>
        <img className={css.img} src={image} alt="User avatar" />
        <p
          className={css.userInfo}
          style={{
            color: "black",
            fontWeight: 600,
          }}
        >
          {name}
        </p>
        <p className={css.userInfo}>@{tag}</p>
        <p className={css.userInfo}>{location}</p>
      </div>
      <ul className={css.list}>
        <li className={css.listItem}>
          <span>Followers</span>
          <span className={css.span}>{followers}</span>
        </li>
        <li className={css.listItem}>
          <span>Views</span>
          <span className={css.span}>{views}</span>
        </li>
        <li className={css.listItem}>
          <span>Likes</span>
          <span className={css.span}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  stats: PropTypes.object.isRequired,
};

export default Profile;
