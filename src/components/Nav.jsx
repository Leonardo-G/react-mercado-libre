import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import "../styles/Nav.scss"

export const Nav = () => {
    return (
        <>
            <div className='navegacion'>
                <div className='contenedor'>
                    <div className='navegacion__superior'>
                        <Link to="/">
                            <img src='../../assets/logo__small.png' alt="logo mercado libre"/>
                        </Link>
                        <form className='busqueda'>
                            <input 
                                type="text"
                                placeholder="Buscar productos, marcas y mas"
                            />
                            <FontAwesomeIcon className='iconInput' icon={ faSearch }/>
                        </form>
                        <div>
                            <img src="../../assets/D_NQ_877425-MLA47306668299_082021-OO.webp" className='imgHeight' alt="subscripcion disney" />
                        </div>
                    </div>
                    <div className='navegacion__inferior'>
                        <div className='inferior--menu'>
                            <a href="/">Categorias</a>
                            <a href="/">Ofertas</a>
                            <a href="/">Historial</a>
                            <a href="/">Supermercado</a>
                            <a href="/">Moda</a>
                            <a href="/">Vender</a>
                            <a href="/">Ayuda</a>
                        </div>
                        <div className='inferior--cuenta'>
                            <a href="/">Creá tu cuenta</a>
                            <a href="/">Ingresá</a>
                            <a href="/">Mis compras</a>
                            <FontAwesomeIcon className='iconKart' icon={ faShoppingCart }/>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
};
