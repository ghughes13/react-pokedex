import React from 'react';

export default class RightSide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0 
        };
      }
    
    render() {
        let pokeInfo = [];

        return (
            <div className="pokeStats-container">
            </div>
        );
    }
}