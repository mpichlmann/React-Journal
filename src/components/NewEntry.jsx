import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const NewEntry = ({ entries, setEntries }) => {
    const { category } = useParams()
    const[content, setContent] = useState("")

    function submit(e) {
        e.preventDefault()
        // Add a new entry
        const newEntry = {
            category: category,
            content 
            // in JS if the key and the value are the same, you can forgo using both and just use the key, rather than writing content: content
        }
        setEntries([ ...entries, newEntry ]) 
        // we cant do setEntries(newEntry) because that would overrite the existing array so instead... 
        // we get the exisiting array, with the '...' expansion operator applied, and add newEntry on the end
        // if we didnt use '...' it would nest the original array, and put newEntry as a second object in a parent array
    }

  return ( 
  <>
    <h3>New entry in {category} category</h3>
    <form className="container" onSubmit={submit}>
        <div>
            <textarea value={content} onChange={e => setContent(e.target.value)} className="form-control" rows="8"></textarea>
            </div>
    <button className="btn btn-primary mt-2">Create Entry</button>
    </form>
    </>
    )
}

export default NewEntry