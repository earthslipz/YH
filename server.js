const express = require('express');
const path = require('path');
const app = express();

// กำหนดพอร์ต
const PORT = process.env.PORT || 3000;

// ให้บริการไฟล์ static จากโฟลเดอร์ public
app.use(express.static(path.join(__dirname, 'public')));

// Route สำหรับหน้าแรก (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route สำหรับหน้าสินค้า (products.html)
app.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'products.html'));
});

// เริ่มเซิร์ฟเวอร์
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});