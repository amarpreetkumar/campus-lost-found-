# ðŸŽ“ Campus Lost & Found

A full-stack web application that helps students **report, discover, and recover lost belongings on campus** through a secure claim and ownership-verification workflow.

The platform connects students who find lost items with their potential owners, while ensuring that claims are reviewed by the person who originally reported the item.

---

## ðŸ“Œ Overview

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

## âœ¨ Key Features

### ðŸ” Authentication & Security

* User registration and login
* JWT-based authentication
* Protected frontend and backend routes
* Authenticated API requests
* Finder-only claim review
* Finder-only visibility of claim details
* Ownership verification before approval

### ðŸ”Ž Found Item Discovery

* Browse all available found items
* Search items by name or description
* Filter items by category
* View item details
* Fullscreen image preview
* Location information for reported items

### ðŸ“¦ Finder Mode

Users who find an item can report it by providing:

* Item name
* Category
* Description
* Found location
* Item image

Once submitted, the item becomes available for other users to browse.

### ðŸ™‹ Claim System

Users who believe an item belongs to them can submit a claim request.

The claim process includes:

1. Selecting the item
2. Providing ownership details
3. Answering verification questions
4. Submitting the claim to the finder

This helps prevent unauthorized users from simply claiming an item.

### âœ… Claim Review

The user who originally reported the item can review incoming claims.

The finder can:

* View ownership verification details
* Approve a legitimate claim
* Reject an invalid claim

Only the finder associated with the item can access and manage its claims.

### ðŸŽ’ Recovered Items

Once a claim is approved, the item is moved from the active listings into the **Recovered Items** archive.

Users can view previously recovered items and track the platform's recovery activity.

### ðŸ“Š Dashboard

The dashboard provides an overview of platform activity, including statistics related to:

* Found items
* Active items
* Claims
* Recovered items

---

## ðŸ”„ Application Workflow

```text
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚   User Registers    â”‚
â”‚      / Logs In      â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
           â”‚
           â–¼
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚    Finder Reports   â”‚
â”‚     Lost Item       â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
           â”‚
           â–¼
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚   Item Appears in   â”‚
â”‚    Browse Items     â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
           â”‚
           â–¼
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ Potential Owner     â”‚
â”‚ Submits a Claim     â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
           â”‚
           â–¼
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ Ownership Details   â”‚
â”‚   Are Verified      â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
           â”‚
           â–¼
      â”Œâ”€â”€â”€â”€â”´â”€â”€â”€â”€â”
      â”‚         â”‚
      â–¼         â–¼
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ Approve  â”‚ â”‚  Reject  â”‚
â”‚  Claim   â”‚ â”‚  Claim   â”‚
â””â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”˜ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
     â”‚
     â–¼
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚  Item Moved to      â”‚
â”‚ Recovered Items     â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

---

## ðŸ–¥ï¸ Application Structure

The application is divided into a **React frontend** and a **Node.js/Express backend**.

```text
campus-lost-found/
â”‚
â”œâ”€â”€ backend/
â”‚   â”œâ”€â”€ server.js
â”‚   â”œâ”€â”€ package.json
â”‚   â””â”€â”€ campus_lnf.db
â”‚
â”œâ”€â”€ frontend/
â”‚   â”œâ”€â”€ public/
â”‚   â”‚   â””â”€â”€ index.html
â”‚   â”‚
â”‚   â””â”€â”€ src/
â”‚       â”œâ”€â”€ components/
â”‚       â”‚   â””â”€â”€ Navbar.js
â”‚       â”‚
â”‚       â”œâ”€â”€ pages/
â”‚       â”‚   â”œâ”€â”€ LandingPage.js
â”‚       â”‚   â”œâ”€â”€ Login.js
â”‚       â”‚   â”œâ”€â”€ Register.js
â”‚       â”‚   â”œâ”€â”€ Dashboard.js
â”‚       â”‚   â”œâ”€â”€ FinderMode.js
â”‚       â”‚   â”œâ”€â”€ LoserMode.js
â”‚       â”‚   â”œâ”€â”€ ClaimPage.js
â”‚       â”‚   â”œâ”€â”€ ReviewClaims.js
â”‚       â”‚   â””â”€â”€ ReturnedItems.js
â”‚       â”‚
â”‚       â”œâ”€â”€ services/
â”‚       â”‚
â”‚       â”œâ”€â”€ App.js
â”‚       â””â”€â”€ index.js
â”‚
â””â”€â”€ README.md
```

---

## ðŸ› ï¸ Tech Stack

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

## ðŸ—ï¸ Architecture

```text
                 â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
                 â”‚      React.js      â”‚
                 â”‚     Frontend       â”‚
                 â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                           â”‚
                    HTTP / REST API
                           â”‚
                           â–¼
                 â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
                 â”‚    Express.js      â”‚
                 â”‚      Backend       â”‚
                 â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                           â”‚
              â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
              â”‚                         â”‚
              â–¼                         â–¼
       â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”          â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
       â”‚ JWT Auth    â”‚          â”‚   Multer    â”‚
       â”‚ Middleware  â”‚          â”‚ File Upload â”‚
       â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜          â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                           â”‚
                           â–¼
                 â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
                 â”‚      SQLite        â”‚
                 â”‚     Database       â”‚
                 â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

