import React from 'react'

const App = () => {
   localStorage.clear()
  localStorage.setItem('user', 'salman')
 
  return (
    <div>App</div>
  )
}

export default App