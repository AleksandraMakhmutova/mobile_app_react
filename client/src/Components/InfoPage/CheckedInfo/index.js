import React, { useState } from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import style from './style.module.css'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';


const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

function CheckedInfo({infoCard}) {

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
<h1>Checks document</h1>
<div id={style.respTableBody}>
<div className={style.respTableRow}>

<div className={style.tableBodyCell}>
<FormControlLabel  control={<GreenCheckbox
        value={position[2]}
        checked={checked[0].name.status}
        onChange={handleChange}
				color="default"
        inputProps={{ 'aria-label': 'primary checkbox' }}
				name="checkedG"
/>} label={checked[0].name.name}/>
</div>
<div className={style.tableBodyCell}>
<FormControlLabel  control={<GreenCheckbox
        value={position[3]}
        checked={checked[0].surname.status}
        onChange={handleChange}
				color="default"
        inputProps={{ 'aria-label': 'primary checkbox' }}
				name="checkedG"
/>} label={checked[0].surname.surname}/>
</div>
</div>




<div className={style.respTableRow}>


<div className={style.tableBodyCell}>
<FormControlLabel  control={<GreenCheckbox
        value={position[1]}
        checked={checked[0].document.status}
        onChange={handleChange}
				color="default"
        inputProps={{ 'aria-label': 'primary checkbox' }}
				name="checkedG"
/>} label={checked[0].document.document}/>
</div>
<div className={style.tableBodyCell}>
<FormControlLabel  control={<GreenCheckbox
        value={position[4]}
        checked={checked[0].dateOfBirth.status}
        onChange={handleChange}
				color="default"
        inputProps={{ 'aria-label': 'primary checkbox' }}
				name="checkedG"
/>} label={checked[0].dateOfBirth.dateOfBirth}/>
</div>
</div>



<div className={style.respTableRow}>
<div className={style.tableBodyCell}>
<FormControlLabel  control={<GreenCheckbox
         value={position[5]}
        checked={checked[0].placeOfBirth.status}
        onChange={handleChange}
				color="default"
        inputProps={{ 'aria-label': 'primary checkbox' }}
				name="checkedG"
/>} label={checked[0].placeOfBirth.placeOfBirth}/>
</div>
<div className={style.tableBodyCell}>
<FormControlLabel  control={<GreenCheckbox
        value={position[6]}
        checked={checked[0].gender.status}
        onChange={handleChange}
				color="default"
        inputProps={{ 'aria-label': 'primary checkbox' }}
				name="checkedG"
/>} label={checked[0].gender.gender}/>
</div>
</div>

</div>
</div>
</div>
</div>
	)
}

export default CheckedInfo
