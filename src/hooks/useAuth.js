import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser, setToken } from '../redux/slice/userSlice';
import api from '../utils/api';

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const login = async (email, password) => {
    setLoading(true);
    try {
      const response = await api.post('/api/v1/login', { email, password });  // Menggunakan api instance
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      dispatch(setToken(token));
      dispatch(setUser(user));
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const logout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
  };

  return { login, logout, loading, error };
};

export default useAuth;
