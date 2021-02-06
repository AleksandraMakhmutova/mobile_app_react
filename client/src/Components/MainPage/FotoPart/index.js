import React from 'react'
import style from './style.module.css'
import cn from 'classnames'
function FotoPart() {
	return (
		<div className={style.container}>
		<div className={style.boxPhoto}> 
<i className={`fas fa-camera fa-2x ${cn(style.photoIcon)}`}></i>
	{/* <form action="" >
    <input type="file" id="imageFile" capture="user" accept="image/*"/>
		</form>  */}
			<div className={`custom-file ${cn(style.input)}`}>
		
  <input type="file" capture="user" accept="image/*" className="custom-file-input" id="customFile"/>
  <label className="custom-file-label" for="customFile">Choose file</label>
</div>
		</div>
	
<div className={style.folder}>
<i className={`fas fa-folder-plus fa-2x ${cn(style.icon)}`}></i>
</div>

		</div>
	)
}

export default FotoPart
