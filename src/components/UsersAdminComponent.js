import React, {Component} from 'react';
import { MDBDataTable } from 'mdbreact';
import moment from "moment";

class UsersAdminComponent extends Component{
    componentDidMount(){
        this.props.getUsers();
    }

    render() {
        const {users} = this.props;

        const data = {
            columns: [
                {
                    label: 'Name',
                    field: 'name',
                    sort: 'asc',
                    width: 200
                },
                {
                    label: 'Surname',
                    field: 'surname',
                    sort: 'asc',
                    width: 200
                },
                {
                    label: 'Email',
                    field: 'email',
                    sort: 'asc',
                    width: 200
                },
                {
                    label: 'Birthday',
                    field: 'birthday',
                    sort: 'asc',
                    width: 200
                },
                {
                    label: 'Phone',
                    field: 'phone',
                    sort: 'asc',
                    width: 200
                }
            ],
            rows: users.length > 0 && users.map(({name, surname, email, birthday, phone}) => {
                return {
                    name: name,
                    surname: surname,
                    shop: email,
                    birthday: moment(birthday).local().format("YYYY-MM-DD"),
                    phone: phone,
                    // clickEvent: () => this.switchEditMode(item)
                }})
        };

        return (
            <div className="admin_data_wrap">
                <MDBDataTable
                    className="data_table"
                    striped
                    bordered
                    info={false}
                    searching={false}
                    displayEntries={false}
                    data={data}
                />
            </div>
        )
    }
}

export default UsersAdminComponent;
