import React from 'react'

const App = () => {
   localStorage.clear()
  localStorage.setItem('user', 'salman')

  const user = localStorage.getItem('user')
  console.log(user);
  
 
  return (
    <div>App</div>
  )
}

export default App