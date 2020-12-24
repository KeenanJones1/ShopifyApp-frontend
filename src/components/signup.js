import React from 'react'

class signup extends React.Component{
 constructor(){
  super()
  this.state = {
   user: {},
   errors: {}
  }
 }

 handleUserChange = (e) => {
  let user = this.state.user
  user[e.target.name] = e.target.value;
  this.setState({user});
 }

 validate(){
  let user = this.state.user;
  let errors = {};
  let isValid = true;

  if (!user["username"]) {
    isValid = false;
    errors["username"] = "Please enter your name.";
  }

  // if (!user["email"]) {
  //   isValid = false;
  //   errors["email"] = "Please enter your email Address.";
  // }

  // if (typeof user["email"] !== "undefined") {
  //   var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  //   if (!pattern.test(user["email"])) { 
  //     isValid = false;
  //     errors["email"] = "Please enter valid email address.";
  //   }
  // }

  if (!user["password"]) {
    isValid = false;
    errors["password"] = "Please enter your password.";
  }

  if (!user["confirm_password"]) {
    isValid = false;
    errors["confirm_password"] = "Please enter your confirm password.";
  }

  if (typeof user["password"] !== "undefined" && typeof user["confirm_password"] !== "undefined") {
    if (user["password"] !== user["confirm_password"]) {
      isValid = false;
      errors["password"] = "Passwords don't match.";
    }
     this.setState({
      errors: errors
    });
    return isValid;
  }
  } 

  handleSubmit(event) {
   event.preventDefault();
   if(this.validate()){
    const postObj = {
     method: 'POST',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify({user: this.state.user})
    }
    fetch('http://localhost:3000/user', postObj)
    .then(resp => resp.json())
    .then(data => {
     if (data.errors){
      // case method for each error case
      alert(data.errors.join(' & '))
     }else{
      localStorage.setItem('token', data)
      this.props.routeProps.history.push('/home')
     }
    })
       let user = {};
       user["name"] = "";
       // user["email"] = "";
       user["password"] = "";
       user["confirm_password"] = "";
       this.setState({user:user});
       alert('Demo Form is submited');
   }
  }
  

 render(){
  return (
   <div className="col-12 col-md-6 col-lg-6 my-4">
    <h3 className="text-center">Signup For Free</h3>
    <form action="">
     <div className="form-group">
      <label>Username</label>
      <input name="username" class="form-control" id="exampleInputUsername" placeholder="Username" onChange={(event) => {this.handleUserChange(event)}}/>
      <small id="usernameHelp" class="form-text text-muted">Username must be 1 to 20 characters, containing only letters a to z, numbers 0 to 9, hyphens, or underscores.</small>
     </div>
    <div class="form-group">
     <label for="exampleInputPassword1">Password</label>
     <input name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(event) => {this.handleUserChange(event)}}/>
     <small id="passwordHelp" className="form-text text-muted">We'll never share your password with anyone else.</small>
    </div>
    <div className="form-group">
     <label for="exampleInputPassword1">Password Confimation</label>
     <input name="confirm_password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(event) => {this.handleUserChange(event)}}/>
    </div>
     <div className="form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
      <label className="form-check-label" for="exampleCheck1">Remember Me</label>
     </div>
     <button type="submit" className="btn btn-primary" onClick={(event) => this.handleSubmit(event)}>Submit</button>
    </form>
  </div>
  )
 }
}

export default signup
