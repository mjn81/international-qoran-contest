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

export const TextLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: var(--text-color);
  font-size:1rem;
  margin: ${props => props.margin || '0'};
`;

export const Button = styled.button`
  cursor: pointer;
  outline: none;
  display: block;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  background:var(--primary-gradient);
  font-family: var(--font-root);
  font-weight: 600;
  color:#fff;
  border: 1px solid var(--text-color);
  margin:${props=> props.margin || 'none'};
  &:disabled {
    opacity: 0.4;
  }
`;