import React, {Component} from 'react';
import moment from "moment"
import {Button, Form} from "react-bootstrap";
import DatePicker from "react-datepicker";

import "../styles/Profile.sass"

export default class ProfileComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            name: "",
            surname: "",
            phone: "",
            birthday: new Date(),
            id:"",
            open: false
        };

        this.changeBirthday = this.changeBirthday.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);

        this.modal = React.createRef();
    }

    changeBirthday(date) {
        this.setState({birthday: date})
    }

    switchEditMode(user){
        const {birthday, ...rest} = user;

        this.setState({
            open: true,
            ...rest,
            birthday: new Date(birthday)
        });
    }

    editData(){
        const { open, birthday, id, ...request } = this.state;

        this.props.editUser(id, {birthday: moment(birthday).format("YYYY-MM-DD"), ...request});

        this.setState({
            open: false,
            email: "",
            phone: "",
            id:"",
            name: "",
            surname: "",
            birthday: new Date(),
        });
    }

    handleClickOutside = (event) => {
        if (this.modal.current && !this.modal.current.contains(event.target)) {
            this.setState({open: false})
        }
    };


    componentDidMount(){
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        this.setState({open: false});
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    render(){
        const { user } = this.props;
        const { name, surname, phone, email, birthday, open } = this.state;

        return (
            <div className={`container-fluid profile_wrap ${open ? "open" : ""}`}>
                <Form className={`add_new_data ${open ? "open" : ""}`} ref={this.modal}>
                    <h3>Edit Profile Data</h3>

                    <button
                        className="close_btn"
                        type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            this.setState({open: false})
                        }}
                    />

                    <div className="main_data mb-3">
                        <div className="main_info">
                            <div className="prof_wrap">
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Name"
                                        value={name}
                                        onKeyPress={(e) => e.key === "Enter" && this.editData()}
                                        onChange={e => this.setState({name: e.target.value})}/>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Surname</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Surname"
                                        value={surname}
                                        onKeyPress={(e) => e.key === "Enter" && this.editData()}
                                        onChange={e => this.setState({surname: e.target.value})}/>
                                </Form.Group>
                            </div>

                            <div className="prof_wrap">
                                <Form.Group>
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Phone"
                                        value={phone}
                                        onKeyPress={(e) => e.key === "Enter" && this.editData()}
                                        onChange={e => this.setState({phone: e.target.value})}/>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onKeyPress={(e) => e.key === "Enter" && this.editData()}
                                        onChange={e => this.setState({email: e.target.value})}/>
                                </Form.Group>
                            </div>

                            <Form.Group>
                                <Form.Label>Birthday</Form.Label>
                                <DatePicker
                                    selected={birthday}
                                    onChange={this.changeBirthday}
                                    dateFormat="MMMM d, yyyy"
                                />
                            </Form.Group>
                        </div>
                    </div>

                    <Button variant="outline-success"
                            className="submit"
                            onClick={() => this.editData()}
                    >Edit user</Button>
                </Form>

                <div className="profile">
                    <div className="head">Profile</div>
                    <div className="main">
                        <button className="edit" onClick={() => this.switchEditMode(user)}/>

                        <div className="avatar">
                            <img src="/icons/profile.png" alt="Avatar"/>
                        </div>

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

