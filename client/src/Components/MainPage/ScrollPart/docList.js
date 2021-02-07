const docList = [
	{
		id:{
			status:false, 
			id: 1
		},
		document: {
      status:false,
			document: "passport"
		}
		,
		name: {
      status:false,
      name:"Иван Иванович"
		},
		surname: {
      status:false,
      surname:"Иванов"
		},
		dateOfBirth: {
      status:false,
      date:'23.05.1990'
		},
		placeOfBirth: {
			status:false,
			place: 'Москва'
		},
		gender: {
			status:false,
			gender: 'муж.'
		},
		serialNumber: {
			status:false,
			serialNumber:'50 09 2190806'
		},
    dateOfIssue: {
			status:false,
			dateOfIssue:'24.10.2010'
		},
		departmentCode: {
			status:false,
			code:'540-513'
		},
   registration: {
		 status:false,
		registration: "Москва, Варшавское шоссе, дом 5, кв. 25"
	 }
	},
	{
		id:{
			status:false, 
			id: 2
		},
		document: {
      status:false,
			document: "passport"}
		,
		name: {
      status:false,
      name:"Ксения Ивановна"
		},
		surname: {
      status:false,
      surname:"Иванова"
		},
		dateOfBirth: {
      status:false,
      date:'23.05.1990'
		},
		placeOfBirth: {
			status:false,
			place: 'Москва'
		},
		gender: {
			status:false,
			gender: 'жен.'
		},
		serialNumber: {
			status:false,
			serialNumber:'50 09 2197007'
		},
    dateOfIssue: {
			status:false,
			dateOfIssue:'24.10.2010'
		},
		departmentCode: {
			status:false,
			code:'540-513'
		},
   registration: {
		 status:false,
		registration: "Москва, Варшавское шоссе, дом 5, кв. 25"
	 }
	},
	{
		id:{
			status:false, 
			id: 3
		},
		document: {
      status:false,
			document: "passport"}
		,
		name: {
      status:false,
      name:"Мария Ивановна"
		},
		surname: {
      status:false,
      surname:"Иванова"
		},
		dateOfBirth: {
      status:false,
      date:'23.05.1995'
		},
		placeOfBirth: {
			status:false,
			place: 'Москва'
		},
		gender: {
			status:false,
			gender: 'жен.'
		},
		serialNumber: {
			status:false,
			serialNumber:'50 09 2190507'
		},
    dateOfIssue: {
			dateOfIssue:'24.10.2015',
			status:false
		},
		departmentCode: {
			status:false,
			code:'540-513'
		},
   registration: {
		 status:false,
		registration: "Москва, Варшавское шоссе, дом 5, кв. 25"
	 }
	}
	// ,
	// {
	// 	id: 4,
	// 	document: {
  //     status:false,
	// 		document: "passport"}
	// 	,
	// 	name: {
  //     status:false,
  //     name:"Игорь Алексеевич"
	// 	},
	// 	surname: {
  //     status:false,
  //     surname:"Иванов"
	// 	},
	// 	dateOfBirth: {
  //     status:false,
  //     date:'23.05.1967'
	// 	},
	// 	placeOfBirth: {
	// 		place: 'Москва',
	// 		status:false
	// 	},
	// 	gender: {
	// 		gender: 'муж.',
	// 		status:false
	// 	},
	// 	serialNumber: {
	// 		serialNumber:'50 09 2190557',
	// 		status:false
	// 	},
  //   dateOfIssue: {
	// 		dateOfIssue:'24.10.2000',
	// 		status:false
	// 	},
	// 	departmentCode: {
	// 		code:'540-513',
	// 		status:false
	// 	},
  //  registration: {
	// 	registration: "Москва, Варшавское шоссе, дом 5, кв. 25",
	// 	status:false
	//  }
	// },
	// {
	// 	id: 5,
	// 	document: {
  //     status:false,
	// 		document: "passport"}
	// 	,
	// 	name: {
  //     status:false,
  //     name:"Ольга Константиновна"
	// 	},
	// 	surname: {
  //     status:false,
  //     surname:"Киршанова"
	// 	},
	// 	dateOfBirth: {
  //     status:false,
  //     date:'20.05.1939'
	// 	},
	// 	placeOfBirth: {
	// 		place: 'Москва',
	// 		status:false
	// 	},
	// 	gender: {
	// 		gender: 'жен.',
	// 		status:false
	// 	},
	// 	serialNumber: {
	// 		serialNumber:'50 09 2190056',
	// 		status:false
	// 	},
  //   dateOfIssue: {
	// 		dateOfIssue:'24.10.2015',
	// 		status:false
	// 	},
	// 	departmentCode: {
	// 		code:'540-513',
	// 		status:false
	// 	},
  //  registration: {
	// 	registration: "Москва, Варшавское шоссе, дом 5, кв. 25",
	// 	status:false
	//  }
	// },
	// {
	// 	id: 6,
	// 	document: {
  //     status:false,
	// 		document: "passport"}
	// 	,
	// 	name: {
  //     status:false,
  //     name:"Мария Ивановна"
	// 	},
	// 	surname: {
  //     status:false,
  //     surname:"Иванова"
	// 	},
	// 	dateOfBirth: {
  //     status:false,
  //     date:'23.05.1995'
	// 	},
	// 	placeOfBirth: {
	// 		place: 'Москва',
	// 		status:false
	// 	},
	// 	gender: {
	// 		gender: 'жен.',
	// 		status:false
	// 	},
	// 	serialNumber: {
	// 		serialNumber:'50 09 2890007',
	// 		status:false
	// 	},
  //   dateOfIssue: {
	// 		dateOfIssue:'24.10.2005',
	// 		status:false
	// 	},
	// 	departmentCode: {
	// 		code:'540-513',
	// 		status:false
	// 	},
  //  registration: {
	// 	registration: "Москва, Варшавское шоссе, дом 85, кв. 255",
	// 	status:false
	//  }
	// }
]
export default docList
