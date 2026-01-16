import style from './footer.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
    return (
        <>
            <footer className={style.footer}>
                <section>
                    <h2>Adresse</h2>
                <p>Find os her:</p>
                <ul>
                    <li>Maldive rd. 22</li>
                    <li>Seychelles Islands</li>
                </ul>
                </section>

                <section>
                    <h2>Kontakt</h2>
                <p>Kontakt os her:</p>
                <ul>
                    <li>email@mail.dk</li>
                    <li>Tlf: 0192 3023</li>
                </ul>
                </section>

                <section>
                    <h2>Politik:</h2>
                <p>Vores politik:</p>
                <ul>
                    <li>Privatlivspolitik</li>
                    <li>Cookiepolitik</li>
                    <li>Generalle betingelser</li>
                </ul>
                </section>

                <section>
                    <h2>Sociale Medier:</h2>
                    <div className={style.social}>
                        <FontAwesomeIcon icon={faFacebookF} className={style.icon} />
                        <FontAwesomeIcon icon={faLinkedinIn} className={style.icon} />
                    </div>
                </section>
            </footer>
        </>
    )
}