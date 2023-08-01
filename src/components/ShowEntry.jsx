import React from 'react'


// receiving entry as a prop 
const ShowEntry = ({ entry }) => {  
  return entry ? ( 
  <>
    <h5>{entry.content}</h5>
    <p>Posted in {entry.category}</p>
    </>
  ) : (
    <h4>Entry not found!</h4>
  )
}

// using a ternary to display a message if the array of entries is empty, prevents an error when rendering 

export default ShowEntry

