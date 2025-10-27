import React from 'react';
import { Link } from 'react-router-dom';
import './button-link-style.css';

type Style = 'dark' | 'success';
interface Props {
   goTo: string,
   contain: string,
   style?: Style
}

export const ButtonLink : React.FC<Props> = (props) => {

   const { contain, goTo, style } = props;

   return (
      <Link to={`${goTo}`} className={style}> { contain } </Link>
   );
};