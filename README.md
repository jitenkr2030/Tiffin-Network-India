# Tiffin Network India 🍱

A comprehensive tiffin booking website built with Next.js 16, TypeScript, and Tailwind CSS. Complete customer and admin functionality for managing daily tiffin deliveries in Delhi.

## 🌟 Features

### Customer Features
- 📋 **Interactive Menu** - Browse tiffin options with detailed descriptions and pricing
- 📝 **Smart Booking Form** - Real-time price calculation and form validation
- 📅 **Flexible Subscriptions** - Daily, Weekly, and Monthly options with discounts
- 📱 **WhatsApp Integration** - Easy ordering via WhatsApp
- 📍 **Service Areas** - West Delhi locations (Janakpuri, Palam, Sagar Pur, Uttam Nagar, Maya Puri, Hari Nagar, Tilak Nagar)
- 📞 **Contact Information** - Complete contact details and FAQ

### Admin Features
- 📊 **Dashboard** - Real-time statistics and order overview
- 🔍 **Advanced Search** - Filter orders by status, area, date, and customer
- ✏️ **Order Management** - Update order status and manage deliveries
- 📈 **Analytics** - Daily revenue, order counts, and customer insights
- 📦 **Order Tracking** - Complete order lifecycle management

## 🛠️ Tech Stack

- **Frontend**: Next.js 16 (App Router), TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui, Lucide Icons
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: SQLite (easily upgradeable to PostgreSQL)
- **Styling**: Tailwind CSS with responsive design
- **Form Handling**: React Hook Form with validation
- **Notifications**: Toast notifications for user feedback

## 📁 Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── api/            # API routes
│   │   ├── admin/          # Admin dashboard
│   │   ├── book/           # Booking page
│   │   ├── menu/           # Menu page
│   │   ├── contact/        # Contact page
│   │   └── about/          # About page
│   ├── components/         # Reusable React components
│   ├── lib/               # Utility functions and database client
│   └── hooks/             # Custom React hooks
├── prisma/                # Database schema and migrations
├── public/                # Static assets
└── db/                    # SQLite database files
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jitenkr2030/Tiffin-Network-India.git
   cd Tiffin-Network-India
   ```

2. **Install dependencies**
   ```bash
   bun install
   # or
   npm install
   ```

3. **Set up the database**
   ```bash
   bun run db:push
   ```

4. **Start the development server**
   ```bash
   bun run dev
   # or
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Pages Overview

### Home (`/`)
- Hero section with call-to-action
- Popular tiffin options
- Service areas showcase
- Customer testimonials

### Menu (`/menu`)
- Interactive tiffin categories
- Detailed pricing and descriptions
- Weekly menu schedule
- Popular items highlighted

### Book Tiffin (`/book`)
- Comprehensive booking form
- Real-time price calculation
- Subscription options with discounts
- Service area selection
- Form validation and submission

### About Us (`/about`)
- Company story and mission
- Team information
- Service values
- Service areas coverage

### Contact (`/contact`)
- Complete contact information
- Quick contact options
- Contact form for inquiries
- FAQ section

### Admin Dashboard (`/admin`)
- Real-time statistics
- Order management
- Advanced filtering
- Order status updates

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file:
```env
DATABASE_URL="file:./db/custom.db"
```

### Database Schema
The application uses Prisma ORM with the following main models:

- **TiffinOrder**: Customer orders with all details
- **TiffinMenu**: Menu items and pricing (extensible)

## 📦 API Routes

### Orders API
- `POST /api/orders` - Create new order
- `GET /api/orders` - List all orders (with filtering)
- `PATCH /api/orders/[id]` - Update order status

## 🎨 Customization

### Adding New Tiffin Options
1. Update the `tiffinOptions` array in `/src/app/book/page.tsx`
2. Modify the database schema if needed
3. Update pricing and descriptions

### Adding New Service Areas
1. Update the `areas` array in booking form
2. Add to the service areas display
3. Update admin dashboard filters

### Styling
- Modify `tailwind.config.ts` for theme customization
- Update colors in CSS variables
- Add new components in `/src/components/ui/`

## 🚀 Deployment

### Build for Production
```bash
bun run build
bun start
```

### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Set environment variables
3. Deploy automatically

### Other Platforms
The application is compatible with:
- Netlify
- Railway
- Digital Ocean App Platform
- Any Node.js hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support or questions:
- 📞 Call: +91 87001 89551
- 📧 Email: support@tiffinnetworkindia.com
- 💬 WhatsApp: +91 87001 89551
- 📍 Main Kitchen: District Centre, Janakpuri, New Delhi 110058

---

**Built with ❤️ for Tiffin Network India**