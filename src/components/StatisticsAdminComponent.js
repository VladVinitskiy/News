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
                    label: 'Visit at',
                    field: 'visitedAt',
                    sort: 'asc',
                    width: 200
                }
            ],
            rows: statistics.length > 0 && statistics.map(({ip, city, country, timezone, ll, visitedAt}) => {
                return {
                    ip: ip,
                    country: country,
                    city: city,
                    timezone: timezone,
                    ll: `${ll[0]}, ${ll[1]}`,
                    visitedAt: moment(visitedAt).local().format("LLL"),
                }})
        };

        return (
            <div className="admin_data_wrap">
                <MDBDataTable
                    className="data_table"
                    striped
                    bordered
                    responsive
                    info={false}
                    data={data}
                />
            </div>
        )
    }
}

export default StatisticsAdminComponent;