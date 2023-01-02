import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from 'antd';
import './NotFound.css';

function NotFound() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  }

  return (
    <section className="not-found">
      <h1 className="not-found__title not-found__box">
        404
      </h1>

      <p className="not-found__subtitle not-found__box">
        Страница не найдена
      </p>

      <Button  onClick={handleClick}>
        Go Back
      </Button>

    </section>
  );
}

export default NotFound;