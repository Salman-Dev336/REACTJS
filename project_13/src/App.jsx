import React from 'react'

const App = () => {


  const user = {
    name: 'salman',
    age: 22,
    city: 'buner'
  }

  localStorage.setItem('user', JSON.stringify(user))

  const userr = JSON.parse(localStorage.getItem('user'))
  console.log(userr);
  


  //  localStorage.clear()
  // localStorage.setItem('user', 'salman')
  // localStorage.setItem('age', 22)


  // const user = localStorage.getItem('user')
  // const age = localStorage.getItem('age')

  // localStorage.removeItem('age')
  // console.log(user);
  // console.log(age);
  
  
 
  return (
    <div>App</div>
  )
}

export default App