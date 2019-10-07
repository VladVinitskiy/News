import React from 'react'
import {Switch, Route, Redirect, Link} from "react-router-dom";
import UsersAdminContainer from "../containers/UsersAdminContainer"
import StatisticsAdminContainer from "../containers/StatisticsAdminContainer"

const AdminComponent = ()=>{
    return (
        <div className="admin_wrap">
            <div className="nav_links_wrap">
                <Link to="/admin/users">Users</Link>
                <Link to="/admin/statistics">Statistics</Link>
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
