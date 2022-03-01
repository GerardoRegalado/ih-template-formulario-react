import React from 'react'
import { useState } from 'react'


export default function Main() {

    

    const [publish, setPublish] = useState({
        name: '',
        photo:'',
        tag: ''
        
    })

    const handleChange = (event) => {
            console.log(event)
            console.log(event.target.value)
            console.log(event.target.name)

            setPublish({
                ...publish,
                [event.target.name]:event.target.value
            })
            
    }

  

    const [list, setList] = useState([])

    const [error, setError] = useState("")


    const changeSubmit = (event) => {
        event.preventDefault()

        if(!publish.name||!publish.photo||!publish.tag){

            setError("Existe un campo vacio")
            
            return
        }

        setList([
            ...list,
            publish
        ])

        setPublish({

            name:"",
            photo:"",
            tag: ""
        })

        setError("")

    }
    
    
    

  return (
      <>
    
        <form onSubmit={ (evt) => { changeSubmit(evt) }}>
            <label>Name</label>
            <input
            name='name'
            value={publish.name} 
            onChange ={ (evt) => { handleChange(evt) }}
            />

            <label>Photo</label>
            <input 
            name='photo'
            value={publish.photo}
            onChange ={ evt => { handleChange(evt) }}
            />

            <label>tag</label>
            <input 
            name='tag'
            value={publish.tag}
            onChange ={ evt => { handleChange(evt)}}
            />

            <button type='submit'>Publish</button>

            <p>{ error }</p>

        </form>
        
        <h2>Listado de comentarios</h2>

        {
            list.length === 0 ? <p>do your first post</p>
            :
            list.map((elt, index) => {

                return (
                    <div key={index}>
                        <p>name: {elt.name}</p>
                        <img src={elt.photo} alt="foto" />
                        <p>tag: {elt.tag}</p>
                       
                   </div>
                )
            })


        }
        
        
        </>

      
  )
}
