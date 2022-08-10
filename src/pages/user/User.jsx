import React from 'react'
import "./User.css";
import {LocationSearching, CalendarToday, MailOutline, PermIdentity, PhoneAndroid,Publish} from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function User() {
  return (
    <div className='user'>
    <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
        <button className="UserAddButton">Create</button>
        </Link> 
    </div>
    <div className="userContainer">
        <div className="userShow">
            <div className="userShowTop">
                <img src="https://simg.nicepng.com/png/small/7-78595_asian-businessman-png-professional-man-images-png.png" alt="" className="userShowImg" />
                <div className="userShowTopTitle">
                    <span className="userShowUserName">Jon</span>
                    <span className="userShowUserTitle">Software Engineer</span>
                </div>
            </div>
            <div className="userShowBottom">
                <span className="userShowTitle">Account Details</span>
                <div className="userShowInfo">
                <PermIdentity className='userShowIcon'/>
                <span className="userShowInfoTitle">Jondoy78</span>
                </div>
                <div className="userShowInfo">
                <CalendarToday className='userShowIcon'/>
                <span className="userShowInfoTitle">01-01-2000</span>
                </div>
                <span className="userShowTitle">Contact Details</span>
                <div className="userShowInfo">
                <PhoneAndroid className='userShowIcon'/>
                <span className="userShowInfoTitle">9876543210</span>
                </div>
                <div className="userShowInfo">
                <MailOutline className='userShowIcon'/>
                <span className="userShowInfoTitle">Jon@gmail.com</span>
                </div>
                <div className="userShowInfo">
                <LocationSearching className='userShowIcon'/>
                <span className="userShowInfoTitle">India,Chennai</span>
                </div>
              
           </div>
               
        </div>
        <div className="userUpdate">
        <span className="userUpdateTitle">Edit</span>
              <form className="userUpdateForm">
                <div className="userUpdateLeft">
                    <div className="userUpdateItem">
                        <lable>Username</lable>
                        <input type="text" placeholder='Jondoy' className='userUpdateInput' />
                    </div>
                 
                    <div className="userUpdateItem">
                        <lable>Fullname</lable>
                        <input type="text" placeholder='Jondoy' className='userUpdateInput' />
                    </div>
                    <div className="userUpdateItem">
                        <lable>Email</lable>
                        <input type="text" placeholder='Jon@gmail.com' className='userUpdateInput' />
                    </div>
                    <div className="userUpdateItem">
                        <lable>Phone</lable>
                        <input type="text" placeholder='9876543210' className='userUpdateInput' />
                    </div>
                    <div className="userUpdateItem">
                        <lable>Address</lable>
                        <input type="text" placeholder='India,Chennai' className='userUpdateInput' />
                    </div>
                </div>
                <div className="userUpdateRight">
                    <div className="userUpdateUpload">
                        <img className='userUpdateImg' src="https://simg.nicepng.com/png/small/7-78595_asian-businessman-png-professional-man-images-png.png" alt="" />
                        <lable htmlFor="file"></lable>
                        <input type="file" id='file'/>
                    </div>
                    <button className="userUpdateButton">Update</button>
                </div>
              </form>
        </div>
    </div>
    </div>
  )
}
