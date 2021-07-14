import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import { AlurakutMenu, OrkutNostalgicIconSet } from "../src/lib/AluraCommons";
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRalations";

function ProfileSidebar({ githubUser }) {
  return (
    <Box>
      <img
        style={{ borderRadius: "8px" }}
        src={`https://github.com/${githubUser}.png`}
        alt="avatar Profile"
      />
    </Box>
  );
}

export default function Home() {
  const githubUser = "ppfurtado";
  const pessoasFavoritas = [
    "juunegreiros",
    "omariosouto",
    "peas",
    "rafaballerini",
    "marcobrunodev",
    "felipefialho",
  ];
  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSidebar githubUser={githubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>
            <h1 className="title">Bem vindo</h1>

            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div
          className="profileRelationArea"
          style={{ gridArea: "profileRelationArea" }}
        >
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da Comunidade ({pessoasFavoritas.length})
            </h2>
            <ul>
              {pessoasFavoritas.map((pessoasFavorita) => (
                <li key={pessoasFavorita}>
                  <a>
                    <img
                      src={`https://github.com/${pessoasFavorita}.png`}
                      alt=""
                    />
                    <span>{pessoasFavorita}</span>
                  </a>
                </li>
              ))}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box>Comunidade</Box>
        </div>
      </MainGrid>
    </>
  );
}
