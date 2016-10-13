/**
 * Created by gregorydrake on 9/6/16.
 */
import React from 'react';

const OverallStats = ( props ) => { return (
    <div>
        <div className="row">
            <span style={{float:'left'}}><h5>Overall Stats</h5></span>
            <button className="btn-default" style={{float: 'right'}}><span className="glyphicon glyphicon-time"></span></button>
        </div>

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
</div>
)};

export default OverallStats;