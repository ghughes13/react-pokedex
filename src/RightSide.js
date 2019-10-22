import React from 'react';

export default class RightSide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
      }
    
    render() {
        let pokeInfo = this.props.pokeInfo;
        return (
            <div className="pokeStats-container">
                {console.log(pokeInfo.data.species.name)}
                <h2>{pokeInfo.data.species.name}</h2>
            </div>
        );
    }
}