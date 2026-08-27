# 🎓 Campus Lost & Found

A full-stack web application that helps students **report, discover, and recover lost belongings on campus** through a secure claim and ownership-verification workflow.

The platform connects students who find lost items with their potential owners, while ensuring that claims are reviewed by the person who originally reported the item.

---

## 📌 Overview

Losing personal belongings on campus can be frustrating, while found items often have no reliable way to reach their owners.

**Campus Lost & Found** provides a centralized platform where students can:

* Report items they have found
* Browse and search reported items
* Submit ownership claims
* Answer ownership verification questions
* Review and approve/reject claims
* Track successfully recovered items

The application uses **JWT authentication, protected routes, role-based access logic, and SQLite storage** to provide a secure and structured recovery process.

---

## ✨ Key Features

### 🔐 Authentication & Security

* User registration and login
* JWT-based authentication
* Protected frontend and backend routes
* Authenticated API requests
* Finder-only claim review
* Finder-only visibility of claim details
* Ownership verification before approval

### 🔎 Found Item Discovery

* Browse all available found items
* Search items by name or description
* Filter items by category
* View item details
* Fullscreen image preview
* Location information for reported items

### 📦 Finder Mode

Users who find an item can report it by providing:

* Item name
* Category
* Description
* Found location
* Item image

Once submitted, the item becomes available for other users to browse.

### 🙋 Claim System

Users who believe an item belongs to them can submit a claim request.

The claim process includes:

1. Selecting the item
2. Providing ownership details
3. Answering verification questions
4. Submitting the claim to the finder

This helps prevent unauthorized users from simply claiming an item.

### ✅ Claim Review

The user who originally reported the item can review incoming claims.

The finder can:

* View ownership verification details
* Approve a legitimate claim
* Reject an invalid claim

Only the finder associated with the item can access and manage its claims.

### 🎒 Recovered Items

Once a claim is approved, the item is moved from the active listings into the **Recovered Items** archive.

Users can view previously recovered items and track the platform's recovery activity.

### 📊 Dashboard

The dashboard provides an overview of platform activity, including statistics related to:

* Found items
* Active items
* Claims
* Recovered items

---

## 🔄 Application Workflow

```text
┌─────────────────────┐
│   User Registers    │
│      / Logs In      │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│    Finder Reports   │
│     Lost Item       │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│   Item Appears in   │
│    Browse Items     │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Potential Owner     │
│ Submits a Claim     │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Ownership Details   │
│   Are Verified      │
└──────────┬──────────┘
           │
           ▼
      ┌────┴────┐
      │         │
      ▼         ▼
┌──────────┐ ┌──────────┐
│ Approve  │ │  Reject  │
│  Claim   │ │  Claim   │
└────┬─────┘ └──────────┘
     │
     ▼
┌─────────────────────┐
│  Item Moved to      │
│ Recovered Items     │
└─────────────────────┘
```

---

## 🖥️ Application Structure

The application is divided into a **React frontend** and a **Node.js/Express backend**.

```text
campus-lost-found/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── campus_lnf.db
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   │
│   └── src/
│       ├── components/
│       │   └── Navbar.js
│       │
│       ├── pages/
│       │   ├── LandingPage.js
│       │   ├── Login.js
│       │   ├── Register.js
│       │   ├── Dashboard.js
│       │   ├── FinderMode.js
│       │   ├── LoserMode.js
│       │   ├── ClaimPage.js
│       │   ├── ReviewClaims.js
│       │   └── ReturnedItems.js
│       │
│       ├── services/
│       │
│       ├── App.js
│       └── index.js
│
└── README.md
```

---

## 🛠️ Tech Stack

| Layer          | Technology            |
| -------------- | --------------------- |
| Frontend       | React.js              |
| Routing        | React Router          |
| Styling        | CSS3                  |
| Backend        | Node.js               |
| API            | Express.js            |
| Database       | SQLite                |
| Authentication | JSON Web Tokens (JWT) |
| File Uploads   | Multer                |

---

## 🏗️ Architecture

