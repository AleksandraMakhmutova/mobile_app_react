import React from 'react'
import style from './style.module.css'
import imageDoc from "./docImage.png"

function ImagePart() {

	return (
<>
	<div className={style.container}>


  <div id={style.respTableCaption}>

	<div className={style.respTableRow}>
  <div className={style.tableBodyCell}>
  <img src={imageDoc} alt="imageDoc"/>
	</div>
	<div className={style.tableBodyCell}>
  <img src={imageDoc} alt="imageDoc"/>
	</div>
	</div>
  <div className={style.tableBodyCell}>
  <img src={imageDoc} alt="imageDoc"/>
	</div>
	<div className={style.tableBodyCell}>
  <img src={imageDoc} alt="imageDoc"/>
	</div>
	<div className={style.respTableRow}>

	<div className={style.tableBodyCell}>
  <img src={imageDoc} alt="imageDoc"/>
	</div>
	<div className={style.tableBodyCell}>
  <img src={imageDoc} alt="imageDoc"/>
	</div>
	</div>


	</div>

</div>
</>

		
	)
}

export default ImagePart
