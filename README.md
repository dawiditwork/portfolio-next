# Portfolio Next

A modern personal portfolio built with Next.js. It presents selected projects, professional experience, education, technical skills, a downloadable CV, and a working contact form.

## Features

- Responsive single-page portfolio
- Selected project showcase
- Professional experience and education
- Technical skills overview
- Downloadable CV
- Contact form powered by Resend
- Optimized images and local fonts
- Production-ready Next.js build

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Nodemailer](https://nodemailer.com/)
- [Resend](https://resend.com/)
- CSS

## Getting Started

### Requirements

- Node.js 20 or newer
- npm
- A Resend account and API key

### Installation

Clone the repository:

```bash
git clone https://github.com/dawiditwork/portfolio-next.git
cd portfolio-next
```

Install the dependencies:

```bash
npm install
```

Create a local environment file:

```bash
copy .env.example .env
```

On macOS or Linux:

```bash
cp .env.example .env
```

Configure the required environment variables:

```env
SMTP_HOST=smtp.resend.com
SMTP_PORT=465
SMTP_USER=resend
SMTP_PASS=your-resend-api-key
SMTP_FROM=Portfolio <contact@your-verified-domain.com>
CONTACT_TO=your-email@example.com
```

Never commit your `.env` file or Resend API key.

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

- `npm run dev` starts the development server.
- `npm run lint` checks the project with ESLint.
- `npm run build` creates an optimized production build.
- `npm run start` runs the production build.

## Contact Form

The contact form sends a `POST` request to:

```text
/api/contact
```

The Next.js API route validates the submitted data and sends the message through Resend SMTP. The visitor's email address is assigned to `replyTo`, allowing direct replies from the received email.

For local environments that intercept TLS connections, the application supports:

```env
SMTP_ALLOW_SELF_SIGNED=true
```

Use this option only during local development. Never enable it in production.

## Deployment

The project can be deployed with [Vercel](https://vercel.com/):

1. Import this GitHub repository into Vercel.
2. Open **Project Settings → Environment Variables**.
3. Add all required SMTP variables.
4. Do not add `SMTP_ALLOW_SELF_SIGNED=true` in production.
5. Deploy the project.

## Project Structure

```text
app/
  api/contact/route.js
  globals.css
  layout.js
  page.js
components/
  Portfolio.js
public/
  fonts/
  images/
```

## License

This project is currently published without an open-source license. All rights are reserved unless stated otherwise.
