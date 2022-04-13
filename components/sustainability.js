import { Card, CardContent, CardHeader, CardMedia } from '@mui/material';

export default function Sustainability() {
    return (
        <>
            <Card sx={{ my: '1em' }}>
                <CardHeader
                    title="Ökologische Verantwortung"
                    subheader="Unsere Entscheidungen beeinflussen die Erde, auf der wir leben"
                />
                <CardMedia component="img" image="/wald.jpg" height="140" />
                <CardContent>
                    <p>
                        Wir als BetterWorkGmbH sind uns nicht nur die
                        ökologischen Vorteile unserer Kunden wichtig -
                        gleichzeitig liegt uns der verantwortungsvolle Umgang
                        mit natürlichen Ressourcen sehr am Herzen. Unser Ziel
                        ist es, ihren Verbrauch zu reduzieren und sie zum Schutz
                        unserer Umwelt zu erhalten.
                    </p>
                    <p>
                        Basierend auf einem intelligenten Ressourcenmanagement
                        kommen bei unseren Kunden, aber auch bei uns
                        umweltfreundliche Technologien und erneuerbare Energien
                        zum Einsatz. Zudem engagieren wir uns für
                        umweltbewusstes Management, diskutieren wichtige
                        Umweltthemen und entwickeln mit unseren Partnern
                        Strategien für mehr Nachhaltigkeit.
                    </p>
                    <p>
                        Aber nicht nur das - auch in unserem Büroalltag legen
                        wir großen Wert auf Umweltschutz!
                    </p>
                </CardContent>
            </Card>
            <Card sx={{ my: '1em' }}>
                <CardHeader
                    title="„Alternative“ Unternehmen"
                    subheader="Was „vorausgehen“ für uns bedeutet"
                />
                <CardMedia component="img" image="/see.jpeg" height="140" />
                <CardContent>
                    <p>
                        Oft werden Unternehmen auch als nachhaltig bezeichnet,
                        wenn sie im Vergleich zu bestehenden, konventionellen
                        Unternehmen neue Ansätze oder Geschäftsmodelle umsetzen,
                        die Nachhaltigkeit fördern. Dabei wird leider oft von
                        progressiven und guten Teilaspekten des Unternehmens
                        darauf geschlossen, dass es insgesamt nachhaltig sei.
                    </p>
                    <p>
                        Wir versuchen uns von diesem Vergleich abzusetzen. Es
                        geht nicht darum in einem Vergleich gut zu sein, sondern
                        um eine gesunde Erde für nachfolgende Generationen zu
                        schaffen.
                    </p>
                </CardContent>
            </Card>
        </>
    );
}
