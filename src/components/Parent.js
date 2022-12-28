import React, { useState } from 'react';
import Cards from './Cards';
import '../components/Cards.css'

function Parent() {

    let [numOfLikes, setNumOfLikes] = useState(0);

    const incrementNumOfImg = () => {
        setNumOfLikes(numOfLikes + 1)
    }
    return (
        <>
            <h1>Home</h1>
            <h2>Total Number of Likes : {numOfLikes}</h2>
            <div className="card-container">
            <Cards id='1' imgPath="https://i.pinimg.com/originals/a4/96/c2/a496c2b6bc5d7cfe0e0674f6598c38ad.jpg" title="nature1" likes={incrementNumOfImg} />
            <Cards id='2' imgPath="https://static.sadhguru.org/d/46272/1633199491-1633199490440.jpg" title="nature2" likes={incrementNumOfImg} />
            <Cards id='3' imgPath="https://wallpapercave.com/wp/u9AVLry.jpg" title="nature3" likes={incrementNumOfImg} />
            </div>
        </>
    )
}

export default Parent;