```text
                 ┌────────────────────┐
                 │      React.js      │
                 │     Frontend       │
                 └─────────┬──────────┘
                           │
                    HTTP / REST API
                           │
                           ▼
                 ┌────────────────────┐
                 │    Express.js      │
                 │      Backend       │
                 └─────────┬──────────┘
                           │
              ┌────────────┴────────────┐
              │                         │
              ▼                         ▼
       ┌─────────────┐          ┌─────────────┐
       │ JWT Auth    │          │   Multer    │
       │ Middleware  │          │ File Upload │
       └─────────────┘          └─────────────┘
                           │
                           ▼
                 ┌────────────────────┐
                 │      SQLite        │
                 │     Database       │
                 └────────────────────┘
```

---

## 🔐 Security

Security is built into the application's core workflow.

### JWT Authentication

Users authenticate through JWT-based login sessions. Protected API endpoints require a valid authentication token.

### Protected Routes

Sensitive pages and API operations are restricted to authenticated users.

### Finder Authorization

Claim information is not publicly accessible. Only the finder who originally reported an item can review its claims.

### Ownership Verification

Claimants must provide item-specific ownership information before a finder can approve their claim.

### Controlled Recovery Workflow

An item is only moved into the recovered archive after the associated finder explicitly approves a claim.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* Git

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd campus-lost-found
```

### 2. Start the Backend

Open a terminal:

```bash
cd backend
npm install
npm start
```

The backend server will run on:

```text
http://localhost:5000
```

### 3. Start the Frontend

Open another terminal:

```bash
cd frontend
npm install
npm start
```

The frontend will run on:

```text
http://localhost:3000
```

---

## 🧑‍💻 Usage

### 1. Create an Account

Register using the application and log in with your credentials.

### 2. Report a Found Item

Enter **Finder Mode** and provide:

* Item name
* Category
* Description
* Found location
* Image

### 3. Browse Items

Open **Browse Items** to search through reported items.

You can:

* Search by item name
* Search descriptions
* Filter by category
* Open item images in fullscreen

### 4. Submit a Claim

If you recognize an item as yours, open the claim page and provide the requested ownership verification details.

### 5. Finder Reviews the Claim

The person who reported the item receives access to the claim details and reviews the provided information.

### 6. Claim Decision

The finder can either:

**Approve** → The item is marked as recovered.

**Reject** → The item remains available for potential legitimate claims.

### 7. View Recovered Items

Approved items are moved into the **Recovered Items** archive.

---

## 📂 Main Pages

| Page           | Purpose                            |
| -------------- | ---------------------------------- |
| Landing Page   | Introduction to the platform       |
| Login          | User authentication                |
| Register       | New user registration              |
| Dashboard      | Platform statistics and navigation |
| Finder Mode    | Report found items                 |
| Loser Mode     | Browse and search found items      |
| Claim Page     | Submit an ownership claim          |
| Review Claims  | Finder-side claim management       |
| Returned Items | View recovered items               |

---

## 🔮 Future Enhancements

The project can be extended with additional functionality such as:

* 👨‍💼 Admin dashboard
* 📧 Email notifications
* 🔔 Real-time claim notifications
* 🔍 Advanced search and filtering
* 👤 User profiles
* 🤖 AI-assisted ownership verification
* 📈 Campus-wide analytics
* 📍 Interactive campus maps
* 📱 Progressive Web App support
* 🖼️ AI-powered image similarity matching
* 🏷️ Automatic item categorization
* 📊 Recovery-rate analytics

---

## 🎯 Project Goals

The main goals of Campus Lost & Found are to:

* Create a centralized campus lost-and-found system
* Make reporting found items simple
* Make searching for lost belongings faster
* Reduce fraudulent ownership claims
* Provide a structured verification process
* Give finders control over claim approval
* Maintain a record of successfully recovered items

---

## 📌 Future Vision

The long-term vision is to turn Campus Lost & Found into an **intelligent campus recovery platform**.

With AI-powered image matching, smart item categorization, automated notifications, and campus analytics, the platform could significantly reduce the time required to reunite students with their belongings.

---

## 👥 Project

**Campus Lost & Found**

A full-stack web application built to make recovering lost belongings on campus **faster, safer, and more organized**.

---

## ⭐ If You Like This Project

If you find this project useful or interesting, consider giving the repository a ⭐ on GitHub.
