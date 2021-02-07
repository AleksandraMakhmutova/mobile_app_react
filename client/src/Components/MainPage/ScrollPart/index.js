import React from 'react'
import style from './style.module.css'


//допустим с бэка придёт массив с данными,//ранее загруженных документов
import docList from "./docList"
import CardItem from './CardItem'



function ScrollPart() {

	return (
		<div className={style.container}>
{
	docList && docList.map(el=>(
		<CardItem id={el.id.id} document={el.document} name={el.name.name} surname={el.surname.surname}/>
	))
}

		</div>
	)
}

export default ScrollPart
