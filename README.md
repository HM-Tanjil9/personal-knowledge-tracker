# personal-knowledge-tracker
A full-stack web application to capture, organize, and retrieve technical knowledge and learning resources.

# 🧠 Knowledge Base - Personal Learning Tracker

A full-stack web application to capture, organize, and retrieve technical knowledge and learning resources.

## 🎯 Problem

As developers, we constantly learn new technologies but struggle with:
- **Forgetting** what we've learned weeks later
- **Losing track** of useful articles and resources  
- **No centralized system** for technical notes
- **Difficulty connecting** related concepts across different sources

## 💡 Solution

A personal knowledge base that helps you:
- **Quickly capture** insights from articles, courses, and projects
- **Organize with tags** for easy retrieval
- **Find instantly** with powerful search and filtering
- **Retain knowledge** through smart review systems

## 🚀 MVP Features

### Core Functionality
- ✅ User authentication (signup/login)
- ✅ Create, read, update, delete notes
- ✅ Tag-based organization system
- ✅ Search and filter notes by keyword/tags
- ✅ Clean, responsive dashboard

### User Stories Covered
1. **As a learner**, I can quickly save key concepts to build my knowledge base
2. **As an organized person**, I can tag and categorize notes to find related concepts
3. **As someone preparing for interviews**, I can search and filter notes to quickly review specific topics

## 🛠️ Tech Stack

### Frontend
- **React** + Vite (fast development build)
- **React Router** for navigation
- **Context API** for state management
- **CSS3** for styling (minimal framework dependency)

### Backend  
- **Node.js** + Express.js server
- **MongoDB** + Mongoose ODM
- **JWT** for authentication
- **bcrypt** for password hashing

### Development
- **Git** for version control
- **MongoDB Atlas** for cloud database
- **Postman** for API testing

## 📁 Project Structure
``` bash
knowledge-base-app/
├── client/ # React frontend
│ ├── src/
│ │ ├── components/
│ │ ├── contexts/
│ │ ├── pages/
│ │ └── utils/
├── server/ # Express backend
│ ├── src/
│ │ ├── controllers/
│ │ ├── models/
│ │ ├── routes/
│ │ └── middleware/
├── README.md
└── package.json
```
