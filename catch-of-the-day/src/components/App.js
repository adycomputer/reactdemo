import React from 'react';
import Inventory from './Inventory';
import Header from './Header';
import Order from './Order';

class App extends React.Component {
    render () {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                </div>
                <Inventory />
                <Order />
            </div>
        );
    }
}

export default App;