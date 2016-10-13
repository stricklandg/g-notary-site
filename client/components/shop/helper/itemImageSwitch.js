/**
 * Created by gregorydrake on 9/22/16.
 */
import React from 'react';
import {Image} from 'react-bootstrap';

export default function imageSwitch(item) {
    //This determines which function is calling it.
    switch (item.name) {
        case "Self-Inking Acknowledgement Stamp":
            return rObject = (<Image src="../../../images/PTR-40.jpg" />);
            break;
        case "Desk Sign":
            return rObject = (<Image src="../../../images/CAB2X8.jpg" />);
            break;
        case "Metal Embossing Seal":
            return rObject = (<Image src="../../../images/SSL-1-NOT.jpg" />);
            break;
        case "Impression Inker":
            return rObject = (<Image src="../../../images/SEALINKER.jpg" />);
            break;
        case "Pocket Size Stamp":
            return rObject = (<Image src="../../../images/N40.jpg" />);
            break;
        case "Self-Inking Round Stamp":
            return rObject = (<Image src="../../../images/PMN05.jpg" />);
            break;
        case "Self-Inking Stamp":
            return rObject = (<Image src="../../../images/PTR-40.jpg" />);
            break;
        case "Notary Public Record Book":
            return rObject = (<Image src="../../../images/NRJ.jpg" />);
            break;
        case "Fingerprint Pad":
            return rObject = (<Image src="../../../images/DFPAD.jpg"/>);
        default:
            return (<div></div>);
    }
}