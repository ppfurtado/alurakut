import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import { AlurakutMenu } from "../src/lib/AluraCommons";

function ProfileSidebar({ githubUser }) {
  return (
    <Box>
      <img
        style={{ borderRadius: "50%" }}
        src={`https://github.com/${githubUser}.png`}
        alt="avatar Profile"
      />
    </Box>
  );
}

export default function Home() {
  const githubUser = "ppfurtado";

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSidebar githubUser={githubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>Bem vindo</Box>
        </div>
        <div
          className="profileRelationArea"
          style={{ gridArea: "profileRelationArea" }}
        >
          <Box>Pessoas da Comunidade</Box>
          <Box>Comunidade</Box>
        </div>
      </MainGrid>
    </>
  );
}
