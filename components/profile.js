import { Card, CardContent, CardHeader, CardMedia } from '@mui/material';

export default function Profile() {
    return (
        <>
            <Card sx={{ my: '1em' }}>
                <CardHeader title="Firmenprofil" subheader="Wer wir sind" />
                <CardMedia
                    component="img"
                    image="/building.jpeg"
                    height="140"
                />
                <CardContent>
                    <p>
                        Seit ihrer Gründung 2021, versteht sich die Better Work
                        GmbH als kompetentes IT-Systemhaus mit ausgeprägtem
                        Service-Charakter. Wir sehen die IT Solution als ein
                        Werkzeug zur Verbesserung und Innovation der
                        Lebensqualität.
                    </p>
                    <p>
                        Dabei stehen der persönliche Kontakt sowie hohes
                        Qualitäts- und Servicedenken an erster Stelle. Jeder der
                        über 23 gut ausgebildeten und engagierten Better Work
                        GmbH IT-Mitarbeiter sorgt mit seiner Arbeit dafür, den
                        Kunden durch effiziente und sichere IT-Lösungen zu
                        unterstützen. Einer unserer Unternehmensschwerpunkt
                        liegt in der Planung, Konzeption und Umsetzung von
                        IT-Kommunikationslösungen. Netzwerklösungen für kleine
                        und mittelständische Unternehmen, öffentliche
                        Verwaltungen, soziale Einrichtungen und Institutionen
                        sowie Privatpersonen.
                    </p>
                    <p>
                        Die Better Work GmbH steht nicht nur für Innovation und
                        Digitalisierung. Sie steht mit ihrer Gesamtheit, für
                        einen Neuen Weg in die Zukunft.
                    </p>
                    <p>
                        Unsere Kernkompetenzen beschränken sich nicht nur auf
                        die benutzerspezifische und intelligente
                        Serverintegration und -administration. Wir bieten auf
                        den Kunden abgestimmte kompetente Beratung, umfassenden
                        Service und Support zu allen Fragen und
                        Herausforderungen rund um das Thema Software. Der
                        Verkauf zuverlässiger Hardware namhafter Hersteller für
                        Server, PC, Monitore, Drucker etc. sowie der schnelle
                        und fachmännische Reparaturservice rundet das
                        Leistungsportfolio der Better Work GmbH ab.
                    </p>
                    <p>
                        Die Softwareentwicklung bildet den zweiten
                        Unternehmensschwerpunkt der Better Work GmbH. In
                        Projekten erarbeiten wir auf den Kunden
                        maßgeschneiderten Individuallösungen für Unternehmen
                        jeder Größe.
                    </p>
                </CardContent>
            </Card>
        </>
    );
}
