import  {useState,useEffect} from 'react';
import axios from 'axios'

const useResources = (resource) => {
    const [resources, setResource] = useState([])
    useEffect(
      ()=>{
        (async resource=>{
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/${resource}`)
        setResource(response.data)}
    )(resource)//自执行函数 等同于现在外部赋值函数const a = 。。。然后再调用 ()=>{a(resource)}
    }
    ,[resource])

    return resources
}
export default useResources


