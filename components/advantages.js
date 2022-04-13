import { Card, CardContent, CardHeader, CardMedia } from '@mui/material';

export default function Advantages() {
    return (
        <>
            <Card sx={{ my: '1em' }}>
                <CardHeader
                    title="Employee Benefits"
                    subheader="Vorteile für unsere Mitarbeiter"
                />
                <CardMedia component="img" image="/benefits.jpg" height="140" />
                <CardContent>
                    <p>
                        Wir von der Better Work GmbH legen sehr viel Wert auf
                        ein breit aufgestgelltes &#34;Employee-Benefits&#34;
                        Angebot. Da die Gesundheit unserer Mitarbeiter für uns
                        wichtig ist, bieten wir breit gefächerte möglichkeiten,
                        den eigenen Körper und Geist in Schwung zun halten.
                    </p>
                </CardContent>
            </Card>
            <Card sx={{ my: '1em' }}>
                <CardHeader title="Gesundheit" />
                <CardContent>
                    <ul>
                        <li>
                            Wellness/- und Fitnesscenter auf dem Firmengelände
                        </li>
                        <li>
                            Beiträge zur Kranken/- und Unfallversicherung sowie
                            zulagen zu Augen/- und Zahnbehandlungen
                        </li>
                        <li>
                            Die möglichkeit, sich eine zweite Meinung von einem
                            unserer Firmeninternen Fachärzten einzuholen
                        </li>
                        <li>
                            Diverse Therapiemöglichkeiten mit kurzen Wartezeiten
                        </li>
                        <li>frisches Obst steht für Mitarbeiter bereit</li>
                    </ul>
                </CardContent>
            </Card>
            <Card sx={{ my: '1em' }}>
                <CardHeader title="Finanziell" />
                <CardContent>
                    <p>
                        Des Weiteren sind Wir der Ansicht, dass auch
                        &#34;Monetary Benefits&#34; zu einem gesunden
                        Arbeitsklima beitragen. Bei uns erhalten die
                        Arbeitnehmer zusätzlich zu Dingen wie diverse
                        Möglichkeiten auf Bonuszahlungen und Weihnachtsgeld auch
                        ein 13. Gehalt. Wir übernehmen einen großen Teil des
                        Rentenbeitrags und bieten auch eigene
                        &#34;Retirement-Plan&#34; Pakete an. Und sogar der
                        Dienstwagen kann mit Absprache privat genutzt werden.
                    </p>
                    <p>
                        Die Unternehmensausrüstung und Hardware ist zwar immer
                        auf dem neusten Stand der Dinge, jedoch haben wir keine
                        Bedenken gegen die Benutzung eigener Geräte sofern
                        erwünscht. Die Möglichkeit zum Homeoffice besteht
                        ebenfalls.
                    </p>
                    <p>
                        Alles in allem sind wir uns von der Better Work GmbH
                        zwar sicher, im Bereich der &#34;Employee Benefits&#34;
                        gut aufgestellt zu sein, jedoch hören wir immer gerne
                        neue Vorschläge von unseren Mitarbeitern, wie wir unser
                        Angebot weiter verbessern können.
                    </p>
                </CardContent>
            </Card>
        </>
    );
}
