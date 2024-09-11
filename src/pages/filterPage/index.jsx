import Filter from '../../components/filter/index';
import UserList from '../../components/userList/index';
import styles from './styles.module.scss'
function FilterPage() {
    return (
      <div className={styles.centerContainer}>
        <div className={styles.filterPageContainer}>
          <h1>User List</h1>
          <Filter />
          <UserList />
        </div>
      </div>
    );
}
export default FilterPage;
