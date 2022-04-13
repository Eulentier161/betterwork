import { Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia } from '@mui/material';

export default function Home() {
    return (
        <>
            <Card sx={{ my: '1em' }}>
                <CardHeader subheader="„Wer immer tut, was er schon kann, bleibt immer das, was er schon ist.“ -Henry Ford" />
                <CardMedia
                    component="img"
                    image="/building.jpeg"
                    height="340"
                />
                <CardContent>
                    <p>
                        Wir von der Better Work GmbH sehen die IT Solution als
                        ein Werkzeug zur Verbesserung der Lebensqualität der
                        Menschheit.
                    </p>
                    <p> Nachhaltigkeit und Digitalisierung sind die
                        Stützpfeiler unserer Kernphilosophie.
                    </p>
                    <p>
                        Wir schaffen einen
                        Ort für Innovation und Entwicklung, in dem der
                        Mitarbeiter seine Kreativität und Stärken frei entfalten
                        kann.
                    </p>
                </CardContent>
            </Card>
            <Card sx={{ my: '1em' }}>
                <CardMedia
                    component="video"
                    image="/video.mp4"
                    autoPlay
                    controls
                />
            </Card>
        </>
    );
}
