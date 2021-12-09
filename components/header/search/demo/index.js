import React, {useState} from 'react'
import HeaderSearch from 'components/header/search/src'

export default () => {
  const handleClick = () => {
    return alert('click: ' + value)
  }
  const [value, setValue] = useState()

  const handleChange = e => {
    setValue(e.target.value)
  }

  return (
    <div style={{backgroundColor: 'grey', display: 'flex'}}>
      <HeaderSearch
        textButton="Submit"
        placeholder="Placeholder here"
        value={value}
        handleClick={handleClick}
        handleChange={handleChange}
      />
    </div>
  )
}
