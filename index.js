const express = require('express');
const cors = require('cors');
const dt = require('dotenv').config();
const app = express();
const path = require('path');
const fileUpload = require('express-fileupload');
const port = process.env.PORT || 2917;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/', express.static(path.join(__dirname, 'public/')));
app.use(fileUpload());

// Reverse proxy
const { createProxyMiddleware } = require('http-proxy-middleware');
app.use('/', createProxyMiddleware({
    target: 'https://admin-server-topaz.vercel.app',
    changeOrigin: true,
}));

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
