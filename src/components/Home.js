import React from 'react'
import logoSearch from '../assets/images/lupaBuscar.png'

function Home() {
    return (
        <div className="home">
            <div className="card-message">
                <img src={logoSearch} alt="No dejes de buscar"/>
                <div className="card-textbox">
                    <h3>Bienvenido a Mercado Libre Argentina</h3>
                    <small className="card-smalltitle">La comunidad de compra y venta online más grande de América Latina.</small>
                </div>
            </div>
        </div>
    )
}

export default Home
