import React from "react";
import burgerIcon from "../../assets/burger.svg";
import UnionIcon from "../../assets/Union.svg";
import GeoIcon from "../../assets/Vector.svg";
import UserIcon from "../../assets/uil_user1.svg";
import BuyIcon from "../../assets/BuyIcon.svg";
import likeIkon from "../../assets/Component 1.svg";
import classes from './Header.module.css';
import Search from '../Search/Search';


export default function Headers() {
    return (
        <>
            <div className={classes.firstHeader}>
                <div>
                    <p className={classes.movingText}>#швидкотазручно</p>
                    <p className={classes.movingText}>#buy now</p>
                    <p className={classes.movingText}>#вседлядому</p>
                    <p className={classes.movingText}>#швидкотазручно</p>
                    <p className={classes.movingText}>#buy now</p>
                    <p className={classes.movingText}>#вседлядому</p>
                </div>
            </div>
            <header>
                <nav className={classes.menu}>

                    <div className={classes.leftMenu}>
                        <div className={classes.burgerContainer}>
                            <img src={burgerIcon} alt="Меню" width={30} />
                            <p>Меню</p>
                        </div>

                        <img src={UnionIcon} className={classes.logo} alt="Лого" />

                        <div className={classes.menuItems}>
                            <a href="#products"><p>Товари</p></a>
                            <a href="#rooms"><p>Кімнати</p></a>
                            <a href="#design"><p>Дизайн</p></a>
                        </div>
                    </div>

                    <div className={classes.menuItems}>
                        <div className={classes.logoText}>
                            <img src={GeoIcon} alt="Гео" />
                            <a href="#kyiv"><p>Київ</p></a>
                        </div>
                        <div className={classes.logoText}>
                            <img src={UserIcon} alt="Гео" />
                            <a href="#login"><p>Привіт! Увійдіть в Систему</p></a>
                        </div>
                        <div className={classes.logoGroup}>
                            <img src={BuyIcon} alt="Гео" />
                            <img src={likeIkon} alt="Гео" />
                        </div>
                    </div>
                </nav>
            </header>
            <Search />
        </>
    );
}