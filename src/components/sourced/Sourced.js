import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {HeaderNavContainer} from "../landing/HeaderNavContainer";
import {Link} from "react-router-dom";

class Sourced extends React.Component {

    constructor(props) {
        super(props);
        this.options = {
            noDataText: 'Loading....',
            expandRowBgColor: '#eee'
        };
        this.state = {
            sourced: []
        };
        this.getSourcedData = this.getSourcedData.bind(this); //************ add this
    }

    componentDidMount() {
        this.getSourcedData();
    }

    getSourcedData = () => {
        let self = this //************ add this
        console.log("mount");
        fetch('https://spreadsheets.google.com/feeds/cells/1H2q6PrxU7Lqrl5F7Ee9Gvxr-s7MUk2nuymso0A7by70/1/public/values?alt=json-in-script')
            .then(function (response) {
                return response.text()
            }).then(function (json) {
            let text = json.replace("gdata.io.handleScriptLoaded(", "");
            text = text.substr(0, text.length - 2);
            return JSON.parse(text);
        }).then(function (json) {
            const data = json.feed.entry;
            let sourcedObj = [];
            let row = {};
            let heads = ['', 'type', 'source'];
            for (let r = 0; r < data.length; r++) {
                const cell = data[r]["gs$cell"];
                if(cell.row!=="1"){
                    console.log(cell);
                    //console.log("Heads : "+heads[cell.col]);
                    row[heads[cell.col]] = cell["$t"]
                    if(cell.col==="2"){
                        console.log(row);
                        sourcedObj.push(row);
                        row = {};
                    }
                }
            }
            console.log(sourcedObj);
            self.setState({sourced: sourcedObj});
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        })
    }

    customLink(cell, row){
        return <a href={cell} target="_blank">{cell}</a>
    }

    render() {
        return (
            <div>
                <HeaderNavContainer/>
                <div className="container-fluid mt-2">
                    <div className="row">
                        <div className="col-md-12">
                            {this.state.sourced ?
                                <BootstrapTable data={this.state.sourced}
                                                options={this.options}
                                                bordered={true}
                                                wrapperClasses="table-responsive"
                                                headerStyle={ { fontSize: '14px', } }
                                                bodyStyle={ { fontSize: '14px',} }
                                                >
                                    <TableHeaderColumn dataField="id" isKey hidden>Id</TableHeaderColumn>

                                    <TableHeaderColumn
                                        dataField="type"
                                        dataSort={true}
                                        filter={{type: 'TextFilter', delay: 0}}
                                        columnTitle
                                    >
                                        Lead Type
                                    </TableHeaderColumn>

                                    <TableHeaderColumn
                                        dataField="source"
                                        dataFormat={this.customLink}
                                    >
                                        Source
                                    </TableHeaderColumn>

                                </BootstrapTable> : "API data not loaded"}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Sourced;
