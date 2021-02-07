import React from 'react';
import style from './style.module.css';
import {Link} from 'react-router-dom';

function CardItem({id, document, name, surname}) {
	return (
		<div key={id} className={style.container}>
    <Link to={`/info/${id}`}>
		<div className={style.docList}>
		<i class="fas fa-id-card-alt fa-2x"></i>
	<p>{document.document}{"        "}{name} {surname}</p>
	</div></Link>
	</div>
	)
}

export default CardItem
