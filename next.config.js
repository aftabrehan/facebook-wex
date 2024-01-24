module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'links.papareact.com',
      'upload.wikimedia.org',
      'platform-lookaside.fbsbx.com',
      'firebasestorage.googleapis.com',
      'lh3.googleusercontent.com',
      'images.unsplash.com',
      'media.istockphoto.com',
    ],
  },
  env: {
    DEMO_USER_PASSWORD: process.env.DEMO_USER_PASSWORD,
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
  },
}