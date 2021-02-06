import React, { useState } from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import style from './style.module.css'

function InfoBox({infoCard}) {

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
<div id={style.respTableBody}>
<div className={style.respTableRow}>
<div className={style.tableBodyCell}>
<Checkbox
        id={checked[0].id}
        checked={checked[0].status}
        onChange={handleChange}
				color="default"
        inputProps={{ 'aria-label': 'primary checkbox' }}
/>{infoCard.document}
</div>
<div className={style.tableBodyCell}>
<Checkbox
        id={checked[1].id}
        checked={checked[1].status}
        onChange={handleChange}
				color="default"
        inputProps={{ 'aria-label': 'primary checkbox' }}
/>{infoCard.document}
</div>
<div className={style.tableBodyCell}>
<Checkbox
        id={checked[2].id}
        checked={checked[2].status}
        onChange={handleChange}
				color="default"
        inputProps={{ 'aria-label': 'primary checkbox' }}
/>{infoCard.document}
</div>
</div>
<div className={style.respTableRow}>
<div className={style.tableBodyCell}>
<Checkbox
        id={checked[3].id}
        checked={checked[3].status}
        onChange={handleChange}
				color="default"
        inputProps={{ 'aria-label': 'primary checkbox' }}
/>{infoCard.document}
</div>
<div className={style.tableBodyCell}>
<Checkbox
        id={checked[4].id}
        checked={checked[4].status}
        onChange={handleChange}
				color="default"
        inputProps={{ 'aria-label': 'primary checkbox' }}
/>{infoCard.document}
</div>
<div className={style.tableBodyCell}>
<Checkbox
        id={checked[5].id}
        checked={checked[5].status}
        onChange={handleChange}
				color="default"
        inputProps={{ 'aria-label': 'primary checkbox' }}
/>{infoCard.document}
</div>
</div>
<div className={style.respTableRow}>
<div className={style.tableBodyCell}>
<Checkbox
        id={checked[6].id}
        checked={checked[6].status}
        onChange={handleChange}
				color="default"
        inputProps={{ 'aria-label': 'primary checkbox' }}
/>{infoCard.document}
</div>
<div className={style.tableBodyCell}>
<Checkbox
        id={checked[7].id}
        checked={checked[7].status}
        onChange={handleChange}
				color="default"
        inputProps={{ 'aria-label': 'primary checkbox' }}
/>{infoCard.document}
</div>
<div className={style.tableBodyCell}>
<Checkbox
        id={checked[8].id}
        checked={checked[8].status}
        onChange={handleChange}
				color="default"
        inputProps={{ 'aria-label': 'primary checkbox' }}
/>{infoCard.document}
</div>
</div>
</div>
</div>

</div>
	)
}

export default InfoBox
