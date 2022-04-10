import styled from 'styled-components';

export const AuthContainer = styled.div`
  width: 300px;
  text-align: center;
  height: 100%;
  margin: 1rem auto;
  color: var(--text-color);
`;

export const UserContainer = styled.div`
  width: 350px;
  margin: 1rem auto;
  color: var(--text-color);
  text-align: center;
  .logo {
    width: 80%;
    filter: invert(11%) sepia(15%) saturate(2858%) hue-rotate(334deg)
      brightness(100%) contrast(101%);
  }
`;
