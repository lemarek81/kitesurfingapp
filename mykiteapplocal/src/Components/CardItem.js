import React from 'react';
import {Link} from 'react-router-dom';


function CardItem (props) {
    return (
        <div>
            <li className='cardItem'>
                <Link className='cardItemLink' to={props.path}>
                    <figure className='cardItemPicWrapper' dataCategory={props.lebel}>
                        <img
                        src={props.src}
                        alt='zobaczyc co i jak'
                        className='cardItemImg'
                        >
                        </img>
                    </figure>
                    <div className='cardItemInfo'>
                        <h5 className='cardItemText'>{props.text}</h5>
                    </div>
                </Link>
            </li>
        </div>
    )
}

export default CardItem;