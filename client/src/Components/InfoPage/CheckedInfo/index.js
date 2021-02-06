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

const [checked, setChecked] = useState([
		{ name: 'one',
			id:1,
			status:false,
		},
	  { name: 'two',
	  	id:2,
	  	status:false,
  	},
	{name: "three",
		id:3,
		status:false,
	},
	{name:'four',
		id:4,
		status:false,
	},
	{name:'five',
		id:5,
		status:false,
	},
  {	name: 'six',
		id:6,
		status:false,
	},
	{name:'seven',
		id:7,
		status:false,
	},
	{name:'eight',
		id:8,
		status:false,
	},
	{name:'nine',
		id:9,
		status:false,
	}
]);

const handleChange = (event) => {
	let {id} = event.target
	console.log(id);
  setChecked(prev=> prev.map((el)=>{
		if(el.id == id){
	     if(el.status===true)
			 {
			 return {...el, status:false}}
			 if(!el.status)
			 {return {...el, status: true}} 
	}
		else 	return el
		}	))
	}

	
	return (
	<div id={style.respTable}>
<div id={style.respTableCaption}>
<h1>Checks document</h1>
<div id={style.respTableBody}>
<div className={style.respTableRow}>
<div className={style.tableBodyCell}>
<FormControlLabel  control={<GreenCheckbox
        id={checked[0].id}
        checked={true}
        onChange={handleChange}
				color="default"
        inputProps={{ 'aria-label': 'primary checkbox' }}
				name="checkedG"
/>}></FormControlLabel>{infoCard.document}
</div>
<div className={style.tableBodyCell}>
<FormControlLabel  control={<GreenCheckbox
        id={checked[0].id}
        checked={true}
        onChange={handleChange}
				color="default"
        inputProps={{ 'aria-label': 'primary checkbox' }}
				name="checkedG"
/>}></FormControlLabel>{infoCard.document}
</div>
<div className={style.tableBodyCell}>
<FormControlLabel  control={<GreenCheckbox
        id={checked[0].id}
        checked={true}
        onChange={handleChange}
				color="default"
        inputProps={{ 'aria-label': 'primary checkbox' }}
				name="checkedG"
/>}></FormControlLabel>{infoCard.document}
</div>
</div>
<div className={style.respTableRow}>
<div className={style.tableBodyCell}>
<FormControlLabel  control={<GreenCheckbox
        id={checked[0].id}
        checked={true}
        onChange={handleChange}
				color="default"
        inputProps={{ 'aria-label': 'primary checkbox' }}
				name="checkedG"
/>}></FormControlLabel>{infoCard.document}
</div>
<div className={style.tableBodyCell}>
<FormControlLabel  control={<GreenCheckbox
        id={checked[0].id}
        checked={true}
        onChange={handleChange}
				color="default"
        inputProps={{ 'aria-label': 'primary checkbox' }}
				name="checkedG"
/>}></FormControlLabel>{infoCard.document}
</div>
<div className={style.tableBodyCell}>
<FormControlLabel  control={<GreenCheckbox
        id={checked[0].id}
        checked={true}
        onChange={handleChange}
				color="default"
        inputProps={{ 'aria-label': 'primary checkbox' }}
				name="checkedG"
/>}></FormControlLabel>{infoCard.document}
</div>
</div>

</div>
</div>

</div>
	)
}

export default CheckedInfo
