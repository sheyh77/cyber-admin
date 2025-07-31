// import express from "express";

// const app = express();
// const PORT = 5000;

// // Middleware – JSON formatdagi ma'lumotlarni o'qish uchun
// app.use(express.json());

// // Asosiy yo'l
// app.get("/", (req, res) => {
//   res.send("Server ishlayapti!");
// });

// // Demo foydalanuvchilar
// const users = [
//   { username: "admin", password: "123456" },
//   { username: "shahriyor", password: "abc123" },
// ];

// // Login endpoint
// app.post("/api/login", (req, res) => {
//   const { username, password } = req.body;

//   const user = users.find(
//     (u) => u.username === username && u.password === password
//   );

//   if (user) {
//     res.json({ success: true, message: "Kirish muvaffaqiyatli" });
//   } else {
//     res.json({ success: false, message: "Bunday foydalanuvchi mavjud emas" });
//   }
// });

// // Serverni ishga tushirish
// app.listen(PORT, () => {
//   console.log(`✅ Server http://localhost:${PORT} da ishlayapti`);
// });
