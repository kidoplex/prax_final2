// src/sections/AuthHomeView.tsx

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Session } from "next-auth";

export default function AuthHomeView({ session }: { session: Session | null }) {
  if (!session) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container>
      <Typography> Domovská stránka - prihlásený user</Typography>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Vitajte, {session?.user?.name || "užívateľ"}!
      </Typography>
      <Typography variant="h6" sx={{ mt: 2 }}>
        Zdieľajte svoje momenty, objavujte nových ľudí a inšpirujte sa.
      </Typography>
      <Typography variant="body1" sx={{ mt: 1, color: "gray" }}>
        Pripojte sa k miliónom užívateľov a budujte svoju digitálnu komunitu. 
        Pridávajte fotky, sledujte priateľov a vytvárajte obsah, ktorý vás baví.
      </Typography>
    </Container>
  );
}