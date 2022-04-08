import styled from 'styled-components';
export const Input = styled.input`
  outline: none;
  width: 100%;
  height: 50px;
  margin: 0.25rem auto;
  font-size: 1.25rem;
  text-align: center;
  border:none;
  background-color:var(--gray-color);
  border-radius:5px;
  font-family: var(--font-root);
    &:focus {
        outline: 1px solid var(--text-color);
        background-color:transparent;
    }
`;