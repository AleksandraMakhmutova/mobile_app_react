import React from 'react';
import style from './style.module.css';
import {Link} from 'react-router-dom';

function CardItem({key,id, document, name}) {
console.log(key);
	return (
		<div key={key} className={style.container}>
    <Link to={`/info/${id}`}>
		<div className={style.docList}>
		<i class="fas fa-id-card-alt fa-2x"></i>
	<h3>{document}{"        "}{name}</h3>
	</div></Link>
		</div>
	)
}

export default CardItem
