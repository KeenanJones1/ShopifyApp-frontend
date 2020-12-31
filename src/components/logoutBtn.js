import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
 font-size: 1em;
 margin: 1em;
 padding: 0.25em 1em;
 border: 2px solid palegoldenrod;
 cursor: pointer;
`

const logoutBtn = (props) => {

 const logout = () => {
  localStorage.removeItem('token')
  props.routerProps.history.push('/')
 }

 return (
   <Button onClick={() => logout()}>Logout</Button>
 )
}

export default logoutBtn