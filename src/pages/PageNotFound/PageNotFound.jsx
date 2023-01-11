import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import css from './PageNotFound.module.css'

function PageNotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timerId = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timerId);
  }, [navigate]);

  return (
    <div>
      <p className={css.not_found}>Page not Found!</p>
    </div>
  );
}

export default PageNotFound;