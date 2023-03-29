import styled from 'styled-components';
import logHello from 'log-hello'; 
/* eslint-disable-next-line */
export interface NewReactLibProps {}

const StyledNewReactLib = styled.div`
  color: pink;
`;

export function NewReactLib(props: NewReactLibProps) {
  return (
    <StyledNewReactLib>
      <h1>Welcome to NewReactLib!</h1>
      <p>{logHello()}</p>
    </StyledNewReactLib>
  );
}

export default NewReactLib;
