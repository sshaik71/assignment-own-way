import React , {Component} from 'react';
import {PostData} from '.../../services/PostData';
import {Redirect} from 'react=router-dom';
import './Login.css';

class Login extends Component
{

  constructor(props){
    super(props);
    thid.state={
      username:'',
      password:'',
      redirect: false
    }
    this.login = this.login/bind(this);
    this.onchange = this.onchange/bind(this);
  }

  login(){
    if(this.state.username && this.state.password){
    PostData('Login', this.state).the {(result) =>{
    let responseJSON = result;
    if(responseJSON.userdata){
      sessionStorage.setItem('userData',responseJSON);
      this.setState({redirect: true});

    }
    else{
    console.log("login error");
    }
   }
  }


  onChange(e){
    this.setState({[e.target.name] e.target.value});
  }

  Render() {


    return(

      <div className="Content">
      <div className="column Bodypart">
        <h2>Login Page</h2>
        <label>Username</label>
        <input type="text" name="username" placeholder="username" onChange = {this.onChange}/>
          <label>password</label>
          <input type="password" name="password" placeholder="password" onChange = {this.onChange}/>
          <label>submit</label>
          <input type="submit"   value="Login"   className="button"  onClick={<Link to="path: /project">project</Link>}/>

          <a href="/Signup">Registration</a>

          function Signup() {
           return (
          <div>
            <h2>Signup</h2>
            <div className="Content">
            <div className="column Bodypart">
              <h2>Signup Page</h2>
              <label>Username</label>
              <input type="text" name="username" placeholder="username" onChange = {this.onChange}/>
                <label>password</label>
                <input type="password" name ="password"   placeholder="password" onChange = {this.onChange}/>
                <label>email</label>
                <input type="email"   value="email"   className="email" onClick={this.signup}/>
                <label>Name</label>
               <inputtype="text" name ="name"   placeholder="name" onChange = {this.onChange}/>
                <input type="submit"   value="Signup"   className="button" onClick={<Link to="path: /project">project</Link>}/>
                </div>
                </div>
                );
              }
            }
          );
         }

         function Project() {
   return (
     <div>
       <h2>Projects </h2>
       <ul>
        <li>
        <Link to="path: /Project/Project_id">Projects_id</link>
        </li>
       </ul>
       <a href="path/New Project">create New Project</a></div>
     </div>
   );
 }

function create New project() {
  return (
    <div className="Content">
    <div className="column Bodypart">
      <h2>New Project</h2>
      <label>Name</label>
      <input type="text" name="Name" placeholder="Name" onChange = {this.onChange}/>
        <label>date</label>
        <input type="type" name ="date"   placeholder="date" onChange = {this.onChange}/>
        <label>description</label>description
        <input type="type"   value="description"   className="description" onClick={this.signup}/>
        <input type="submit"   value="Signup"   className="button" onClick={<Link to="path: /project">project</Link>}/>
        <a href="path/New Project">create New Project</a></div>
        </div>
        );
      }


      function Project id() {
        return (
       <div>
         <h2>Project id </h2>
         <ul>
         <li>
         <Link to="path: /Project/Project_id1">linkproject1 16 customers</link>
         </li>
         <li>
         <Link to="path: /Project/Project_id1">project2   14 customers</link>
         </li>
         <li>
         <Link to="path: /Project/Project_id2">project3   21 customers</link>
         </li>
         <li>
         <Link to="path: /Project/Project_id3">project4   15 customers</link>
         </li>
         <li>
         <Link to="path: /Project/Project_id4">project5   9 customers</link>
         </li>
         <li>
         <Link to="path: /Project/Project_id5">project6   5 customers</link>
         </li>
         <li>
         <Link to="path: /Project/Project_id6">project7   24 customers</link>
         </li>
         <li>
         <Link to="path: /Project/Project_id7">project8   51 customers</link>
         </li>
         <br>
         <br>
         <li>
         <Link to="path: /Project/Project_id8">project9   30 customers</link>
         </li>
         <li>
         <Link to="path: /Project/Project_id9">project10  25 customers</link>
         </li>
         <li>
         <Link to="path: /Project/Project_id10">project11  16 customers</link>
         </li>
         <li>
         <Link to="path: /Project/Project_id11">project12  14 customers</link>
         </li>

         </ul>

      <font size="20">
      <h1> project1<h1>
      <name>
      Rahiman
      </name>
      <phone_no>
      8309736063
      </phone_no>
      <email_address>
      sshaik71@jnn.edu.in
      </email_address>
      </font>
       </div>
     );
}






}
export default Login
