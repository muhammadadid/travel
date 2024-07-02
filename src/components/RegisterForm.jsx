import { useState } from 'react';
import useRegister from '../hooks/useRegister';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [role, setRole] = useState('user');
  const [profilePictureUrl, setProfilePictureUrl] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const { register, loading, error } = useRegister();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register({
      email,
      name,
      password,
      passwordRepeat,
      role,
      profilePictureUrl,
      phoneNumber,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <input
        type="password"
        value={passwordRepeat}
        onChange={(e) => setPasswordRepeat(e.target.value)}
        placeholder="Repeat Password"
        required
      />
      <input
        type="text"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        placeholder="Role"
        required
      />
      <input
        type="text"
        value={profilePictureUrl}
        onChange={(e) => setProfilePictureUrl(e.target.value)}
        placeholder="Profile Picture URL"
        required
      />
      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Phone Number"
        required
      />
      <button type="submit" disabled={loading}>Register</button>
      {error && <p>{error.message}</p>}
    </form>
  );
};

export default RegisterForm;
