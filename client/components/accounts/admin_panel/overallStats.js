/**
 * Created by gregorydrake on 9/6/16.
 */
import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap'
import DatesSelector from './containers/DateRangeContainer';


class OverallStats extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayTimeSelector: false,
        };
        this.displayTimeSelector = this.displayTimeSelectors.bind(this);
    }

    displayTimeSelectors(boolean) {
       if (boolean == true) {
           this.setState({displayTimeSelector: false})
       } else {
           this.setState({displayTimeSelector: true})
       }
    }

    render() {
        var {handleDates} = this.props;
        return (
            <Grid>
                <Row>
                    <Col xs={2} md={2} lg={2}>
                    <span style={{float:'left'}}><h5>Overall Stats</h5></span>
                    </Col>
                    <Col xs={8} md={8} lg={8}>
                    </Col>
                    <Col xs={2} md={2} lg={2}>
                    <button className="btn-default" onClick={() => {this.displayTimeSelectors(this.state.displayTimeSelector)}} style={{float: 'right'}}><span className="glyphicon glyphicon-time"></span></button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={5} md={5} lg={5}>
                    </Col>
                    <Col xs={7} md={7} lg={7}>
                    {this.state.displayTimeSelector == true ? <DatesSelector handleDates={handleDates} />: <div></div> }
                    </Col>
                </Row>

                <div className="row">
                    <div className="col-xs-6 col-md-3 col-lg-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">Packages Sold:</div>
                            <div className="panel-body">5</div>
                        </div>
                    </div>

                    <div className="col-xs-6 col-md-3 col-lg-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">Bonds Sold:</div>
                            <div className="panel-body">10</div>
                        </div>
                    </div>

                    <div className="col-xs-6 col-md-3 col-lg-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">E&O Sold:</div>
                            <div className="panel-body">
                                8
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-6 col-md-3 col-lg-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">Total Premium:</div>
                            <div className="panel-body">
                                $750
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-6 col-md-3 col-lg-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">Total Supplies Sold:</div>
                            <div className="panel-body">
                                $750
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-6 col-md-3 col-lg-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">Awaiting SOS Batch:</div>
                            <div className="panel-body">
                                $750
                            </div>
                        </div>
                    </div>
                </div>
        </Grid>)
    }

};

export default OverallStats;