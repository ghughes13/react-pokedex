import React from 'react';

export default class LeftCard extends React.Component {
    render() {
        let picUrls = [];

        for(let i = 1; i < 151; i++) {
            if(i < 10) {
                i = '00' + i;
            } else if(i < 100) {
                i = "0" + i;
            } 
            picUrls.push("https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + i + ".png")
        }   

        const cards = picUrls.map((pic, index) => 
            <div className="pic-holder" key={index}>
                <img src={pic} alt="pokemon img"/>
            </div>    
        )

        return (
            <div className="cards-container">
                {cards}
            </div>
        );
    }
}