import React, { useEffect, useState } from 'react';
import { Carousel } from '../components/Carousel';
import { VentanaProducto } from '../components/VentanaProducto';
import { Link } from 'react-router-dom';

import "../styles/flex-item.scss";
import "../styles/home.scss";

const ofertas = [
    { id: 1, img: "../../assets/productos/D_Q_NP_935558-MLA45017514805_022021-AB.webp", precio: "5499", oferta: { precioAnterior: "8000", disponible: true}, titulo: "Heladera w1321 asdas da 21321 2e", envio: { disponible: true, tipo: "basico"} },
    { id: 2, img: "../../assets/productos/D_Q_NP_935558-MLA45017514805_022021-AB.webp", precio: "5499", oferta: { precioAnterior: "8000", disponible: true}, titulo: "Heladera w1321 asdas da 21321 2e", envio: { disponible: true, tipo: "completo"} },
    { id: 3, img: "../../assets/productos/D_Q_NP_935558-MLA45017514805_022021-AB.webp", precio: "5499", oferta: { precioAnterior: "8000", disponible: true}, titulo: "Heladera w1321 asdas da 21321 2e", envio: { disponible: false, tipo: "null"} },
    { id: 4, img: "../../assets/productos/D_Q_NP_935558-MLA45017514805_022021-AB.webp", precio: "5499", oferta: { precioAnterior: "8000", disponible: true}, titulo: "Heladera w1321 asdas da 21321 2e", envio: { disponible: true, tipo: "basico"} },
    { id: 5, img: "../../assets/productos/D_Q_NP_935558-MLA45017514805_022021-AB.webp", precio: "5499", oferta: { precioAnterior: "8000", disponible: true}, titulo: "Heladera w1321 asdas da 21321 2e", envio: { disponible: true, tipo: "basico"} }
]

export const Home = () => {

    const [ofertasDisponibles, setOfertasDisponibles] = useState([]);
    
    const ofertasHome = () => {
        const encontrarOferta = ofertas.filter( o => o.oferta.disponible === true )
        setOfertasDisponibles(encontrarOferta);
    }

    useEffect( () => {
        ofertasHome()
    }, [])

    return (
        <>
            <Carousel />
            <div className='container'>
                <section className='ofertas'>
                    <h2 className='titulo__seccion'>Ofertas</h2>
                    <div className='flex-item'>
                        {
                            ofertasDisponibles.map( producto => (
                                <VentanaProducto key={ producto.id } { ...producto }/>
                            ))
                        }
                    </div>
                </section>
                <section className='subscripcion'>
                    <div className='subscripcion__costo'>
                        <p className='costo-nivel'>Subscribite al nivel 6</p>
                        <div className='costo-info'>
                            <p>Desde</p>
                            <p><span className='info-precio'>$ 599</span>/mes</p>
                            <p>Según tu nivel</p>
                        </div>
                    </div>
                    <p className='subscripcion__sub'>Conseguí los mejores beneficios en Mercado Libre y Mercado Pago</p>
                    <div className='costo-beneficios'>
                        <div className='beneficios-info'>
                            <img src="../../assets/d+.svg" alt="beneficio-1 disney" />
                            <p>Disney+ sin cargo</p>
                        </div>
                        <div className='beneficios-info'>
                            <img src="../../assets/star+.svg" alt="beneficio-2 star" />
                            <p>Star+ sin cargo</p>
                        </div>
                        <div className='beneficios-info'>
                            <img src="../../assets/truckgiftv4@2x.png" alt="beneficio-3 envios" />
                            <p>Envíos gratis y rápidos desde $ 4.000 y 45% OFF en envíos de menos de $ 4.000</p>
                        </div>
                    </div>
                    <div className='subscripcion__btn'>
                        <div className='subscripcion-esp'>
                            <Link to="/">Subscribete</Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
};
