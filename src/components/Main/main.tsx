import style from './main.module.scss';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import john from '../../assets/john.png';
import peter from '../../assets/peter.png';
import elise from '../../assets/elise.png';
import morten from '../../assets/morten.png';
import location from '../../assets/leolov-location.png';

export const Main = () => {
    return (
        <>
        <section className={style.sectionOne}>
            <article>
                <h3>Familieret</h3>
                <p>Familieret er en ret alle har.
                    Har du en familie har du sikkert ret til familieret.
                    Medmindre du altid er den der tror du har ret.
                    Så kan vi desværre ikke hjæple dig.
                </p>
            </article>
            <article>
                <h3>Ejendomsret</h3>
                <p>Har du købt et hus og
                    fortrudt eller er du blevet
                    svindlet? Fortvivl ej. Vi kan
                    hjælpe dig med at komme
                    af med huset, eller eventuelt sagsøge
                    vedkommende der solgte
                    dig det.
                </p>
            </article>
            <article>
                <h3>Konkurs</h3>
                <p>Er du gået konkurs ville vi
                    rigtig gerne hjælpe, men
                    det kan vi desværre ikke. Vi
                    er alle advokater med fede
                    biler her så har du ingen
                    penge får du ingen hjælp.
                </p>
            </article>
            <article>
                <h3>Selskabsret</h3>
                <p>Selskabsret. Ved du heller
                    aldrig hvilken ret du skal
                    servere til et stort selskab?
                    Heller ikke os. Heldigvis har
                    vi en mand i udlandet der
                    ved en masse om dette så
                    henvend dig i dag.
                </p>
            </article>
        </section>
        <section className={style.sectionTwo}>
            <figure>
                <img src={image1} alt="Image 1" />
                <figcaption>
                    <h3>INTET PROBLEM</h3>
                    <p>Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis mod alt forventning skulle opleve at støde på et retligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen.
                    </p>
                    <p>Det er sådan vi har skabt en forretning det ikke kan andet end at vokse!</p>
                </figcaption>
            </figure>
            <figure>
                <figcaption>
                    <h3>EVIG GARANTI</h3>
                    <p>Leo-lov har altid været det advokatsfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle opleve at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen.</p>
                    <p>Det er sådan vi har skabt en forretning det ikke kan andet end at vokse!</p>
                </figcaption>
                <img src={image2} alt="Image 2" />
            </figure>
        </section>
        <section className={style.sectionThree}>
            <h1>MØD HOLDET</h1>
            <div className={style.grid}>
                <figure>
                    <img src={john} alt="Medarbejder John" />
                    <figcaption>
                        <h4>John Harbinger</h4>
                        <p>"Jeg er den mest successfulde advokat i firmaet. I hvert fald mere end Peter."</p>
                    </figcaption>
                </figure>
                <figure>
                    <img src={peter} alt="Medarbejder Peter" />
                    <figcaption>
                        <h4>Peter Parker</h4>
                        <p>"Jeg holder af kaffe og så er jeg helt enormt successfuld. Meget mere end John."</p>
                    </figcaption>
                </figure>
                <figure>
                    <img src={elise} alt="Medarbejder Elise" />
                    <figcaption>
                        <h4>Elise Li</h4>
                        <p>"Uden ret og lov, kunne vi ligeså godt bo i en skov. Sådan har jeg altid sagt."</p>
                    </figcaption>
                </figure>
                <figure>
                    <img src={morten} alt="Medarbejder Morten" />
                    <figcaption>
                        <h4>Morten Nate</h4>
                        <p>"Jeg er født på landet. På landet er der ingen ret og lov. Det er det vilde vest derude."</p>
                    </figcaption>
                </figure>
            </div>
        </section>
        <section className={style.sectionFour}>
            <figure>
                <img src={location} alt="Leo-lov Location" />
                <figcaption>
                    <h2>HER BOR VI</h2>
                    <p>Vi har valgt at bosætte os i solen!</p>
                    <p>Her er dejlig varmt og ikke ret mange fattige mennesker. Det nyder vi rigtig meget.</p>
                    <p>"Hvis du har råd til at tage til Sechellerne har du råd til os". Det er et af vores utallige motto'er</p>
                    <ul>
                        <li>Leo-Lov ApS</li>
                        <li>Maldive rd. 22</li>
                        <li>Seychelles</li>
                    </ul>
                </figcaption>
            </figure>
        </section>
        </>
    )
}