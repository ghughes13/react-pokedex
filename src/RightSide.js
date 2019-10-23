import React from 'react';
import Chart from './BaseStatsChart'

export default class RightSide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokeNum: this.props.pokeInfo.data.order,
            data: {
                test: 'test string',
                labels: ['test','test2','test2'],
                datasets: [
                        {
                            label: "videos Made",
                            backgroundColor: 'rgb(255, 99, 132)',
                            borderColor: 'rgb(255, 99, 132)',
                            data: [1, 2, 3, 4, 5, 6, 7 ]
                        }
                ]
            }
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevProps, prevProps.day, this.props.prop, this.props.day);
        if (prevProps.day !== this.props.day) {
            this.setState({ day : prevProps.day})
            this.setState({ data : { data: {
                test: 'new test string;',
                labels: ['test','test2','test2', 'test5', 'test6', 'test7'],
                datasets: [
                    {
                        label: "videos Made",
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: [1, 2, 3, 4, 5, 6, 7 ]
                    }
                ]
                }}}
            )
        }
        console.log(this.state.day)
    }

    render() {
        let pokeInfo = this.props.pokeInfo;
        return (
            <div className="pokeStats-container">
                <div className="basic-info">
                    {/* {console.log(pokeInfo.data)} */}
                    <h2>{pokeInfo.data.species.name}</h2>
                    <h2>#{pokeInfo.data.order}</h2>
                    <h2>Weight: {pokeInfo.data.weight}<br/></h2>
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