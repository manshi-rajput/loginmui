import React from 'react'
import TextFieldIndex from '../../Components/Form/TextFields/TextFieldIndex'
import { useState } from 'react'
import ButtonIndex from '../../Components/Button/ButtonIndex'

function MainIndex() {
const[text, setText]=useState({
  fname:'',
  lname:'',
  email:'',
  Amsg:''
})


  return (
    <div>
        <TextFieldIndex type = {"text"} handleChange = {e=>setText({...text,fname:e.target.value})}/>
        <TextFieldIndex type = {"text"} handleChange = {e=>setText({...text,lname:e.target.value})}/>
        <TextFieldIndex type = {"email"} handleChange = {e=>setText({...text,email:e.target.value})}/>
        <ButtonIndex />
    </div>
  )
}

export default MainIndex