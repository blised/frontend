import React, {useMemo, useState} from "react";
import styled from "styled-components";
import bg from './img/bg.png'
import {MainLayout} from "./styles/Layouts";
import Orb from "./Components/Orb/Orb";
import Navigation from "./Components/Navigation/Navigation";
import Dashboard from "./Components/Dashboard/Dashboard";
import Income from './Components/Income/Income';
import Expenses from './Components/Expenses/Expenses';
import { useGlobalContext } from "./context/globalContext";

function App() {

  const [active, setActive] = useState(1)

  const global = useGlobalContext()
  console.log(global);

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Income />
      case 4:
        return <Expenses />
      default:
        return <Dashboard />
    }
  }

  const orbMemo = useMemo(() => {
    return <Orb />
  }, [])

  return(
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <ResponsiveLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </ResponsiveLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
  }
`;

/** new grid responsive on MainLayout **/
const ResponsiveLayout = styled(MainLayout)`
  display: grid;
  grid-template-columns: 374px 1fr; /* desktop */
  gap: 2rem;

  @media (max-width: 1200px) {
    /* laptops más estrechos */
    grid-template-columns: 250px 1fr;
  }
  @media (max-width: 992px) {
    /* tablets: apila todo */
    grid-template-columns: 1fr;
  }
`;

export default App;