import React, { useState } from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import style from './style.module.css'

function InfoBox({infoCard}) {
const [checked, setChecked] = useState(infoCard);
const position = Object.keys(checked[0])


const handleChange = (event) => {
	let {value} = event.target
  setChecked(prev=> prev.map(el=>{
		for(let key in el){
if(key==value){
	return {...el, ...el[value].status = !el[value].status}
}
		}

		}))}


	return (
	<div id={style.respTable}>
<div id={style.respTableCaption}>
<div id={style.respTableBody}>
<div className={style.respTableRow}>
	<div className={style.tableBodyCell}>
	<Checkbox
        value={position[1]}
        checked={checked[0].document.status}
        onChange={handleChange}
				color="default"
        inputProps={{ 'aria-label': 'primary checkbox' }}
/> {checked[0].document.document}</div>		
<div className={style.tableBodyCell}>
	<Checkbox
        value={position[2]}
        checked={checked[0].name.status}
        onChange={handleChange}
				color="default"
        inputProps={{ 'aria-label': 'primary checkbox' }}
/> {checked[0].name.name}</div>	
<div className={style.tableBodyCell}>
	<Checkbox
        value={position[3]}
        checked={checked[0].surname.status}
        onChange={handleChange}
				color="default"
        inputProps={{ 'aria-label': 'primary checkbox' }}
/> {checked[0].surname.surname}</div>	
</div>
<div className={style.respTableRow}>
	<div className={style.tableBodyCell}>
	<Checkbox
        value={position[4]}
        checked={checked[0].dateOfBirth.status}
        onChange={handleChange}
				color="default"
        inputProps={{ 'aria-label': 'primary checkbox' }}
/> {checked[0].dateOfBirth.dateOfBirth}</div>		
<div className={style.tableBodyCell}>
	<Checkbox
        value={position[5]}
        checked={checked[0].placeOfBirth.status}
        onChange={handleChange}
				color="default"
        inputProps={{ 'aria-label': 'primary checkbox' }}
/> {checked[0].placeOfBirth.placeOfBirth}</div>	
<div className={style.tableBodyCell.tableBodyCell}>
	<Checkbox
        value={position[6]}
        checked={checked[0].gender.status}
        onChange={handleChange}
				color="default"
        inputProps={{ 'aria-label': 'primary checkbox' }}
/> {checked[0].gender.gender}</div>	
</div>
<div className={style.respTableRow}>
	<div className={style.tableBodyCell}>
	<Checkbox
        value={position[7]}
        checked={checked[0].serialNumber.status}
        onChange={handleChange}
				color="default"
        inputProps={{ 'aria-label': 'primary checkbox' }}
/> {checked[0].serialNumber.serialNumber}</div>		
<div className={style.tableBodyCell}>
	<Checkbox
        value={position[8]}
        checked={checked[0].dateOfIssue.status}
        onChange={handleChange}
				color="default"
        inputProps={{ 'aria-label': 'primary checkbox' }}
/> {checked[0].dateOfIssue.dateOfIssue}</div>	
<div className={style.tableBodyCell.tableBodyCell}>
	<Checkbox
        value={position[9]}
        checked={checked[0].departmentCode.status}
        onChange={handleChange}
				color="default"
        inputProps={{ 'aria-label': 'primary checkbox' }}
/> {checked[0].departmentCode.departmentCode}</div>	
</div>
</div>
</div>

</div>
	)
}

export default InfoBox
// {/* 
// <div className={style.respTableRow}>
// <div className={style.tableBodyCell}>
// <Checkbox
//         id={checked[3].id}
//         checked={checked[3].status}
//         onChange={handleChange}
// 				color="default"
//         inputProps={{ 'aria-label': 'primary checkbox' }}
// />{infoCard.document}
// </div>
// <div className={style.tableBodyCell}>
// <Checkbox
//         id={checked[4].id}
//         checked={checked[4].status}
//         onChange={handleChange}
// 				color="default"
//         inputProps={{ 'aria-label': 'primary checkbox' }}
// />{infoCard.document}
// </div>
// <div className={style.tableBodyCell}>
// <Checkbox
//         id={checked[5].id}
//         checked={checked[5].status}
//         onChange={handleChange}
// 				color="default"
//         inputProps={{ 'aria-label': 'primary checkbox' }}
// />{infoCard.document}
// </div>
// </div>
// <div className={style.respTableRow}>
// <div className={style.tableBodyCell}>
// <Checkbox
//         id={checked[6].id}
//         checked={checked[6].status}
//         onChange={handleChange}
// 				color="default"
//         inputProps={{ 'aria-label': 'primary checkbox' }}
// />{infoCard.document}
// </div>
// <div className={style.tableBodyCell}>
// <Checkbox
//         id={checked[7].id}
//         checked={checked[7].status}
//         onChange={handleChange}
// 				color="default"
//         inputProps={{ 'aria-label': 'primary checkbox' }}
// />{infoCard.document}
// </div>
// <div className={style.tableBodyCell}>
// <Checkbox
//         id={checked[8].id}
//         checked={checked[8].status}
//         onChange={handleChange}
// 				color="default"
//         inputProps={{ 'aria-label': 'primary checkbox' }}
// />{infoCard.document}
// </div> */}
// {/* // </div> */}
