import nextConnect from 'next-connect';
import multer from 'multer';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

// Set up Multer storage
const storage = multer.diskStorage({
  destination: './public/uploads',
  filename: (req, file, cb) => {
    cb(null, `${uuidv4()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage });

// Set up Next.js API route with nextConnect
const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' not allowed` });
  },
});

apiRoute.post(upload.fields([{ name: 'profileImage', maxCount: 1 }, { name: 'photos', maxCount: 12 }]), (req, res) => {
  const profileImage = req.files.profileImage ? req.files.profileImage[0].filename : null;
  const photos = req.files.photos ? req.files.photos.map(file => file.filename) : [];

  res.status(200).json({
    profileImage,
    photos,
  });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
