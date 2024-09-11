import { connect } from 'react-redux';
import UserItem from '../userItem';
import styles from './styles.module.scss'
function UserList({ users, filter }) {
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );
  if (filteredUsers.length === 0) {
    return <p> user isn't in List</p>
  }
  return (
    <ul className={styles.listContainer}>
      {filteredUsers.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
}
const mapStateToProps = state => ({
  users: state.users,
  filter: state.filter,
});

export default connect(mapStateToProps)(UserList);
