import { post } from "jquery"
import React, { useState } from "react"
import "./Style/Forum.css"

const Forum = (props) => {
    const [posts, setPosts] = useState([])
    const [postName, setPostName] = useState("")
    const [description, setDescription] = useState("")

    async function createPost(){
        const result = await fetch ("http://localhost:8080/post/create", {
            method: "PUT",
            headers: {
                token: props.token },

        })
    }
  

    return (
    <div>
      <h1>Create a post</h1> <br />
      <br />
      <div>
        <div>
          <label>Title </label><br />
          <input type="text" value={postName} onChange={(e) => setPostName(e.target.value)}></input>
        </div>
        <div>
          <label>Description </label><br />
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}></input>
        </div>
        <br />
        <input type="button" value={"Post"} onClick={post}/>
        {/*<input type="button" value={"DeletePost"} onClick={DeletePost}/>*/}
      </div>
    </div>
    )
}

export default Forum
