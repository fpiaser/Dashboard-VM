import React, { useState, useEffect, useRef } from "react";
import imagenFondo from '../assets/images/mandalorian.jpg';
import GenresInDb from './GenresInDb';
import ContentRowMovies from './ContentRowMovies';
function ContentRowTop(){

const [lastProd, setLastProd] = useState(0);

useEffect(() => { 
    fetch("/api/products")
      .then((res) => res.json()) 
      .then((data) => {
        setLastProd(data.data[data.data.length-1])
        console.log("lastProd", data.data[data.data.length-1]); 
      }) 
      .catch((err) => console.error(err)); 
  }, []);

    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowMovies />
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Ultimo Producto Cargado</h5>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={lastProd.image} alt=" Foto Producto "/>
									</div> 
									<h5>{lastProd.nombre}</h5> 
									<p>{lastProd.descripcion}</p>
									<a className="btn btn-danger" rel="nofollow" href={"http://localhost:3000/product/"+lastProd.id}>Ver Detalle</a>
								</div>
							</div> 
						</div>
						{/*<!-- End content row last movie in Data Base -->*/}

						{/*<!-- Genres in DB -->*/}
						<GenresInDb />

						{/*<!--End Genres In Db-->*/}		
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;