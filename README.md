

# 🛒 Flipkart Clone (MERN Stack)

A full-featured **e-commerce web application** inspired by Flipkart, built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)** with **JWT authentication**.
The platform supports **multi-role access** including **Admin, Seller, and Buyer dashboards**.

---

## 🚀 Features

### 👤 Authentication & Authorization

* JWT-based authentication
* Role-based access control (Admin / Seller / Buyer)
* Secure login & signup
* Password hashing using bcrypt
* Protected routes (frontend + backend)

---

### 🛍️ Buyer Features

* Browse products by category
* Search & filter products
* Product details page
* Add to cart / remove from cart
* Place orders
* Order history
* Wishlist functionality

---

### 🏪 Seller Panel

* Seller registration & login
* Add / update / delete products
* Upload product images
* Manage inventory
* View orders related to their products

---

### 🛠️ Admin Panel

* Dashboard analytics
* Manage users (buyers & sellers)
* Approve/reject sellers
* Manage categories
* Manage all products
* View all orders

---

### 📦 Product Management

* Category-based structure
* Multiple images upload
* Pricing, stock, discount support
* Ratings & reviews (optional)

---

### 🔍 Search & Optimization

* MongoDB indexing for fast search
* Text search on product name & description
* Filter by:

  * Price
  * Category
  * Rating

---

## 🏗️ Tech Stack

### Frontend

* React.js
* Redux / Context API (state management)
* Tailwind CSS / CSS
* Axios

### Backend

* Node.js
* Express.js
* MongoDB + Mongoose

### Authentication

* JSON Web Token (JWT)
* bcrypt.js

### Other Tools

* Cloudinary / Multer (for image upload)
* dotenv (environment variables)

## 🔐 JWT Flow (Authentication)

1. User logs in → credentials verified
2. Server generates JWT token
3. Token sent via:

   * HTTP-only cookies OR
   * Authorization header
4. Protected routes verify token using middleware

---

## 🧠 Database Design (MongoDB)

### Collections:

* Users (Admin / Seller / Buyer)
* Products
* Categories
* Orders
* Reviews (optional)

### Indexing:

* `product name` (text index)
* `category`
* `price`
* `createdAt`

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/flipkart-clone.git
cd flipkart-clone
```

### 2️⃣ Backend Setup

```bash
cd server
npm install
```

Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
CLOUDINARY_URL=your_cloudinary_url
```

Run backend:

```bash
npm run dev
```

---

### 3️⃣ Frontend Setup

```bash
cd client
npm install
npm start
```

---

## 🌐 API Endpoints (Sample)

### Auth

* `POST /api/auth/register`
* `POST /api/auth/login`

### Products

* `GET /api/products`
* `POST /api/products` (Seller/Admin)
* `PUT /api/products/:id`
* `DELETE /api/products/:id`
 
 

## 🚀 Deployment

* Frontend: Vercel / Netlify
* Backend: Render / Railway / AWS
* Database: MongoDB Atlas

---

## 📌 Future Enhancements

* Payment gateway integration (Razorpay/Stripe)
* Real-time notifications
* Advanced analytics dashboard
* AI-based product recommendations

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repo and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Aman Rawat**
MERN Developer | MERN Stack Enthusiast 
