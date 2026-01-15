import mainPicture from '../../assets/mainPicture.jpg';
import style from './header.module.scss'

export const Header = () => {
    return (
        <>
            <header className={style.header}>
                <div>
                    <h1><span>Leo</span>-Lov</h1>
                    <h5>Lov og ret kan være et plaster! Hvis du ellers har knaster!</h5>
                </div>
                <img src={mainPicture} alt="Header picture" />
            </header>
        </>
    )
}