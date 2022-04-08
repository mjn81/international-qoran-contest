import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const OutlinedLink = styled(Link)`
  display: block;
  text-decoration: none;
  width: 100%;
  border: 1px solid var(--text-color);
  background: transparent;
  cursor: pointer;
  font-family: var(--font-root);
  font-weight: bold;
  font-size: 0.8rem;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  margin: 0 2px;
  transition: all 200ms linear; 
  &:hover {
    background: var(--primary-gradient);
    color: #fff;
  }
`;