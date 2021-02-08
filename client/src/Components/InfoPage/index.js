
import React, {useState } from 'react'
import {useParams} from 'react-router-dom'
import docList from '../MainPage/ScrollPart/docList'
import CheckedInfo from './CheckedInfo';
import ImagePart from './ImagePart';
import InfoBox from './InfoBox';
import style from './style.module.css';

function InfoPage() {

const {id} = useParams();
const [infoCard, setInfoCard] = useState(docList.filter(el=>(el.id.id == id)));
		return (
<div className={style.flex}>
{	infoCard && <><InfoBox infoCard={infoCard}/></> }
{ infoCard && <><CheckedInfo infoCard={infoCard}/></>}
<ImagePart/>
</div>

		


			
		)
	}

export default InfoPage
