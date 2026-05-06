import React from 'react'

const App = () => {
   localStorage.clear()
  localStorage.setItem('user', 'salman')
  localStorage.setItem('age', 22)


  const user = localStorage.getItem('user')
  const age = localStorage.getItem('age')

  localStorage.removeItem('age')
  console.log(user);
  console.log(age);
  
  
 
  return (
    <div>App</div>
  )
}

export default App