import React, { useState } from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import style from './style.module.css'
import FormControlLabel from '@material-ui/core/FormControlLabel';

function InfoBox({infoCard}) {
const [checked, setChecked] = useState(infoCard);
const position = Object.keys(checked[0])


const handleChange = (event) => {
	let {value} = event.target
  setChecked(prev=> prev.map(el=>{
		for(let key in el){
if(key==value){
	return {...el, ...el[value].status = !el[value].status}
}}}))}

	return (
		<div className={style.flex}>

	<div id={style.respTable}>
<div id={style.respTableCaption}>
<div id={style.respTableBody}>

<div className={style.respTableRow}>
	<div className={style.tableBodyCell}>
	<FormControlLabel
	control={
	<Checkbox
        value={position[1]}
        checked={checked[0].document.status}
        onChange={handleChange}
				color="default"			
/> }
	label={checked[0].document.document}
/></div>		
<div className={style.tableBodyCell}>
<FormControlLabel
	control={
	<Checkbox
        value={position[2]}
        checked={checked[0].name.status}
        onChange={handleChange}
				color="default"
        inputProps={{ 'aria-label': 'primary checkbox' }}
/> }
	label={checked[0].name.name}
/></div>	
</div>


<div className={style.respTableRow}>
	<div className={style.tableBodyCell}>
<FormControlLabel
	control={
	<Checkbox
        value={position[3]}
        checked={checked[0].surname.status}
        onChange={handleChange}
				color="default"
        inputProps={{ 'aria-label': 'primary checkbox' }}
/> }
	label={checked[0].surname.surname}
/></div>
<div className={style.tableBodyCell}>
	<FormControlLabel
	control={
	<Checkbox
        value={position[4]}
        checked={checked[0].dateOfBirth.status}
        onChange={handleChange}
				color="default"
        inputProps={{ 'aria-label': 'primary checkbox' }}
/> 
} label={checked[0].dateOfBirth.dateOfBirth}
/> 
</div>	
	</div>

<div className={style.respTableRow}>	
<div className={style.tableBodyCell}>
<FormControlLabel
	control={
	<Checkbox
        value={position[5]}
        checked={checked[0].placeOfBirth.status}
        onChange={handleChange}
				color="default"
        inputProps={{ 'aria-label': 'primary checkbox' }}
/> 
} label={checked[0].placeOfBirth.placeOfBirth}
/> </div>	
<div className={style.tableBodyCell.tableBodyCell}>
<FormControlLabel
	control={
	<Checkbox
        value={position[9]}
        checked={checked[0].departmentCode.status}
        onChange={handleChange}
				color="default"
        inputProps={{ 'aria-label': 'primary checkbox' }}
/> 
} label={checked[0].departmentCode.departmentCode}
/></div>	
</div>

<div className={style.respTableRow}>
	<div className={style.tableBodyCell}>
	<FormControlLabel
	control={
	<Checkbox
        value={position[7]}
        checked={checked[0].serialNumber.status}
        onChange={handleChange}
				color="default"
        inputProps={{ 'aria-label': 'primary checkbox' }}
/> 
} label={checked[0].serialNumber.serialNumber}
/> 
</div>		
<div className={style.tableBodyCell}>
<FormControlLabel
	control={
	<Checkbox
        value={position[8]}
        checked={checked[0].dateOfIssue.status}
        onChange={handleChange}
				color="default"
        inputProps={{ 'aria-label': 'primary checkbox' }}
/> 
} label={checked[0].dateOfIssue.dateOfIssue}
/> </div>	

</div>
</div>
</div>

</div>
		</div>

	)
}

export default InfoBox
