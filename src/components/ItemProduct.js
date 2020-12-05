import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Spinner from './Spinner'
import Getitems from './Getitems'
import ItemProductDetail from './ItemProductDetail'
import logoSearch from '../assets/images/lupaBuscar.png'
import logoSearchError from '../assets/images/lupaError.png'
import '../assets/css/Items.scss'

function ItemProduct() {
    const [loader, setLoader] = useState(true)
    const [searchStatus, setSearchStatus] = useState()
    const [items, setItems] = useState()
    const history = useHistory()

    useEffect(() => {
        const getItem = () => {
            let search = window.location.pathname.toString().split('/')
            search = search[2]

            if (search) {
                Getitems.getItem(search)
                    .then(response => {
                        setSearchStatus(200)
                        setItems(response.item)
                        setLoader(false)
                    })
                    .catch(error => {
                        setSearchStatus(500)
                        setLoader(false)
                    })
            } else {
                setLoader(false)
            }
        }

        getItem();

        return history.listen((location) => {
            getItem()
        })

    }, [history]);

    const showResults = () => {
        if (searchStatus === 200 && items) {
            return (
                <ItemProductDetail items={items} />
            )
        } else {
            let title
            let smallTitle
            let imageMsg

            if (searchStatus === 200) {
                title = 'No hay publicaciones que coincidan con tu búsqueda.'
                smallTitle = 'Utilizá palabras más genéricas o menos palabras.'
                imageMsg = logoSearch;
            } else {
                title = '¡Ooops!, ha ocurrido un error al procesar tu búsqueda.'
                smallTitle = 'Por favor inténtalo nuevamente, ¡nunca dejes de buscar!.'
                imageMsg = logoSearchError;
            }

            return (
                <div className="items">
                    <div className="card-message">
                        <img src={imageMsg} alt="Nunca dejes de buscar" />
                        <div className="items-textbox">
                            <h3>{title}</h3>
                            <small className="items-smalltitle">{smallTitle}</small>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <div>
            { loader ? <Spinner /> : showResults()}
        </div>
    )
}

export default ItemProduct
