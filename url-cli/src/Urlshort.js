import React from 'react'
import {Button,Form} from 'react-bootstrap';
import {useState,useEffect} from 'react'
import axios from 'axios'

const Urlshort=()=> {

useEffect(() => {

  axios.get("http://localhost:7000/").then ((response) => {
      console.log(response.data[0].full);
      setAllurllist(response.data)
  })
}, [])

  const [url_link, setUrl_link] = useState("");
  const[urllist,setAllurllist]=useState([]);
  const[redir,setRedir]=useState([]);

  const addUrls=(e)=>{
    e.preventDefault()

      console.log("hello "+url_link)
      axios.post("http://localhost:7000/url",{
        fullurl:url_link
      }     
)
  }
  const redirect=(e)=>{
   e.preventDefault()
    console.log("yeah redirectng to the short web")
     axios.get('http://localhost:7000/').then((response)=>{
     console.log(response.data[0].short);
      setRedir(response.data[0].short)
     })
  }

  const header = () => {
    let headings = ['fulllink', 'shortlink', 'count']

    return headings.map((key, i) => {
        return <th key={i}>{key.toUpperCase()}</th>
    })
}
  

  return (
  <>
    <div className='container'>
      <Form>     
            <Form.Control 
             type="url" 
             onChange={(event)=>{
              setUrl_link(event.target.value) }
             }
             placeholder="enter your URL " />
          <br /> 
          <Button   variant="outline-light"
          onClick={addUrls}
          
          >click it</Button>{' '}
      </Form>
    </div>


    <div>
            <h1 id='title'>React Table</h1>
            <table id='employee'>
                <thead>
                    <tr>{header()}</tr>
                </thead>
                <tbody>
                {urllist.map((val,key) =>{
return (
  <>
  
    <tr key={key}>
      
      <td>  <a href={val.full}> {val.full} </a> </td>
      <td> <a href={val.short} onClick={redirect}> {val.short} </a> </td>
      <td>  <p> {val.count} </p>  </td>
    </tr>

 
  
  </>
)}
)}
                </tbody>
            </table>
        </div>



</>
  )
}

export default Urlshort