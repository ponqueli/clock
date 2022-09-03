import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  transition: all 0.5s ease;

  & .react-switch {
    :hover {
      cursor: pointer;
      box-shadow: 0px 1px 5px rgb(255, 234, 0);
    }
  }
`;

export const SwitchIcon = styled.img`
  margin: 0.25rem;
  height: 70%;
  width: 70%;
`;

export const ButtonSwitch = styled.div`
  margin-bottom: 2rem;
`;