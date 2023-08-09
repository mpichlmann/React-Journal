import React, { useEffect, useState } from 'react'
import CategorySelection from './CategorySelection'
import NewEntry from './NewEntry'
import Home from './Home'
import { BrowserRouter, Routes, Route, useParams, useNavigate } from "react-router-dom"
import NavBar from './NavBar'
import ShowEntry from './ShowEntry'

// const seedEntries = [
//   {category: 'Food', content: 'Pizza rocks'},
//   {category: 'Gaming', content: 'Sekiro rocks'},
//   {category: 'Coding', content: 'Coding is awesome'},
//   {category: 'Other', content: 'I like to ride my bike'},
//   {category: 'Gaming', content: 'Skyrim is for the nords'},
//   {category: 'Coding', content: 'Python is better than JS'}
// ]

const App = () => {
  const nav = useNavigate()
  const [entries, setEntries] = useState([])
  
  useEffect(async () => {
    const res = await fetch('http://localhost:4001/entries')
    const data = await res.json()
    setEntries(data)
  }, [])

  // HOC (higher-order component)
  function ShowEntryWrapper() {
    const { id } = useParams()
    return <ShowEntry entry={entries[id]} />
  }

  function NewEntryWrapper() {
    return <NewEntry addEntry={addEntry} />
  }

  function addEntry(category, content) {
    const id = entries.length
    // Add a new entry
    const newEntry = { category, content }
    setEntries([...entries, newEntry])
    nav(`/entry/${id}`)
  }

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home entries={entries} />} />
          <Route path="/category" element={<CategorySelection />} />
          <Route path="/entry">
            <Route path=":id" element={<ShowEntryWrapper />} />
            <Route path="new/:category" element={<NewEntryWrapper />} />
          </Route>
          <Route path="*" element={<h3>Page not found</h3>} />
        </Routes>
      </BrowserRouter>
      {/* <Home />
      <CategorySelection />
      <NewEntry /> */}
    </>
  )
}

export default App