import React from 'react'
import useResources from './useResources.js'

const ResourceList = ({resource}) => {
  const resources = useResources(resource)
  return (
    <ul>
  {resources.map((resource,i)=>
    (
    resource.title ? 
    <li key={resource.id}>{resource.title}</li>
    : <li key={resource.id}>{resource.name}</li>
    )
  )}
  </ul>
  )

}
export default ResourceList