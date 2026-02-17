# MarkingWeb - Student Attendance & Management System

## 📋 Project Overview

MarkingWeb is a comprehensive student attendance and management system consisting of a modern React frontend and a Laravel backend. The system provides QR code-based attendance tracking, student analytics, user management, and dashboard features designed for educational institutions.

### 🎯 Key Features

- **QR Code Attendance System** - Scan student QR codes for quick attendance marking
- **Real-time Dashboard** - Overview of attendance, analytics, and system statistics
- **Student Management** - Complete student information with contact details and class assignments
- **Attendance Tracking** - Date-based attendance records with present/absent status
- **User Management** - Role-based access control (Admin, Moderator, User)
- **Analytics & Reports** - Filterable student data and attendance reports
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Built with Material-UI for a professional look and feel

---

## 🖥️ Frontend Technology Stack

- **Framework**: React 19.1.1
- **Language**: TypeScript 5.8.3
- **Build Tool**: Vite 7.1.2
- **UI Library**: Material-UI (MUI) 7.3.4
- **Routing**: React Router DOM 7.9.1
- **Date Management**: Day.js 1.11.19
- **Styling**: Emotion (CSS-in-JS)
- **Icons**: Material-UI Icons
- **Date Pickers**: MUI X Date Pickers 8.25.0

### Project Structure

```
markingweb-front/
├── public/                      # Static assets
├── src/
│   ├── assets/                  # Images and media files
│   ├── components/              # Reusable components
│   │   ├── Navbar.tsx          # Main navigation bar
│   │   └── Sidebar.tsx         # Dashboard sidebar
│   ├── pages/                   # Page components
│   │   ├── homepage.tsx        # Landing page
│   │   ├── login.tsx           # Login & authentication
│   │   ├── Dashboard.tsx       # Main dashboard layout
│   │   ├── AboutPage.tsx       # About page
│   │   ├── BlogPage.tsx        # Blog page
│   │   ├── ContactPage.tsx     # Contact page
│   │   ├── ResultPage.tsx      # Results page
│   │   └── dashboard/          # Dashboard sub-pages
│   │       ├── Overview.tsx    # Dashboard overview
│   │       ├── Analytics.tsx   # Student analytics
│   │       ├── Attendance.tsx  # Attendance management
│   │       ├── Scanner.tsx     # QR code scanner
│   │       ├── Users.tsx       # User management
│   │       └── Settings.tsx    # System settings
│   ├── App.tsx                  # Main app component
│   ├── main.tsx                 # App entry point
│   └── index.css                # Global styles
├── package.json
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                    # This file
```

---

## 🚀 Frontend Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
```bash
git clone <repository-url>
cd markingweb-front
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

5. **Preview production build**
```bash
npm run preview
```

### Available Scripts

- `npm run dev` - Start development server (default: http://localhost:5173)
- `npm run build` - Build production-ready files
- `npm run lint` - Run ESLint for code quality
- `npm run preview` - Preview production build locally

---

## 🔧 Backend - Laravel API Requirements

### Technology Stack

- **Framework**: Laravel 10.x or 11.x
- **Database**: MySQL 8.0+
- **PHP Version**: 8.1+
- **Authentication**: Laravel Sanctum / JWT
- **Additional Packages**:
  - Laravel Sanctum (API Authentication)
  - SimpleSoftwareIO/simple-qrcode (QR Code Generation)
  - Laravel Excel (Reports Export)
  - Spatie Laravel Permission (Role & Permissions)

### Database Schema

#### 1. Users Table
```sql
CREATE TABLE users (
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'moderator', 'user') DEFAULT 'user',
    status ENUM('active', 'inactive') DEFAULT 'active',
    email_verified_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

