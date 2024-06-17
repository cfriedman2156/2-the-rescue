import nc from 'next-connect';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import dbConnect from '../../lib/mongodb';

const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads',
    filename: (req, file, cb) => {
      cb(null, `${uuidv4()}${path.extname(file.originalname)}`);
    },
  }),
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif|webp/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb('Error: Images Only!');
    }
  },
});

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end('Something went wrong!');
  },
  onNoMatch: (req, res) => {
    res.status(404).end('Page is not found');
  },
}).use(upload.fields([{ name: 'profileImage' }, { name: 'photos' }]));

handler.post(async (req, res) => {
  await dbConnect();
  try {
    const profileImage = req.files['profileImage'][0].path.replace('public', '');
    const photos = req.files['photos'].map((file) => file.path.replace('public', ''));

    res.status(200).json({ profileImage, photos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to upload images' });
  }
});

export default handler;

export const config = {
  api: {
    bodyParser: false, // Disable Next.js body parsing
  },
};
