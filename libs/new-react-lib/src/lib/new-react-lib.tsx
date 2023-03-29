import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NewReactLibProps {}

const StyledNewReactLib = styled.div`
  color: pink;
`;

export function NewReactLib(props: NewReactLibProps) {
  return (
    <StyledNewReactLib>
      <h1>Welcome to NewReactLib!</h1>
    </StyledNewReactLib>
  );
}

export default NewReactLib;
