import AWS from 'aws-sdk';

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

export const uploadFile = async (file) => {
  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: `${Date.now()}_${file.originalname}`, // unique name for the file
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  try {
    const data = await s3.upload(params).promise();
    console.log('S3 Upload Successful:', data); // Log successful upload
    return data.Location;
  } catch (error) {
    console.error('S3 Upload Error:', error);
    throw new Error('Error uploading file to S3');
  }
};