#### 2. Students Table
```sql
CREATE TABLE students (
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    student_id VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    address TEXT,
    contact_1 VARCHAR(20) NOT NULL,
    contact_2 VARCHAR(20) NULL,
    class VARCHAR(50) NOT NULL,
    year VARCHAR(4) NOT NULL,
    qr_code TEXT NULL,
    status ENUM('active', 'inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

#### 3. Attendance Table
```sql
CREATE TABLE attendance (
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    student_id BIGINT UNSIGNED NOT NULL,
    date DATE NOT NULL,
    check_in_time TIME NULL,
    status ENUM('present', 'absent') NOT NULL,
    marked_by BIGINT UNSIGNED NULL,
    notes TEXT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
    FOREIGN KEY (marked_by) REFERENCES users(id) ON DELETE SET NULL,
    UNIQUE KEY unique_attendance (student_id, date)
);
```

#### 4. Password Reset Tokens Table
```sql
CREATE TABLE password_reset_tokens (
    email VARCHAR(255) PRIMARY KEY,
    token VARCHAR(255) NOT NULL,
    otp VARCHAR(4) NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Required API Endpoints

#### Authentication Endpoints
```
POST   /api/auth/register          - Register new user
POST   /api/auth/login             - User login
POST   /api/auth/logout            - User logout
POST   /api/auth/forgot-password   - Request password reset
POST   /api/auth/verify-otp        - Verify OTP for password reset
POST   /api/auth/reset-password    - Reset password
GET    /api/auth/user              - Get authenticated user
```

#### Student Management Endpoints
```
GET    /api/students               - Get all students (with filters)
GET    /api/students/{id}          - Get single student
POST   /api/students               - Create new student
PUT    /api/students/{id}          - Update student
DELETE /api/students/{id}          - Delete student
GET    /api/students/{id}/qr-code  - Generate/Get QR code for student
POST   /api/students/scan          - Scan QR code and get student info
```

#### Attendance Endpoints
```
GET    /api/attendance             - Get attendance records (with date/class filters)
POST   /api/attendance/mark        - Mark attendance
PUT    /api/attendance/{id}        - Update attendance record
GET    /api/attendance/stats       - Get attendance statistics
GET    /api/attendance/export      - Export attendance to Excel
```

#### User Management Endpoints
```
GET    /api/users                  - Get all users
GET    /api/users/{id}             - Get single user
POST   /api/users                  - Create new user
PUT    /api/users/{id}             - Update user
DELETE /api/users/{id}             - Delete user
PUT    /api/users/{id}/status      - Update user status
```

#### Dashboard & Analytics Endpoints
```
GET    /api/dashboard/stats        - Get dashboard statistics
GET    /api/analytics/students     - Get student analytics
GET    /api/analytics/attendance   - Get attendance analytics
GET    /api/analytics/reports      - Generate custom reports
```

### Laravel Backend Setup Instructions

1. **Create new Laravel project**
```bash
composer create-project laravel/laravel markingweb-backend
cd markingweb-backend
```

2. **Install required packages**
```bash
composer require laravel/sanctum
composer require simplesoftwareio/simple-qrcode
composer require maatwebsite/excel
composer require spatie/laravel-permission
```

3. **Configure environment**
```bash
cp .env.example .env
php artisan key:generate
```

Update `.env` file:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=markingweb
DB_USERNAME=root
DB_PASSWORD=

FRONTEND_URL=http://localhost:5173
```

4. **Run migrations**
```bash
php artisan migrate
php artisan db:seed
```

5. **Publish Sanctum configuration**
```bash
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
```

6. **Configure CORS** (in `config/cors.php`)
```php
'paths' => ['api/*', 'sanctum/csrf-cookie'],
'allowed_origins' => [env('FRONTEND_URL', 'http://localhost:5173')],
'allowed_methods' => ['*'],
'allowed_headers' => ['*'],
'supports_credentials' => true,
```

7. **Start development server**
```bash
php artisan serve
```

### Sample Controller Structure

```
app/Http/Controllers/
├── Auth/
│   ├── AuthController.php
│   ├── ForgotPasswordController.php
│   └── ResetPasswordController.php
├── StudentController.php
├── AttendanceController.php
├── UserController.php
├── DashboardController.php
└── AnalyticsController.php
```

### Middleware & Security

- API rate limiting: 60 requests per minute
- CORS configuration for frontend origin
- Sanctum authentication for API routes
- Role-based access control with Spatie Permission
- Request validation for all inputs
- SQL injection protection (Laravel Query Builder)
- XSS protection (Laravel Blade escaping)

---

## 🔌 Frontend-Backend Integration

### API Configuration

Create `.env.local` in frontend root:
```env
VITE_API_URL=http://localhost:8000/api
VITE_APP_NAME=MarkingWeb
```

### Axios Setup (recommended)

Install Axios:
```bash
npm install axios
```

Create API client (`src/services/api.ts`):
```typescript
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
```

### Example API Calls

```typescript
// Login
const response = await api.post('/auth/login', { email, password });
localStorage.setItem('auth_token', response.data.token);

// Get students
const students = await api.get('/students', {
  params: { class: 'A', year: '2024' }
});

// Mark attendance
await api.post('/attendance/mark', {
  student_id: studentId,
  status: 'present',
  check_in_time: new Date().toISOString()
});
```

---

## 📊 Features Implementation Guide

### 1. QR Code Scanner Integration

Frontend needs to capture QR code data and send to backend:
```typescript
const handleQRScan = async (qrData: string) => {
  const response = await api.post('/students/scan', { qr_code: qrData });
  setStudentData(response.data.student);
};
```

Backend should decode QR and return student info:
```php
public function scanQRCode(Request $request) {
    $student = Student::where('qr_code', $request->qr_code)->first();
    
    if (!$student) {
        return response()->json(['error' => 'Student not found'], 404);
    }
    
    return response()->json(['student' => $student]);
}
```

### 2. Real-time Attendance Marking

When scanning a student's QR code, automatically mark attendance:
```php
public function markAttendance(Request $request) {
    $attendance = Attendance::updateOrCreate(
        [
            'student_id' => $request->student_id,
            'date' => now()->toDateString()
        ],
        [
            'status' => 'present',
            'check_in_time' => now()->toTimeString(),
            'marked_by' => auth()->id()
        ]
    );
    
    return response()->json(['attendance' => $attendance]);
}
```

### 3. Analytics & Reports

Generate attendance statistics:
```php
public function getAttendanceStats(Request $request) {
    $date = $request->date ?? now()->toDateString();
    
    $stats = [
        'total_students' => Student::where('status', 'active')->count(),
        'present' => Attendance::where('date', $date)
                              ->where('status', 'present')
                              ->count(),
        'absent' => Attendance::where('date', $date)
                             ->where('status', 'absent')
                             ->count(),
    ];
    
    $stats['attendance_rate'] = ($stats['present'] / $stats['total_students']) * 100;
    
    return response()->json($stats);
}
```

---

## 🔐 Authentication Flow

1. User enters credentials on login page
2. Frontend sends POST to `/api/auth/login`
3. Backend validates and returns JWT token
4. Frontend stores token in localStorage
5. All subsequent API calls include token in Authorization header
6. Protected routes check for valid token
7. Logout clears token and invalidates session

---

## 🎨 Design System

### Color Palette
- Primary Blue: `#0043FF`, `#3b82f6`
- Success Green: `#10b981`, `#059669`
- Warning Orange: `#f59e0b`
- Danger Red: `#ef4444`, `#dc2626`
- Purple: `#8b5cf6`
- Dark Blue: `#1e3a5f`
- Background: `#f5f7fa`
- White: `#ffffff`

### Typography
- Headings: Roboto, Bold (600-700)
- Body: Roboto, Regular (400-500)
- Size Scale: 12px, 14px, 16px, 20px, 24px, 32px

---

## 🧪 Testing

### Frontend Testing
```bash
npm install --save-dev vitest @testing-library/react
npm run test
```

### Backend Testing
```bash
php artisan test
```

---

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
npm run build
# Deploy dist/ folder
```

### Backend (Laravel Forge/DigitalOcean)
```bash
composer install --optimize-autoloader --no-dev
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

---

## 📝 Environment Variables

### Frontend (.env.local)
```
VITE_API_URL=http://localhost:8000/api
VITE_APP_NAME=MarkingWeb
```

### Backend (.env)
```
APP_NAME=MarkingWeb
APP_ENV=production
APP_KEY=
APP_DEBUG=false
APP_URL=https://api.markingweb.com

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=markingweb
DB_USERNAME=root
DB_PASSWORD=

FRONTEND_URL=https://markingweb.com

MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=
MAIL_PASSWORD=
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=noreply@markingweb.com
MAIL_FROM_NAME="${APP_NAME}"
```

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👥 Team

**Lumicore Inc.**
- Project: Pasan Project
- Frontend: MarkingWeb-Front
- Backend: MarkingWeb-Backend (To be implemented)

---

## 📞 Support

For support and queries:
- Email: support@markingweb.com
- Documentation: [Link to docs]
- Issues: [GitHub Issues]

---

## 🔮 Future Enhancements

- [ ] Mobile app (React Native)
- [ ] Push notifications
- [ ] Email notifications for attendance
- [ ] Biometric authentication
- [ ] Parent portal
- [ ] SMS integration
- [ ] Multi-language support
- [ ] Offline mode
- [ ] Advanced reporting with charts
- [ ] Export to PDF

---

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Material-UI Documentation](https://mui.com)
- [Laravel Documentation](https://laravel.com/docs)
- [Vite Documentation](https://vitejs.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)

---

**Last Updated**: January 21, 2026

---

# සිංහල තොරතුරු (Sinhala Information)

## ව්‍යාපෘතිය පිළිබඳ

MarkingWeb යනු QR කේත පදනම් කරගත් සිසුන්ගේ පැමිණීම් සලකුණු කිරීමේ සහ කළමනාකරණ පද්ධතියකි.

### ප්‍රධාන විශේෂාංග

- QR කේත ස්කෑනරය භාවිතයෙන් ඉක්මන් පැමිණීම් ලකුණු කිරීම
- තථ්‍ය කාලීන ඩෑෂ්බෝඩ් දසුන
- සිසුන් කළමනාකරණය
- දිනය අනුව පැමිණීම් වාර්තා
- පරිශීලක කළමනාකරණය (Admin, Moderator, User)
- විශ්ලේෂණ සහ වාර්තා
- ප්‍රතිචාරාත්මක UI/UX

### තාක්ෂණය

**Frontend**: React + TypeScript + Vite + Material-UI
**Backend**: PHP Laravel + MySQL

### ස්ථාපනය

**Frontend:**
```bash
npm install
npm run dev
```

**Backend (ඉදිරියේදී සකස් කළ යුතුයි):**
```bash
composer install
php artisan migrate
php artisan serve
```

මෙම පද්ධතිය අධ්‍යාපන ආයතන සඳහා සම්පූර්ණ සිසුන්ගේ පැමිණීම් කළමනාකරණ විසඳුමක් ලබා දෙයි.

---

**Developed by Lumicore Inc. - Pasan Project**
