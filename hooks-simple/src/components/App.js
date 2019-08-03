import React,{ useState } from 'react'
import ResourceList from './ResourceList.js'

const App = () => {
    const [ resource, setResource ] = useState('posts')
    return(
        <div>
           <button onClick={()=> setResource('posts')}>posts</button>
           <button onClick={()=> setResource('todos')}>todos</button>
           <button onClick={()=> setResource('users')}>users</button>
           <ResourceList resource={resource} />
        </div>
    )
}

export default App