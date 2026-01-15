import style from './Nav.module.scss'

export const Nav = () => {
    return (
        <nav className={style.nav}>
            <ul>
                <li>
                    <a href="#">Hjem</a>
                </li>
                <li>
                    <a href="#">Advokaterne</a>
                </li>
                <li>
                    <a href="#">Om LeoLov</a>
                </li>
                <li>
                    <a href="#">Kontakt</a>
                </li>
            </ul>
            <div>Leo-Lov</div>
        </nav>
    )
}