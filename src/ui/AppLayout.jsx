import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </StyledAppLayout>
  );
}

const StyledAppLayout = styled.div`
  height: 100dvh;
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;

  main {
    background-color: var(--color-grey-50);
    padding: 4rem 4.8rem 6.4rem;
    overflow: auto;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export default AppLayout;
