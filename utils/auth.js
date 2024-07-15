// import jwt from 'jsonwebtoken';

// export const authMiddleware = ({ req }) => {
//   // Extract token from headers
//   const token = req.headers.authorization || '';

//   // Verify token
//   try {
//     const user = jwt.verify(token, process.env.JWT_SECRET);
//     return { user };
//   } catch (error) {
//     console.error('Authentication error:', error);
//     return {};
//   }
// };

import jwt from 'jsonwebtoken';

export const authMiddleware = ({ req }) => {
  // Extract token from headers
  const token = req.headers.authorization?.split(' ')[1] || '';

  // Verify token
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    return { user };
  } catch (error) {
    console.error('Authentication error:', error);
    return {};
  }
};
