# Todo List V2 📝

<div align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js">
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black" alt="EJS">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
</div>

<div align="center">
  <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" alt="Heroku">
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel">
  <img src="https://img.shields.io/badge/Railway-0B0D0E?style=for-the-badge&logo=railway&logoColor=white" alt="Railway">
  <img src="https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white" alt="Render">
</div>

## 🚀 Overview

Todo List V2 is a full-stack web application built with Node.js and Express.js that allows users to manage their daily tasks efficiently. The application features a clean, modern interface with full CRUD (Create, Read, Update, Delete) functionality, backed by MongoDB for persistent data storage.

## ✨ Features

- **Add Tasks**: Create new todo items with ease
- **View Tasks**: Display all tasks in a clean, organized list
- **Edit Tasks**: Update existing tasks inline
- **Delete Tasks**: Remove completed or unwanted tasks
- **Persistent Storage**: All data is stored in MongoDB
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, dark-themed interface with custom fonts

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Node.js** | Runtime environment |
| **Express.js** | Web framework |
| **MongoDB** | Database |
| **Mongoose** | ODM for MongoDB |
| **EJS** | Template engine |
| **CSS3** | Styling |
| **Method Override** | HTTP verb support |

## 📁 Project Structure

```
todolistv2/
├── app.js              # Main application file
├── package.json        # Dependencies and scripts
├── public/
│   └── style.css       # Stylesheet
└── views/
    └── index.ejs       # Main template
```

## 🚀 Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rabi22/Todo-List-V2.git
   cd Todo-List-V2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up MongoDB**
   - Ensure MongoDB is running locally on port 27017
   - Or update the connection string in `app.js` for your MongoDB instance

4. **Start the application**
   ```bash
   node app.js
   ```

5. **Access the application**
   - Open your browser and navigate to `http://localhost:3000`

## 🔧 Configuration

### Database Connection

The application connects to MongoDB using the following configuration:

```javascript
mongoose.connect('mongodb://localhost:27017/todoV2');
```

For production deployment, update this connection string to your MongoDB Atlas or other cloud database URL.

### Environment Variables

Consider using environment variables for sensitive data:

```javascript
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/todoV2');
```

## 📊 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Display all tasks |
| POST | `/` | Create a new task |
| PUT | `/task/:id` | Update an existing task |
| DELETE | `/task/:id` | Delete a task |

## 🎨 Features in Detail

### Task Management
- **Create**: Add new tasks using the input form
- **Read**: View all tasks in a formatted list
- **Update**: Edit tasks inline with the edit form
- **Delete**: Remove tasks with a single click

### User Interface
- Dark theme with modern styling
- Custom Google Fonts (Amarante, Lovers Quarrel)
- Responsive design for all screen sizes
- Smooth hover effects and transitions

## 🚀 Deployment Options

### Heroku
```bash
# Install Heroku CLI
npm install -g heroku

# Login to Heroku
heroku login

# Create app
heroku create your-app-name

# Deploy
git push heroku main
```

### Railway
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

### Render
1. Connect your GitHub repository
2. Set build command: `npm install`
3. Set start command: `node app.js`
4. Deploy automatically on push

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Rabi**
- GitHub: [@Rabi22](https://github.com/Rabi22)
- Repository: [Todo-List-V2](https://github.com/Rabi22/Todo-List-V2)

## 🐛 Issues

If you encounter any issues, please report them on the [Issues page](https://github.com/Rabi22/Todo-List-V2/issues).

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!

---

<div align="center">
  <p>Made with ❤️ by Rabi</p>
</div>
