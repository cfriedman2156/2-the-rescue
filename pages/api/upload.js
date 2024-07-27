import { createRouter } from 'next-connect';
import multer from 'multer';
import { uploadFile } from '../../lib/aws';

// Configure multer for file handling
const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = createRouter();

const cpUpload = upload.fields([
  { name: 'profileImage', maxCount: 1 },
  { name: 'photos', maxCount: 10 },
]);

router.use(cpUpload);

router.post(async (req, res) => {
  try {
    console.log('Files received:', req.files); // Log received files
    const profileImage = req.files['profileImage'] ? req.files['profileImage'][0] : undefined;
    const photos = req.files['photos'] || [];

    console.log('Profile Image:', profileImage); // Log profile image
    console.log('Photos:', photos); // Log other photos

    const profileImageUrl = profileImage ? await uploadFile(profileImage) : null;
    const photosUrls = await Promise.all(photos.map(photo => uploadFile(photo)));

    console.log('Profile Image URL:', profileImageUrl); // Log profile image URL
    console.log('Photos URLs:', photosUrls); // Log photos URLs

    res.status(200).json({ profileImageUrl, photosUrls });
  } catch (error) {
    console.error('Upload Error:', error);
    res.status(500).json({ error: 'Error uploading files to S3' });
  }
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default router.handler({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).end(err.message);
  },
  onNoMatch: (req, res) => {
    res.status(404).end('Page is not found');
  },
});
