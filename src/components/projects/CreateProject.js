import { useState } from "react"

const CreateProject = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] =useState('')

    const handleChange = (e) => {
        e.target.id === 'title'? setTitle(e.target.value): setContent(e.target.value)
    }
    const handleSumbit =(e) => {
        e.preventDefault()
        const output = {title, content}
        console.log(output)
    }

    return ( 
        <div className="container">
            <form onSubmit={handleSumbit} className="white">
                <h5 className="grey-text text-darken-3">Create New Project</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="content">Project Content</label>
                    <textarea id="content"  className="materialize-textarea" onChange={handleChange}></textarea> 
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Create</button>
                </div>
            </form>
        </div>
     );
}
 
export default CreateProject;