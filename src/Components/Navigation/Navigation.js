
import React, {useState} from "react";
import styled from "styled-components";
import avatar from '../../img/avatar.png'
import { menuItems } from '../../utils/menuItems';
import { signout } from '../../utils/Icons';


function Navigation({active, setActive}) {
    return(
        <NavStyled>
            <div className="user-con">
                <img src={avatar} alt="" />
                <div className="text">
                    <h2>Mike</h2>
                    <p>Your Money</p>
                </div>
            </div>
            <ul className="menu-items">
                {menuItems.map((item) => {
                    return <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active':''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}                
            </ul>

            <div className="bottom-nav">
                <li>
                    {signout} <span>Sign Out</span>
                </li>
            </div>
        </NavStyled>
    )
    
}

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 374px;
    height: 100%;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    .user-con{
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding: .2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        }
        h2{
            color: rgba(34, 34, 96, 1);
        }
        p{
            color: rgba(34, 34, 96, .6);
        }
    }

    .menu-items{
        flex: 1; /* ya no 1 */
        display: flex;
        flex-direction: column;
        li{
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: .6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: rgba(34, 34, 96, .6);
            padding-left: 1rem;
            position: relative;
            i{
                color: rgba(34, 34, 96, 0.6);
                font-size: 1.4rem;
                transition: all .4s ease-in-out;
            }
        }
    }

    .active{
        color: rgba(34, 34, 96, 1) !important;
        i{
            color: rgba(34, 34, 96, 1) !important;
        }
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: #222260;
            border-radius: 0 10px 10px 0;
        }
    }

    /* SIGN OUT */
    .bottom-nav {
        button {
        background: none;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        color: rgba(34,34,96,.6);
        font-size: 1.2rem;

        &:hover { color: var(--primary-color); }
        }
    }

    /* 2) MEDIA QUERIES */

    /* laptop */
    @media (max-width: 1200px) {
        width: 250px;
    }

    /* tablet: sólo iconos verticales */
    @media (max-width: 1000px) {
        width: auto;
        padding: 1rem;
        flex-direction: row;

        /* — Avatar (izquierda) — */
        .user-con {
        display: flex;
        flex: 0 0 auto;
        }
        /* Ocultamos nombre */
        .user-con .text {
            display: none;
        }

        /* — Iconos de menú (centro) — */
        .menu-items {
        flex: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
        margin: 0;
        padding: 0;
        list-style: none;
        }
        .menu-items li {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        position: relative;
            /* Ocultamos texto de los ítems */
            .span {
            display: none;
            }
        }
        
        .bottom-nav li{
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
            position: relative;
            /* Centrar con los demas objetos del menu, tanto el icono como el texto */
            margin: 0 auto;



        }
            
    }

  /* móvil: navbar top-bar horizontal */
    @media (max-width: 768px) {

        body{ padding-top: 60px; }
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;

        width: 100%;
        height: 60px;
        padding: 0 1rem;

        display: flex;
        flex-direction: row;         /* fila */
        align-items: center;
        justify-content: space-between;
        flex-wrap: nowrap;        /* evita que algo se baje */
        background: rgba(252, 246, 249, 0.9);
        border: none;
        border-radius: 0;

        /* — Avatar (izquierda) — */
        .user-con {
        display: flex;
        flex: 0 0 auto;
        }
        /* Ocultamos nombre */
        .user-con .text {
            display: none;
        }

        /* — Iconos de menú (centro) — */
        .menu-items {
        flex: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
        margin: 0;
        padding: 0;
        list-style: none;
        }
        .menu-items li {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        position: relative;
            /* Ocultamos texto de los ítems */
            .span {
            display: none;
            }
        }

              /* Pasamos de grid a flex para cada <li> */
        /* Pasamos de grid a flex para cada <li> */
        li {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0;
            flex: 0 0 auto;          /* que no se encoja ni crezca */
        }

        .bottom-nav {
            flex: 0 0 auto;
            /*button*//* si usas <button> */ 
            li { 
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0;

                span {
                    display: none;
                }
            }
        }

        span{
            font-size: 0.9rem;
        }
    }

`;

export default Navigation