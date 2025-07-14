<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=48&pause=1000&color=47A248&center=true&vCenter=true&width=600&height=100&lines=Todo+List+V2;" alt="Typing SVG" />
</div>

<div align="center">
  <img src="https://img.shields.io/github/stars/Rabi22/Todo-List-V2?style=for-the-badge&logo=github&color=yellow" alt="GitHub Stars">
  <img src="https://img.shields.io/github/forks/Rabi22/Todo-List-V2?style=for-the-badge&logo=github&color=blue" alt="GitHub Forks">
  <img src="https://img.shields.io/github/license/Rabi22/Todo-List-V2?style=for-the-badge&color=green" alt="License">
  <img src="https://img.shields.io/github/last-commit/Rabi22/Todo-List-V2?style=for-the-badge&color=red" alt="Last Commit">
</div>

<div align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js">
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white" alt="Mongoose">
  <img src="https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black" alt="EJS">
</div>

<div align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Google%20Fonts-4285F4?style=for-the-badge&logo=google-fonts&logoColor=white" alt="Google Fonts">
</div>

<div align="center">
  <h3>🚀 Deployed On</h3>

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://todo-list-v2-xelq.onrender.com)

</div>

<br>

---

## 📋 Table of Contents

- [🎯 Overview](#-overview)
- [✨ Features](#-features)
- [🏗️ Architecture](#️-architecture)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🚀 Quick Start](#-quick-start)
- [📊 API Documentation](#-api-documentation)
- [🔧 Configuration](#-configuration)
- [🧪 Testing](#-testing)
- [📄 License](#-license)
- [👥 Author](#-author)

---

## 🎯 Overview

**Todo List V2** is a modern, full-stack task management application built with the **MEAN** stack principles. It provides a seamless user experience for managing daily tasks with **real-time CRUD operations**, **persistent data storage**, and a **responsive dark-themed interface**.

<div align="center">
  <img src="https://img.shields.io/badge/Version-2.0.0-brightgreen?style=for-the-badge" alt="Version">
  <img src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge" alt="Status">
  <img src="https://img.shields.io/badge/Maintained-Yes-brightgreen?style=for-the-badge" alt="Maintained">
</div>

### 🎯 Key Highlights

- **🔄 Real-time Updates**: Instant task synchronization
- **💾 Persistent Storage**: MongoDB-powered data persistence
- **📱 Responsive Design**: Mobile-first approach
- **🎨 Modern UI/UX**: Clean, intuitive interface
- **⚡ Fast Performance**: Optimized for speed
- **🔒 Secure**: Input validation and sanitization

---

## ✨ Features

<table>
  <tr>
    <td align="center"><img src="https://img.icons8.com/fluency/48/000000/add-reminder.png" width="40"/></td>
    <td><strong>Create Tasks</strong><br>Add new tasks with intuitive form interface</td>
  </tr>
  <tr>
    <td align="center"><img src="https://img.icons8.com/fluency/48/000000/view-details.png" width="40"/></td>
    <td><strong>View Tasks</strong><br>Display all tasks in organized, scrollable list</td>
  </tr>
  <tr>
    <td align="center"><img src="https://img.icons8.com/fluency/48/000000/edit-property.png" width="40"/></td>
    <td><strong>Edit Tasks</strong><br>Inline editing with real-time updates</td>
  </tr>
  <tr>
    <td align="center"><img src="https://img.icons8.com/fluency/48/000000/delete-sign.png" width="40"/></td>
    <td><strong>Delete Tasks</strong><br>One-click task removal with confirmation</td>
  </tr>
  <tr>
    <td align="center"><img src="https://img.icons8.com/fluency/48/000000/database.png" width="40"/></td>
    <td><strong>Data Persistence</strong><br>MongoDB integration for reliable storage</td>
  </tr>
  <tr>
    <td align="center"><img src="https://img.icons8.com/fluency/48/000000/responsive.png" width="40"/></td>
    <td><strong>Responsive Design</strong><br>Seamless experience across all devices</td>
  </tr>
</table>

---

## 🏗️ Architecture

<div align="center">
  <img src="https://img.shields.io/badge/Architecture-MVC-blueviolet?style=for-the-badge" alt="Architecture">
  <img src="https://img.shields.io/badge/Pattern-RESTful-orange?style=for-the-badge" alt="Pattern">
  <img src="https://img.shields.io/badge/Database-NoSQL-green?style=for-the-badge" alt="Database">
</div>

```mermaid
graph TD
    A[Client Browser] --> B[Express.js Server]
    B --> C[EJS Template Engine]
    B --> D[MongoDB Database]
    B --> E[Mongoose ODM]
    E --> D
    C --> A
    F[Static Assets] --> A
```

---

## 🛠️ Tech Stack

### **Backend Technologies**
| Technology | Version | Purpose | Documentation |
|------------|---------|---------|---------------|
| <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white" alt="Node.js"> | 18.x+ | Runtime Environment | [📚 Docs](https://nodejs.org/docs/) |
| <img src="https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white" alt="Express.js"> | 5.1.0 | Web Framework | [📚 Docs](https://expressjs.com/) |
| <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white" alt="MongoDB"> | 7.0+ | Database | [📚 Docs](https://docs.mongodb.com/) |
| <img src="https://img.shields.io/badge/Mongoose-880000?style=flat&logo=mongoose&logoColor=white" alt="Mongoose"> | 8.16.3 | ODM Library | [📚 Docs](https://mongoosejs.com/) |

### **Frontend Technologies**
| Technology | Version | Purpose | Documentation |
|------------|---------|---------|---------------|
| <img src="https://img.shields.io/badge/EJS-B4CA65?style=flat&logo=ejs&logoColor=black" alt="EJS"> | 3.1.10 | Template Engine | [📚 Docs](https://ejs.co/) |
| <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white" alt="HTML5"> | Latest | Markup Language | [📚 Docs](https://developer.mozilla.org/en-US/docs/Web/HTML) |
| <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white" alt="CSS3"> | Latest | Styling | [📚 Docs](https://developer.mozilla.org/en-US/docs/Web/CSS) |
| <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" alt="JavaScript"> | ES6+ | Client-side Logic | [📚 Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |

### **Development Tools**
| Tool | Purpose |
|------|---------|
| <img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white" alt="Git"> | Version Control |
| <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white" alt="GitHub"> | Code Repository |
| <img src="https://img.shields.io/badge/VSCode-007ACC?style=flat&logo=visualstudiocode&logoColor=white" alt="VSCode"> | IDE |
| <img src="https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white" alt="npm"> | Package Manager |

---

## 📁 Project Structure

```
📦 todolistv2/
├── 📄 app.js                  # Main application entry point
├── 📄 package.json           # Project dependencies & scripts
├── 📄 package-lock.json      # Locked dependency versions
├── 📄 README.md             # Project documentation
├── 📄 .gitignore            # Git ignore rules
├── 📁 public/               # Static assets
│   └── 🎨 style.css         # Application stylesheet
├── 📁 views/                # EJS templates
    └── 📄 index.ejs         # Main application 
```

---

## 🚀 Quick Start

### 📋 Prerequisites

<div align="center">
  <img src="https://img.shields.io/badge/Node.js-v18.0+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/MongoDB-v7.0+-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/npm-v9.0+-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm">
</div>

### 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rabi22/Todo-List-V2.git
   cd Todo-List-V2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   # Create .env file
   cp .env.example .env
   
   # Configure your environment variables
   MONGODB_URI=mongodb://localhost:27017/todoV2
   PORT=3000
   NODE_ENV=development
   ```

4. **Start MongoDB**
   ```bash
   # Using MongoDB Community Server
   mongod
   
   # Or using Docker
   docker run -d -p 27017:27017 --name mongodb mongo:latest
   ```

5. **Run the application**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

6. **Access the application**
   ```
   🌐 Local: http://localhost:3000
   ```

---

## 📊 API Documentation

### **Endpoints Overview**

<div align="center">
  <img src="https://img.shields.io/badge/API-RESTful-blue?style=for-the-badge" alt="API">
  <img src="https://img.shields.io/badge/Format-JSON-yellow?style=for-the-badge" alt="Format">
  <img src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge" alt="Status">
</div>

| Method | Endpoint | Description | Request Body | Response |
|--------|----------|-------------|--------------|----------|
| 🟢 **GET** | `/` | Retrieve all tasks | None | HTML Page |
| 🟡 **POST** | `/` | Create new task | `{ todo_input: string }` | Redirect to `/` |
| 🔵 **PUT** | `/task/:id` | Update existing task | `{ edit_item: string }` | Redirect to `/` |
| 🔴 **DELETE** | `/task/:id` | Delete task | None | Redirect to `/` |

### **Request/Response Examples**

#### Create Task
```http
POST /
Content-Type: application/x-www-form-urlencoded

todo_input=Complete project documentation
```

#### Update Task
```http
PUT /task/64f8b12c8d5e1234567890ab
Content-Type: application/x-www-form-urlencoded

edit_item=Review project documentation
```

#### Delete Task
```http
DELETE /task/64f8b12c8d5e1234567890ab
```

---

## 🔧 Configuration

### **Environment Variables**

```env
# Application Settings
PORT=3000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/todoV2
DB_NAME=todoV2


```

### **Database Schema**

```javascript
// Todo Schema
    {
        type : String,
        required: true
    }
```


---

## 🧪 Testing

### **Testing Framework**

<div align="center">
  <img src="https://img.shields.io/badge/Testing-Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" alt="Jest">
  <img src="https://img.shields.io/badge/Testing-Supertest-25A162?style=for-the-badge" alt="Supertest">
</div>

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

### **Test Coverage**

```bash
# Generate coverage report
npm run coverage

# View coverage report
open coverage/lcov-report/index.html
```



---

## 📄 License

<div align="center">
  <img src="https://img.shields.io/badge/License-ISC-blue?style=for-the-badge" alt="License">
</div>

This project is licensed under the **ISC License** - see the [LICENSE](LICENSE) file for details.

```
ISC License

Copyright (c) 2024 Rabi

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.
```

---

## 👥 Author

<div align="center">
  <img src="https://github.com/Rabi22.png" width="100" height="100" style="border-radius: 50%;" alt="Rabi">
  <br>
  <strong>Rabi</strong>
  <br>
  <em>Mechanical Engineer | Computer Science Student</em>
</div>

<div align="center">
  <a href="https://github.com/Rabi22">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
  <a href="mailto:rabi@example.com">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email">
  </a>
  <a href="https://linkedin.com/in/rabi22">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
</div>

---

## 📞 Support

<div align="center">
  <img src="https://img.shields.io/badge/Academic%20Project-Student%20Work-blue?style=for-the-badge" alt="Academic Project">
</div>

- 📧 **Email**: [rabipradhan320@gmail.com](mailto:rabipradhan320@gmail.com)
- 🎓 **Academic Purpose**: Personal learning project for skill development

---

## 🎯 Roadmap

- [ ] **User Authentication** - Add login/register functionality
- [ ] **Task Categories** - Organize tasks by categories
- [ ] **Due Dates** - Set deadlines for tasks
- [ ] **Priority Levels** - Add task priority system
- [ ] **Dark/Light Mode** - Theme switching capability
- [ ] **Search & Filter** - Advanced task filtering
- [ ] **Data Export** - Export tasks to CSV/JSON
- [ ] **Mobile Responsive** - Enhanced mobile experience

---

## 🎓 Learning Outcomes

This project demonstrates proficiency in:

- **Full-stack development** with Node.js and Express.js
- **Database design** and integration with MongoDB
- **RESTful API** development and implementation
- **Template engines** and server-side rendering
- **CRUD operations** and data persistence
- **Modern web development** practices and patterns
- **Version control** with Git and GitHub
- **Project documentation** and presentation skills

---
