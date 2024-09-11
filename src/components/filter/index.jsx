import { connect } from "react-redux"
import { useEffect, useRef } from "react"
import styles from './styles.module.scss'
function Filter({ setFilter }) {
  const inputRef = useRef(null)
  useEffect(() => {
    inputRef.current.focus()
  },[])
    function onCange(e){
      setFilter(e.target.value)
      
   }
    return <input className={styles.inputContaier} type="text" placeholder="user filter" onChange={onCange} ref={inputRef}></input>
}

const mapDispatchToProps = dispatch => ({
    setFilter : filter => dispatch({
  type: 'SET_FILTER',
  payload: filter,
})
})
export default connect(null,mapDispatchToProps)(Filter)