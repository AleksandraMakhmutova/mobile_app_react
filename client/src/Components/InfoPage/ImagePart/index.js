import React from 'react'
import style from './style.module.css'
import cn from 'classnames'
import imageDoc from "./docImage.png"
function ImagePart() {

	return (
		<div className={style.container}>
		<div id={style.respTable}>
  <div id={style.respTableCaption}>
	<h1>Images</h1>	
	<div className={style.respTableRow}>
  <div className={style.tableBodyCell}>
  <img src={imageDoc} alt="imageDoc"/>
	</div>
	<div className={style.tableBodyCell}>
  <img src={imageDoc} alt="imageDoc"/>
	</div>
	<div className={style.tableBodyCell}>
  <img src={imageDoc} alt="imageDoc"/>
	</div>
	</div>
	<div className={style.respTableRow}>
  <div className={style.tableBodyCell}>
  <img src={imageDoc} alt="imageDoc"/>
	</div>
	<div className={style.tableBodyCell}>
  <img src={imageDoc} alt="imageDoc"/>
	</div>
	<div className={style.tableBodyCell}>
  <img src={imageDoc} alt="imageDoc"/>
	</div>
	</div>
</div>
</div>

</div>
		
	)
}

export default ImagePart
