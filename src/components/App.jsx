import React, { useState } from 'react'
import CategorySelection from './CategorySelection'
import NewEntry from './NewEntry'
import Home from './Home'
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom"
import NavBar from './NavBar'
import ShowEntry from './ShowEntry'

const seedEntries = [
  {category: 'Food', content: 'Pizza rocks'},
  {category: 'Gaming', content: 'Sekiro rocks'},
  {category: 'Coding', content: 'Coding is awesome'},
  {category: 'Other', content: 'I like to ride my bike'},
  {category: 'Gaming', content: 'Skyrim is for the nords'},
  {category: 'Coding', content: 'Python is better than JS'}
]

const App = () => {
  const [entries, setEntries] = useState(seedEntries)


// HOC (Higher Order Component) - uses useParams and applies it to ShowEntry, allowing the id passed in the route to be the index of entries
function ShowEntryWrapper() {
  const { id } = useParams()
  return <ShowEntry entry={entries[id]} /> 
}

  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/category' element={<CategorySelection />} />
      <Route path='/entry'>
        <Route path=":id" element={<ShowEntryWrapper />} /> {/*here is where we place our HOC, so that now the id is retrieved from the route, applied to the function, and then used to retrieve the index of entry posts as the 'id'*/}
        <Route path='new/:category' element={<NewEntry entries={entries} setEntries={setEntries} />} />
      </Route>
      <Route path='*' element={<h3>Page not found</h3>} />
    </Routes>
    </BrowserRouter>
    {/* <Home />
    <CategorySelection />
    <NewEntry /> */}
    </>
    

  )
}

export default App
