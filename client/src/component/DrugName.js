import React ,{ useState,useEffect } from 'react'

// section for card of each drug and their info
export default function DrugName(props) {
  // need to create seprate variable because in useeffect usestate was not working {storing res data}
  const [Rishabh, setrishabh] = useState(null);
  const [strength, setstrength] = useState(null);
  const [route, setroute] = useState(null);
  const [product, setproduct] = useState(null);
  const [brand, setbrand] = useState(null);
  
  ;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4ed4593c27mshc373108f3fe70fcp1d3bcfjsn5bd331a6289a',
      'X-RapidAPI-Host': 'drug-info-and-price-history.p.rapidapi.com'
    }
  };

  useEffect(()=>{
//  api for collecting information about drug
    fetch(`https://drug-info-and-price-history.p.rapidapi.com/1/druginfo?drug=${props.Name}`, options)
	.then(response => response.json())
	.then((response )=>{
    // console.log(response);
    setrishabh(response[0].dosage_form);
    setstrength(response[0].active_ingredients[0].strength);
    setbrand(response[0].brand_name)
    setproduct(response[0].product_type  )
    setroute(response[0].route[0])
   
  })
	.catch(err => console.error(err));


  },[ props.Name])
  

  return (

    // card html-----------
    <>
    
    <div className="card">
            <div className="card-front">
              <div className="N">

               {props.Name}
              </div>
                
            </div>
            <div className="card-back">
                
                <div className="name">{props.Name}</div>
                <div className="about">
                    <div className="info"><span>STRENGTH:</span>{strength} </div>
                    <div className="info"><span>DOSAGE_FORM:</span>{Rishabh}</div>
                    <div className="info"><span>ROUTE:</span>{route}</div>
                    <div className="info"><span>PRODUCT_TYPE:</span>{product} </div>
                    <div className="info"><span>BRAND_NAME:</span>{brand} </div>
                    
                </div>
                
            </div>
        </div>
   
    
    </>
  )
}
