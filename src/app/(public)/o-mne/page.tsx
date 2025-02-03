// src/sections/NonAuthHomeView.tsx

import { Container, Typography, Box } from "@mui/material";
import Link from "next/link"; // Import the Link component

export default function NonAuthHomeView() {
  return (
    <Container>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Domovská stránka - NEprihlásený user
      </Typography>
      <Typography sx={{ mt: 1 }}>
        <Link href="/auth/registracia" legacyBehavior>
          <a style={{ color: 'primary.main', textDecoration: 'underline' }}>
            Registrujte sa
          </a>
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

      {/* About Us Section */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5">O nás</Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          Naším cieľom je vytvoriť platformu, ktorá môže konkurovať Instagramu – 
          miesto, kde môžete slobodne zdieľať svoje zážitky, objavovať nový obsah 
          a budovať komunitu. Veríme v autentickosť, kreativitu a spojenie ľudí 
          cez vizuálne príbehy.
        </Typography>
      </Box>

      {/* Social Media Links */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">Sledujte nás</Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          <Link href="https://www.facebook.com/spsezochova/" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>
              Facebook
            </a>
          </Link>{" "}
          |{" "}
          <Link href="https://www.instagram.com/spsezochova/" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>
              Instagram
            </a>
          </Link>{" "}
          |{" "}
          <Link href="https://zochova.sk/" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>
              Webstránka
            </a>
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}