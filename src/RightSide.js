import React from 'react';
import Chart from './BaseStatsChart'

export default class RightSide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokeNum: this.props.pokeInfo.data.order,
            data: {
                test: 'test string',
                labels: ['Sp','Spc Def','Spc Att', 'Def', 'Att', 'HP'],
                datasets: [
                        {
                            backgroundColor: 'rgba(255, 255, 255, 1)',
                            borderColor: 'rgba(255, 255, 255, 1)',
                            data: [0, 2, 3, 4, 5, 255]
                        }
                ]
            }
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps !== this.props) {
            this.setState({ data : { data: {
                test: 'new test string;',
                labels: this.props.pokeInfo.data.stats.map((stat, index) => {
                    return stat.stat.name;
                }),
                datasets: [
                    {
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        borderColor: 'rgba(255, 255, 255, 1)',
                        data: this.props.pokeInfo.data.stats.map((stat, index) => {
                            return stat.base_stat
                        })
                    }
                ]
                }}}
            )
        }
    }

    render() {
        let pokeInfo = this.props.pokeInfo;
        return (
            <div className="pokeStats-container">
                <div className="basic-info">
                    <h2>{pokeInfo.data.species.name}</h2>
                    <h2>ID #{pokeInfo.data.order}</h2>
                    <h2>Weight: {pokeInfo.data.weight}lbs<br/></h2>
                </div>
                <div className="poke-pic">
                    <img src={this.props.pokePic} alt="pic of pokemon"/>
                </div>
                <div className="base-stats">
                    <Chart props={this.state.data}/>
                </div>
            </div>
        );
    }
}