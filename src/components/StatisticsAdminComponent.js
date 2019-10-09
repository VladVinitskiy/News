import React, {Component} from 'react';
import { MDBDataTable } from 'mdbreact';
import moment from "moment";

class StatisticsAdminComponent extends Component{
    componentDidMount(){
        this.props.getStatistics();
    }

    render() {
        const {statistics} = this.props;

        const data = {
            columns: [
                {
                    label: 'Ip',
                    field: 'ip',
                    sort: 'asc',
                    width: 200
                },
                {
                    label: 'Country',
                    field: 'country',
                    sort: 'asc',
                    width: 200
                },
                {
                    label: 'City',
                    field: 'city',
                    sort: 'asc',
                    width: 200
                },
                {
                    label: 'Timezone',
                    field: 'timezone',
                    sort: 'asc',
                    width: 200
                },
                {
                    label: 'Location',
                    field: 'll',
                    sort: 'asc',
                    width: 200
                },
                {
                    label: 'visit',
                    field: 'visitedAt',
                    sort: 'asc',
                    width: 200
                }
            ],
            rows: statistics.length > 0 && statistics.map(({ip, city, country, timezone, ll, visitedAt}) => {
                return {
                    ip: ip,
                    city: city,
                    country: country,
                    timezone: timezone,
                    ll: `${ll[0]}, ${ll[1]}`,
                    visitedAt: moment(visitedAt).local().format("YYYY-MM-DD HH:mm"),
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

export default StatisticsAdminComponent;