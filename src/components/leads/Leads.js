import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {HeaderNavContainer} from "../landing/HeaderNavContainer";

class BSTable extends React.Component {
    render() {
            return (
                <BootstrapTable data={ this.props.data }>
                    <TableHeaderColumn dataField='id' isKey hidden>Test</TableHeaderColumn>
                    <TableHeaderColumn dataField="name">Name</TableHeaderColumn>
                    <TableHeaderColumn dataField="number">Mobile Number</TableHeaderColumn>
                    <TableHeaderColumn dataField="w_number">Whatsapp Number</TableHeaderColumn>
                    <TableHeaderColumn dataField="e_add">Exact Address</TableHeaderColumn>
                    <TableHeaderColumn dataField="landmark">Landmark</TableHeaderColumn>
                    <TableHeaderColumn dataField="open_to_help">Open to help</TableHeaderColumn>
                    <TableHeaderColumn dataField="other_info">Other Info</TableHeaderColumn>
                </BootstrapTable>
            );
    }
}

class Leads extends React.Component {

    constructor(props) {
        super(props);
        this.options = {
            noDataText: 'Loading....',
            expandRowBgColor: '#eee'
        };
        this.state = {
            leads: []
        };
        this.getData = this.getData.bind(this); //************ add this
    }

    componentDidMount() {
        this.getData();
    }

    expandColumnComponent({ isExpandableRow, isExpanded }) {
        let content = '';

        if (isExpandableRow) {
            content = (isExpanded ? '(-)' : '(+)' );
        } else {
            content = ' ';
        }
        return (
            <div> { content } </div>
        );
    }

    getData = () => {
        let self = this //************ add this
        console.log("mount");
        fetch('https://spreadsheets.google.com/feeds/cells/1F7XkNpCJxm3ehJodDkoAmVCy0x7229bRr6kihx_5-Os/1/public/values?alt=json-in-script')
            .then(function (response) {
                return response.text()
            }).then(function (json) {
            let text = json.replace("gdata.io.handleScriptLoaded(", "");
            text = text.substr(0, text.length - 2);
            return JSON.parse(text);
        }).then(function (json) {
            const data = json.feed.entry;
            let leadsObj = [];
            let row = {};
            let heads = ['','timestamp', 'type', 'name', 'number', 'w_number', 'state', 'city', 'e_add', 'landmark', 'open_to_help', 'other_info', 'verified'];
            for (let r = 0; r < data.length; r++) {
                const cell = data[r]["gs$cell"];
                if(cell.row!=="1"){
                    //console.log(cell);
                    //console.log("Heads : "+heads[cell.col]);
                    row[heads[cell.col]] = cell["$t"]
                    if(cell.col==="12"){
                        console.log(row);
                        leadsObj.push(row);
                        row = {};
                    }
                }
            }
            console.log(leadsObj);
            self.setState({leads: leadsObj});
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        })
    }

    isExpandableRow(row) {
        return true;
    }

    expandComponent(row){
        console.log("Expaned riow");
        console.log(row);
        let expanded_data = [];
        row.id=Math.random()
        expanded_data.push(row);
        return (
            <BSTable data={ expanded_data } />
        );
    }

    render() {
        return (
            <div>
                <HeaderNavContainer/>
                <div className="container-fluid mt-2">
                    <div className="row">
                        <div className="col-md-12">
                            {this.state.leads ?
                                <BootstrapTable data={this.state.leads}
                                                expandableRow={this.isExpandableRow}
                                                expandComponent={ this.expandComponent }
                                                expandColumnOptions={ {
                                                    expandColumnVisible: true,
                                                    expandColumnComponent: this.expandColumnComponent,
                                                    columnWidth: 50
                                                } }
                                                options={this.options}
                                                bordered={true}
                                                wrapperClasses="table-responsive"
                                                headerStyle={ { fontSize: '14px', } }
                                                bodyStyle={ { fontSize: '14px',} }
                                                >
                                    <TableHeaderColumn dataField="id" isKey hidden>Id</TableHeaderColumn>
                                    <TableHeaderColumn
                                        dataField="timestamp"
                                        dataSort={true}
                                        filter={{type: 'TextFilter', delay: 0}}
                                        columnTitle
                                    >
                                        Timestamp
                                    </TableHeaderColumn>

                                    <TableHeaderColumn
                                        dataField="type"
                                        dataSort={true}
                                        filter={{type: 'TextFilter', delay: 0}}
                                        columnTitle
                                    >
                                        Lead Type
                                    </TableHeaderColumn>

                                    <TableHeaderColumn
                                        dataField="state"
                                        dataSort={true}
                                        filter={{type: 'TextFilter', delay: 0}}
                                        columnTitle
                                    >
                                        State
                                    </TableHeaderColumn>

                                    <TableHeaderColumn
                                        dataField="city"
                                        dataSort={true}
                                        filter={{type: 'TextFilter', delay: 0}}
                                        columnTitle
                                    >
                                        City
                                    </TableHeaderColumn>

                                    <TableHeaderColumn
                                        dataField="verified"
                                        dataSort={true}
                                        filter={{type: 'TextFilter', delay: 0}}
                                        columnTitle
                                    >
                                        Verified
                                    </TableHeaderColumn>

                                </BootstrapTable> : "API data not loaded"}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Leads;
