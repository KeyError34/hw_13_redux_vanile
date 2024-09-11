import styles from './styles.module.scss'
function UserItem({ user }) {
  return <li className={styles.itemContainer}>{user.name}</li>;
};

export default UserItem;
