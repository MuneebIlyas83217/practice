import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("authUser");
    navigate("/login", { replace: true });
  }, [navigate]);

  return <div>Logout</div>;
};