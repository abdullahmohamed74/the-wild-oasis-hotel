import { useState, createContext, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { HiEllipsisVertical } from 'react-icons/hi2';
import { createPortal } from 'react-dom';
import useOutsideClick from './../hooks/useOutsideClick';

// use compound component pattern to implement the menu
// 1. create a context:
const MenusContext = createContext();

// 2. create the parent component:
function Menus({ children }) {
  // use "openId" state to track which list is open
  const [openId, setOpenId] = useState('');
  const [position, setPosition] = useState(null);

  const close = () => setOpenId('');
  const open = setOpenId;

  return (
    <MenusContext.Provider
      value={{ openId, close, open, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

// 3. create child components:
function Toggle({ id }) {
  const { openId, close, open, setPosition } = useContext(MenusContext);

  const handleToggle = (e) => {
    e.stopPropagation();
    // get the coordenates of the clicked button
    const rect = e.target.closest('button').getBoundingClientRect();
    setPosition({
      x: window.innerWidth - (rect.width + rect.x),
      y: rect.y + rect.height + 8,
    });

    // if the state === '' or another list is open "not the clicked one"
    // set the clicked list id as the state
    openId === '' || openId !== id ? open(id) : close();
  };

  return (
    <StyledToggle onClick={handleToggle}>
      <HiEllipsisVertical />
    </StyledToggle>
  );
}

function List({ children, id }) {
  const { openId, position, close } = useContext(MenusContext);

  // to detect the click outside the list ==> close it
  const { ref: listRef } = useOutsideClick(close, false);

  // close the list when scroll
  useEffect(() => {
    document.addEventListener('scroll', close, true);
    return () => {
      document.addEventListener('scroll', close, true);
    };
  }, [close]);

  // if the list id is NOT equal the current openId return null
  if (openId !== id) return null;

  // if the list id is equal the current openId return the list
  return createPortal(
    <StyledList ref={listRef} position={position}>
      {children}
    </StyledList>,
    document.body
  );
}

function Button({ children, icon, onClick, disabled }) {
  const { close } = useContext(MenusContext);

  const handleClick = () => {
    onClick?.();
    close();
  };
  return (
    <li>
      <StyledButton disabled={disabled} onClick={handleClick}>
        {icon} <span>{children}</span>
      </StyledButton>
    </li>
  );
}

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`;

const StyledList = styled.ul`
  position: fixed;

  right: ${(props) => props.position.x}px;
  top: ${(props) => props.position.y}px;

  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;

// 4. put child components as properties on the parent component
Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
