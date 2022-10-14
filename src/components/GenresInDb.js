import React, { Component } from 'react'
import Genre  from './Genre';

class GenresInDb extends Component {
    constructor() {
        super();
        this.state = {
            genresList: []
        };
    }

    componentDidMount() {
        fetch('/api/categorias')
            .then(response => response.json())
            .then(genres => {
                console.table(genres.data);
                this.setState({
                    genresList: genres.data
                })
            })
            .catch(err => console.error(err))
        ;
    }

    addClass() {
        document.querySelector('.genresCard').classList.toggle('bg-secondary');
    }

    render() { 
        return (
        <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 onMouseOver={() => this.addClass()}
                                className="m-0 font-weight-bold text-gray-800"
                            >Categorias de Producto</h6>
                        </div>
                        <div className="card-body genresCard">
                            <div className="row">
                            {
                                    this.state.genresList.map((genre,index)=>{
                                        console.log(genre.nombre);
                                        //console.log(index);
                                        return  <Genre  {...genre}  key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
           
        </React.Fragment>
        )
    }
}
 
export default GenresInDb;