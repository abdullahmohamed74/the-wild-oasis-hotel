import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { useUser } from '../features/authentication/useUser';
import Spinner from './Spinner';

function ProtectedRoute({ children }) {
  // get the authenticated user
  const { isAuthenticated, isLoading } = useUser();

  // show a spinner while loadingthe user
  if (isLoading)
    return (
      <FullPage>
        <Spinner />;
      </FullPage>
    );

  // if there is no authenticated user redirect to login page
  if (!isAuthenticated) return <Navigate to="/login" />;

  // if there is an authenticated user redirect to dashboard page
  return children;
}

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ProtectedRoute;
