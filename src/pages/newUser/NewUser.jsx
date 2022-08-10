import React from 'react'
import "./NewUser.css"

export default function NewUser() {
  return (
    <div className='newUser'>
       <h1 className="newUserTitle">New User</h1>
       <form className="newUserForm">
        <div className="newUserItem">
            <lable>User Name</lable>
            <input type="text" placeholder='Jon' />
        </div>
        <div className="newUserItem">
            <lable>Full Name</lable>
            <input type="text" placeholder='Jon Smith' />
        </div>
        <div className="newUserItem">
            <lable>Email</lable>
            <input type="email" placeholder='Jon@gmail.com' />
        </div>
        <div className="newUserItem">
            <lable>Password</lable>
            <input type="password" placeholder='password' />
        </div>
        <div className="newUserItem">
            <lable>Phone</lable>
            <input type="text" placeholder='9876543210' />
        </div>
        <div className="newUserItem">
            <lable>Address</lable>
            <input type="text" placeholder='India,Chennai' />
        </div>
        <div className="newUserItem">
            <lable>Gender</lable>

        <div className="newUserGender">
        <input type="radio" name='gender' id='male' value="male"/>
            <lable for="male">Male</lable>
            <input type="radio" name='gender' id='female' value="female"/>
            <lable for="female">Female</lable>
            <input type="radio" name='gender' id='other' value="other"/>
            <lable for="other">Other</lable>
        </div>
        </div>
        <div className="newUserItem">
            <lable>Active</lable>
            <select className='newUserSelect' name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>    
        </div>
        <button className="newUserButton">Create</button>
       </form>
    </div>
  )
}
