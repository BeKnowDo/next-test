import Link from 'next/link';
import styled from 'styled-components';
import { colors, padding } from '../../../styles/variables';

const Nav = styled.nav`
  background-color: ${colors.grey};
  padding: 20px;
  ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
    
    li {
      
    }
    
    a {
      display: inline-block;
      padding: ${padding.nav.linkPadding};
      color: ${colors.white};
      text-decoration: none;
    }
    
  }
  
`;


export const Navigation = () => (
    <Nav>
        <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </li>
        </ul>
    </Nav>
);