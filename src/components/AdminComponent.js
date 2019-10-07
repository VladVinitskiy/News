import React from 'react'
import {Switch, Route, Redirect, NavLink} from "react-router-dom";
import UsersAdminContainer from "../containers/UsersAdminContainer"
import StatisticsAdminContainer from "../containers/StatisticsAdminContainer"

import "../styles/Admin.sass"

const AdminComponent = () =>{
    return (
        <div className="admin_wrap">
            <div className="nav_links_wrap">
                <NavLink to="/admin/users" activeClassName="active">Users</NavLink>
                <NavLink to="/admin/statistics" activeClassName="active">Statistics</NavLink>
            </div>

            <Switch>
                <Route path="/admin/users" component={UsersAdminContainer}/>
                <Route path="/admin/statistics" component={StatisticsAdminContainer}/>
                <Redirect to="/admin/users"/>
            </Switch>
        </div>
    )
};

export default AdminComponent;