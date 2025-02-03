import { Container, Typography } from "@mui/material";
import Link from "next/link"; // Import the Link component

export default function NonAuthHomeView() {
  return (
    <Container>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Domovská stránka - NEprihlásený user
      </Typography>
      <Typography sx={{ mt: 1 }}>
        <Link href="/auth/registracia" passHref legacyBehavior>
          <a style={{ color: "#1976d2", textDecoration: "underline" }}>Registrujte sa</a>
        </Link>
        , aby ste mohli pridať príspevky a zobraziť profil.
      </Typography>
      <Typography variant="h6" sx={{ mt: 3 }}>
        Pripojte sa k našej rastúcej komunite!
      </Typography>
      <Typography variant="body1" sx={{ mt: 1, color: "gray" }}>
        Objavujte úžasný obsah, spoznávajte nových ľudí a zdieľajte svoje 
        nezabudnuteľné momenty. Pridajte sa teraz a buďte súčasťou našej 
        kreatívnej platformy!
      </Typography>
    </Container>
  );
}