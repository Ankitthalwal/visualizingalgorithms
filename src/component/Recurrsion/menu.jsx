import React, { Component } from 'react';
import SimpleSelect from "./simpleSelect";

class Menu extends Component {

    render() {
        return (
            <nav className="nav alert-dark">
                <SimpleSelect
                    pos={0}
                    label={'Task'}
                    items={['Fibonacci', 'Binomial Coefficient', "Derangement", "Bigmod", "Stirling2"]}
                    onValueChanged={this.props.setAlgo}
                />
                <SimpleSelect
                    pos={0}
                    label={'N'}
                    items={[0, 1, 2, 3, 4, 5, 6]}
                    onValueChanged={this.props.setN}
                />
                <SimpleSelect
                    pos={0}
                    label={'R'}
                    items={[0, 1, 2, 3, 4, 5, 6]}
                    onValueChanged={this.props.setR}
                />
                <button
                    className='btn btn-warning btn-lg m-2'
                    onClick={this.props.onReset}
                    disabled={this.props.disable}
                >
                    Reset
                </button>
                <button
                    className='btn btn-warning btn-lg '
                    onClick={this.props.onStart}
                    disabled={this.props.disable}
                >
                    Visualize
                </button>
            </nav>
        );
    }
}

export default Menu;
