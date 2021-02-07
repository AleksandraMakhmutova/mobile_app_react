import React from 'react'
import FotoPart from './FotoPart'
import ScrollPart from './ScrollPart'
import s from './style.module.css'
import cn from 'classnames'


function MainPage() {

	return (
		<div className={s.container}>
		<i className={`fas fa-cogs fa-2x ${cn(s.settings)}`}></i>
    <FotoPart/>
    <ScrollPart/>

		</div>
		
	)
}

export default MainPage
