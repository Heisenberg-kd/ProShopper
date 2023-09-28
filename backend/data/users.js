import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'KD',
    email: 'kd@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Kartikaya',
    email: 'kd1@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
