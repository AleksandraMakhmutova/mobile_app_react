import React, {useState } from 'react'
import {useParams} from 'react-router-dom'
import docList from '../MainPage/ScrollPart/docList'
import CheckedInfo from './CheckedInfo';
import ImagePart from './ImagePart';
import InfoBox from './InfoBox';


function InfoPage() {

const {id} = useParams();
const [infoCard, setInfoCard] = useState(docList.filter(el=>(el.id == id)));

		return (
<div className="flex">
	{	infoCard && <><InfoBox infoCard={infoCard[0]}/></> }
	{ infoCard && <><CheckedInfo infoCard={infoCard[0]}/></>}
<ImagePart/>
</div>

		


			
		)
	}

export default InfoPage
