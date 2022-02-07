import React, { useEffect, useState } from 'react';
import { Carousel } from './components/Carousel';
import { VentanaProducto } from '../../components/VentanaProducto';
import { Link } from 'react-router-dom';

import { TituloSeccion } from './components/TituloSeccion';
import { TarjetaDescubrir } from './components/TarjetaDescubrir';
import { TarjetaBeneficios } from "./components/TarjetaBeneficios";

import "../../styles/flex-item.scss";
import "../../styles/home.scss";

const ofertas = [
    { id: 1, img: "../../assets/productos/D_Q_NP_935558-MLA45017514805_022021-AB.webp", precio: "5499", oferta: { precioAnterior: "8000", disponible: true}, titulo: "Heladera w1321 asdas da 21321 2e", envio: { disponible: true, tipo: "basico"} },
    { id: 2, img: "../../assets/productos/D_Q_NP_935558-MLA45017514805_022021-AB.webp", precio: "5499", oferta: { precioAnterior: "8000", disponible: true}, titulo: "Heladera w1321 asdas da 21321 2e", envio: { disponible: true, tipo: "completo"} },
    { id: 3, img: "../../assets/productos/D_Q_NP_935558-MLA45017514805_022021-AB.webp", precio: "5499", oferta: { precioAnterior: "8000", disponible: true}, titulo: "Heladera w1321 asdas da 21321 2e", envio: { disponible: false, tipo: "null"} },
    { id: 4, img: "../../assets/productos/D_Q_NP_935558-MLA45017514805_022021-AB.webp", precio: "5499", oferta: { precioAnterior: "8000", disponible: true}, titulo: "Heladera w1321 asdas da 21321 2e", envio: { disponible: true, tipo: "basico"} },
    { id: 5, img: "../../assets/productos/D_Q_NP_935558-MLA45017514805_022021-AB.webp", precio: "5499", oferta: { precioAnterior: "8000", disponible: true}, titulo: "Heladera w1321 asdas da 21321 2e", envio: { disponible: true, tipo: "basico"} }
]

const categorias = [
    { categoria: "perfumes", img: "../../../../assets/categorias/D_NQ_991137-MLA49020685741_022022-C.webp", titulo: "Belleza a un click", descripcion: "Hasta 40% y 3x sin interés", url: "/" },
    { categoria: "vinos", img:"../../../../assets/categorias/D_NQ_709168-MLA49004288849_022022-C.webp", titulo: "Dis de los enamorados", descripcion: "Hasta 30% off en supermercado", url: "/"},
]

const beneficios = [
    { id: 1, titulo: "Subscribiendote al nivel 6", img: "../../../assets/beneficios/comboplus-brand.png", portada: "../../../assets/beneficios/disney-nivel6-mla-mco-mlm@2x.png", beneficio: { disponible: false, descuento: "null", dias: "null" }},
    { id: 2, titulo: "HBO Max", img: "../../../assets/beneficios/comboplus-brand.png", portada: "../../../assets/beneficios/hbo-max-mla-mco-mlc@2x.jpg", beneficio: { disponible: true, descuento: "50%", dias: "7 días gratis" }},
    { id: 3, titulo: "Paramount+", img: "../../../assets/beneficios/comboplus-brand.png", portada: "../../../assets/beneficios/paramount-widget-mla@2x.jpg", beneficio: { disponible: true, descuento: "40%", dias: "7 días gratis" }},
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
                    <TituloSeccion 
                        titulo="Ofertas" 
                        enlace={ {
                            disponible: true, 
                            redirigir: "/", 
                            descripcion: "Ver todas"
                        } }
                    />
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
                <section className='descubri'>
                    <TituloSeccion 
                        titulo="Beneficios de Mercado Puntos" 
                        enlace={ {
                            disponible: true,
                            redirigir: "/",
                            descripcion: "Ver todos los beneficios"
                        } }
                    />
                    <div className='descubri__tarjetas'>
                        {
                            beneficios.map( beneficios => (
                                <TarjetaBeneficios key={ beneficios.id } { ...beneficios }/>
                            ))
                        }
                    </div>
                </section>
            </div>
        </>
    )
};
