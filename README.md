#📋 Task Manager Full Stack App
A full stack Task Manager built using:

Backend: Node.js, Express, MongoDB, TypeScript

Frontend: Flutter (clean MVVM structure)

It allows users to:
✅ Add tasks
✅ View tasks
✅ Update tasks
✅ Delete tasks
✅ Track completion status

Perfect for learning full stack CRUD, REST API integration, and Flutter app development.

🚀 Features
✅ Create, Read, Update, Delete tasks
✅ MongoDB data persistence
✅ RESTful API with Express + TypeScript
✅ Flutter frontend consuming your API
✅ Clear code structure for learning and extension

🛠️ Technologies Used
Backend: Node.js, Express, TypeScript, Mongoose

Database: MongoDB

Frontend: Flutter

Dev Tools: VS Code, Postman / cURL, Git

📂 Project Structure
task_manager/
│
├── backend/
│   ├── src/
│   │   ├── models/
│   │   │   └── task.model.ts
│   │   ├── routes/
│   │   │   └── tasks.routes.ts
│   │   └── index.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── .env
│
├── frontend/
│   ├── lib/
│   │   ├── screens/
│   │   ├── models/
│   │   └── services/
│   ├── pubspec.yaml
│   └── main.dart
│
└── README.md
<br>
⚡ Getting Started
1️⃣ Clone the repository
bash
Copy
Edit
git clone https://github.com/yourusername/task_manager.git
cd task_manager
2️⃣ Backend Setup
Navigate to the backend folder:

bash
Copy
Edit
cd backend
Install dependencies:

bash
Copy
Edit
npm install
Create a .env file:

ini
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
Run the server:

bash
Copy
Edit
npm run dev
Visit:

arduino
Copy
Edit
http://localhost:5000
to check "Task Manager API is running".

3️⃣ Frontend Setup
Ensure Flutter is installed and configured.

Navigate to the frontend folder:

bash
Copy
Edit
cd ../frontend
Install Flutter dependencies:

bash
Copy
Edit
flutter pub get
Run the Flutter app:

bash
Copy
Edit
flutter run
You will see your Task Manager UI running and connected to your backend.

📡 API Endpoints
Method	Endpoint	Description
GET	/api/tasks	Get all tasks
POST	/api/tasks	Create a new task
GET	/api/tasks/:id	Get a specific task
PUT	/api/tasks/:id	Update a task
DELETE	/api/tasks/:id	Delete a task

🪄 Future Improvements
✅ User authentication (JWT)
✅ Task prioritization
✅ Due dates and reminders
✅ Filtering and search
✅ Deployment on Render/Railway for backend and Netlify/Vercel for frontend
