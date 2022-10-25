import React from 'react'
import CheckButton from './CheckButton'
import styles from '../../styles/SearchBox.module.scss'

function SearchBox() {
  return (
    <div className={styles.searchBoxWrapper}>
        <CheckButton/>
        <input type="text" placeholder='input your c'/>
    </div>
  )
}

export default SearchBox