---

## ðŸ” Security

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

## ðŸš€ Getting Started

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

## ðŸ§‘â€ðŸ’» Usage

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

**Approve** â†’ The item is marked as recovered.

**Reject** â†’ The item remains available for potential legitimate claims.

### 7. View Recovered Items

Approved items are moved into the **Recovered Items** archive.

---

## ðŸ“‚ Main Pages

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

## ðŸ”® Future Enhancements

The project can be extended with additional functionality such as:

* ðŸ‘¨â€ðŸ’¼ Admin dashboard
* ðŸ“§ Email notifications
* ðŸ”” Real-time claim notifications
* ðŸ” Advanced search and filtering
* ðŸ‘¤ User profiles
* ðŸ¤– AI-assisted ownership verification
* ðŸ“ˆ Campus-wide analytics
* ðŸ“ Interactive campus maps
* ðŸ“± Progressive Web App support
* ðŸ–¼ï¸ AI-powered image similarity matching
* ðŸ·ï¸ Automatic item categorization
* ðŸ“Š Recovery-rate analytics

---

## ðŸŽ¯ Project Goals

The main goals of Campus Lost & Found are to:

* Create a centralized campus lost-and-found system
* Make reporting found items simple
* Make searching for lost belongings faster
* Reduce fraudulent ownership claims
* Provide a structured verification process
* Give finders control over claim approval
* Maintain a record of successfully recovered items

---

## ðŸ“Œ Future Vision

The long-term vision is to turn Campus Lost & Found into an **intelligent campus recovery platform**.

With AI-powered image matching, smart item categorization, automated notifications, and campus analytics, the platform could significantly reduce the time required to reunite students with their belongings.

---

## ðŸ‘¥ Project

**Campus Lost & Found**

A full-stack web application built to make recovering lost belongings on campus **faster, safer, and more organized**.

---

## â­ If You Like This Project

If you find this project useful or interesting, consider giving the repository a â­ on GitHub.

---

## Deployment

The project is now ready for a single-service deployment where the Express backend serves the React production build.

### Recommended: Render web service

1. Push this repository to GitHub.
2. Open Render and choose **New +** -> **Blueprint**.
3. Connect the GitHub repository.
4. Render will detect `render.yaml` and create one web service named `campus-lost-found`.
5. Confirm these settings if Render asks:
   - Build command: `npm ci --prefix backend && npm ci --prefix frontend && npm run build --prefix frontend`
   - Start command: `npm start --prefix backend`
   - Health check path: `/api/health`
6. Add or confirm environment variables:
   - `NODE_ENV=production`
   - `DATA_DIR=/tmp/campus-lost-found`
   - `JWT_SECRET=<generate a long random secret>`
7. Deploy. After it finishes, open the Render service URL.

On Render's free tier, disks are not supported. This free Blueprint stores SQLite data and uploaded images in temporary storage, so data can be lost when the service restarts or redeploys. For a real production deployment, upgrade the service plan and add a persistent disk, then set DATA_DIR to the disk mount path, for example /var/data.

### Split deployment option

If you deploy the backend and frontend separately:

1. Deploy `backend/` as a Node service.
2. Set backend environment variables:
   - `JWT_SECRET=<generate a long random secret>`
   - `CLIENT_ORIGIN=<your frontend URL>`
   - `DATA_DIR=<persistent data directory if your host supports it>`
3. Deploy `frontend/` as a React static site.
4. Set frontend environment variable before building:
   - `REACT_APP_API_URL=<your backend origin, without /api>`

Example: `REACT_APP_API_URL=https://campus-lost-found-api.onrender.com`

### Local production test

From the repository root:

```bash
npm ci --prefix backend
npm ci --prefix frontend
npm run build --prefix frontend
JWT_SECRET=local-dev-secret NODE_ENV=production npm start --prefix backend
```

Then open `http://localhost:5000`.
