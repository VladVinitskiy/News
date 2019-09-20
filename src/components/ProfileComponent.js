import React, {Component} from 'react';
import moment from "moment"

import "../styles/Profile.sass"

export default class Dashboard extends Component{
    render(){
        const { user } = this.props;
        let password, phone, email;

        return (
            <div className='container-fluid profile_wrap'>
                <div className="profile">
                    <div className="head">Profile</div>
                    <div className="main">
                        {/*<button className="edit" onClick={() => this.switchEditMode(user)}></button>*/}
                        {/**/}
                        {/*<div className="avatar">*/}
                        {/*    <img src={`${user.main_image ? user.main_image : "/images/profile.png"}`} alt="Avatar"/>*/}
                        {/*</div>*/}

                        <table>
                            <tbody>
                            <tr>
                                <td>NAME</td>
                                <td>{user.name}</td>
                            </tr>
                            <tr>
                                <td>SURNAME</td>
                                <td>{user.surname}</td>
                            </tr>
                            <tr>
                                <td>EMAIL</td>
                                <td>{user.email}</td>
                            </tr>
                            <tr>
                                <td>BIRTHDAY</td>
                                <td>{moment(user.birthday).format("LL")}</td>
                            </tr>
                            <tr>
                                <td>PHONE</td>
                                <td>{user.phone}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

