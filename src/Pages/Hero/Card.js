import { useEffect, useState } from 'react';
import './Card.css';

const Card = () => {
    // const cardCreate = [
    //     { "id": 1, "name": "Education", "description": "An education summary is the section of your resume where you highlight your academic qualifications and achievements" },
    //     { "id": 2, "name": "Education", "description": "An education summary is the section of your resume where you highlight your academic qualifications and achievements" },
    //     { "id": 3, "name": "Education", "description": "An education summary is the section of your resume where you highlight your academic qualifications and achievements" },
    // ]
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data));
    }, [cards]);

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                {
                    cards.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>

        </div>
    );
};

export default Card;