const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;
console.log('NODE_ENV',process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
  app.use(express.static(path.join(__dirname, 'build'), {
    setHeaders: (res, path) => {
      const supportedExtensions = ['.js', '.css', '.html', '.webp', '.png', '.jpg', '.jpeg', '.json', '.woff2', '.ico'];

      if (supportedExtensions.some(ext => path.endsWith(ext))) {
        res.setHeader('Cache-Control', 'public, max-age=2592000');
      }
    }
  }));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('API running');
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
