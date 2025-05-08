# SheCures

## 🇸🇱 Women Empowerment Platform – Sierra Leone

A digital platform created to empower, support, and connect women in Sierra Leone. This platform provides tools and safe spaces for women to thrive — from community interaction and access to resources, to business promotion, job opportunities, legal help, and emotional support.

---

## 🌟 Key Features

### 💬 Community Forum

A safe and supportive space where women can share experiences, seek advice, and discuss important topics—from health and wellness to personal development and leadership.

### 📚 Resource Center

A curated library of educational guides, articles, and tools focused on women’s empowerment, health, rights, and personal growth.

### 🛍️ Marketplace

Support and shop from women-owned businesses. Promote local products and empower female entrepreneurs to grow their ventures.

### 💼 Job Board

Discover job opportunities tailored for women and access career development tools to promote financial independence.

### 🛡️ Report Section

Report incidents of abuse, harassment, or legal concerns confidentially, with support from qualified legal professionals and counselors.

### 🆘 Real-Time Support

Get instant help via live chat or phone support. Women can access emotional counseling, legal advice, or emergency assistance in real time.

---

## 🛠️ Tech Stack

- **Frontend & Framework**: [Next.js](https://nextjs.org)
- **Authentication**: [Clerk.dev](https://clerk.dev)
- **Database**: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **File Storage**: [Edge Store](https://edgestore.dev)
- **Hosting**: [Vercel](https://vercel.com)

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/kabadev/shecures.git
cd wshecures
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Setup Environment Variables

Create a `.env.local` file in the root directory and add the following:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=XXXXX
CLERK_SECRET_KEY=XXXXX
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

MONGODB_URL=XXXXX
TOKEN_SECRET=XXXXX

EDGE_STORE_ACCESS_KEY=XXXXX
EDGE_STORE_SECRET_KEY=XXXXX
```

> ⚠️ **Note:** Do not commit `.env.local` to version control. Add this file to `.gitignore`.

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## 📁 Project Structure

```bash
.
├── app/                  # Next.js App directory
│   ├── api/              # API routes
│   ├── components/       # UI components
│   ├── styles/           # CSS modules and global styles
│   └── page.tsx          # Main landing page
├── lib/                  # Utility libraries and db helpers
├── public/               # Static assets
├── .env.local            # Local environment variables
├── next.config.js        # Next.js configuration
└── README.md             # Project documentation
```

---

## 🚀 Deployment

This app is ready to be deployed with [Vercel](https://vercel.com).

### Steps:

1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Select your repository
4. Add the environment variables in the dashboard
5. Click **Deploy**

---

## 🧩 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Clerk.dev Documentation](https://clerk.dev/docs)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Edge Store](https://edgestore.dev)

---

## 🙌 Contributing

We welcome contributions from developers, activists, NGOs, and anyone passionate about empowering women in Sierra Leone.

To contribute:

1. Fork the project
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Add feature"`)
4. Push your branch (`git push origin feature-name`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 💌 Contact

Built with ❤️ for women in Sierra Leone
