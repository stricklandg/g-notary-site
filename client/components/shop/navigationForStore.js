/**
 * Created by gregorydrake on 7/20/16.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';


class NavigationForStore extends Component {
    render() {
        return (
                <nav className="navbar">
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/shop/eo">E&O Coverage</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/shop/supplies">Supplies</Link>
                        </li>
                    </ul>
                </nav>
        )
    }
}

export default NavigationForStore;

/*<li className="nav-item">
    <Link className="nav-link active" to="/shop/bonds">Bonds</Link>
</li>
    */