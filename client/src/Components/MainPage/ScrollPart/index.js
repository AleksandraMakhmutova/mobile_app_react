import React from 'react'
import style from './style.module.css'


//допустим с бэка придёт массив с данными,//ранее загруженных документов
import docList from "./docList"
import CardItem from './cardItem'



function ScrollPart() {
console.log(docList);
	return (
		<div className={style.container}>
{
	docList && docList.map(el=>(
		<CardItem key={el.id} id={el.id} document={el.document} name={el.name} />
	))
}

		</div>
	)
}

export default ScrollPart
