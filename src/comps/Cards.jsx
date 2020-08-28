import React, { useState } from 'react'

export default function Cards(props) {
    const id = props.match.params.id
    const [cardData, setCardData] = useState(props.data[id])
    console.log(cardData)
    return (
        <div>
            <h1>Deck: {cardData.name}</h1>
            {cardData.cards.map((card, index) => (
                <div key={index}>
                    <h3>{card.title}</h3>
                    <p>{card.body}</p>
                </div>
            ))}
        </div>
    )
}
