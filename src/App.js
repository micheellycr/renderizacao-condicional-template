import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import { useState } from "react";
import TelaUsuarioCadastrado from "./components/TelaUsuarioCadastrado/TelaUsuarioCadastrado.js";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  height: 100vh;
`

function App() {
  const [screen, setScreen] = useState("login")

  const goToCadastro = () => {
    setScreen("cadastro")
  }

  const goToLogin = () => {
    setScreen("login")
  }

  const goToUsuarioCadastrado = () => {
    setScreen("usuarioCadastrado")
  }

  if (screen === "login"){
    return (
      <MainContainer >
        <GlobalStyled />
        <TelaLogin goToCadastro={goToCadastro} />
        </MainContainer>
    );
  } else if (screen === "cadastro"){
    return(
      <MainContainer >
        <GlobalStyled />
        <TelaCadastro goToLogin={goToLogin}  goToUsuarioCadastrado={goToUsuarioCadastrado} />
      </MainContainer>
    );
  } else if (screen === "usuarioCadastrado"){
    return(
      <MainContainer >
        <GlobalStyled />
        <TelaUsuarioCadastrado></TelaUsuarioCadastrado>
      </MainContainer>
    );
  }
  }
    
export default App;