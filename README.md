# BOLES Enterprise Smart Shop

A modern, feature-rich e-commerce platform for smart home devices built with Next.js 15, TypeScript, and Tailwind CSS. This shopping platform provides a seamless experience for browsing, comparing, and purchasing smart home devices with advanced features like product comparison, wishlist, and comprehensive search functionality.

![BOLES Smart Shop](https://via.placeholder.com/1200x600/112137/43abc3?text=BOLES+Smart+Shop)

## 🌟 Features

### Core E-commerce Features
- **Product Catalog**: Browse 50+ smart home devices with detailed specifications
- **Advanced Search**: Real-time search with autocomplete and recent search history
- **Product Filtering**: Filter by category, price range, brand, and features
- **Product Sorting**: Sort by price, rating, popularity, and newest
- **Shopping Cart**: Add/remove items with persistent cart state
- **Product Comparison**: Compare up to 4 products side-by-side
- **Wishlist**: Save favorite products for later
- **Product Reviews**: Customer reviews and ratings system

### User Experience
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Product Detail Pages**: Individual pages with image galleries and specifications
- **Grid/List View**: Toggle between product display modes
- **User Authentication**: Sign-up and sign-in functionality
- **Product Detail Modal**: Quick product preview without navigation

### Technical Features
- **Server-Side Rendering**: Built with Next.js 15 App Router
- **Type Safety**: Full TypeScript implementation
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **State Management**: React Context API for cart, auth, search, and comparison
- **Performance**: Optimized with Next.js features and best practices

## 🛠 Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **Icons**: Lucide React
- **Package Manager**: Bun
- **Linting**: Biome
- **Build Tool**: Turbopack (development)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or Bun
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mostiock/boles-enterprise-smart-shop.git
   cd boles-enterprise-smart-shop
   ```

2. **Install dependencies**
   ```bash
   bun install
   # or
   npm install
   ```

3. **Run the development server**
   ```bash
   bun dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `bun dev` - Start development server with Turbopack
- `bun build` - Build for production
- `bun start` - Start production server
- `bun lint` - Run Biome linter and TypeScript checks
- `bun format` - Format code with Biome

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── auth/              # Authentication pages
│   ├── products/[id]/     # Dynamic product pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home/shop page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── Header.tsx        # Navigation header
│   ├── ProductCard.tsx   # Product card component
│   ├── CartSidebar.tsx   # Shopping cart
│   └── ...
├── contexts/             # React contexts
│   ├── CartContext.tsx   # Cart state management
│   ├── AuthContext.tsx   # Authentication state
│   └── ...
├── data/                 # Static data
│   ├── products.ts       # Product database
│   └── reviews.ts        # Product reviews
├── types/                # TypeScript types
└── lib/                  # Utility functions
```

## 🎨 Design System

The application uses BOLES Enterprise brand colors:
- **Primary**: #112137 (Navy Blue)
- **Secondary**: #43abc3 (Teal)
- **Accent**: #f97316 (Orange)
- **Background**: #f8fafc (Light Gray)

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Deploy with default settings

### Netlify
1. Build the project: `bun run build`
2. Deploy the `out` folder to Netlify
3. Configure as a static site

### Manual Deployment
```bash
bun run build
bun run start
```

## 🧪 Testing

Run the linter and type checks:
```bash
bun run lint
```

Format code:
```bash
bun run format
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🔗 Links

- **Repository**: [GitHub](https://github.com/mostiock/boles-enterprise-smart-shop)
- **Documentation**: [Next.js Docs](https://nextjs.org/docs)
- **shadcn/ui**: [Component Library](https://ui.shadcn.com)

## 💡 Future Enhancements

- [ ] Payment integration (Stripe)
- [ ] Order history and tracking
- [ ] User profiles and preferences
- [ ] Product recommendations
- [ ] Inventory management
- [ ] Multi-language support
- [ ] Dark mode theme
- [ ] Progressive Web App (PWA)
- [ ] Advanced analytics
- [ ] Admin dashboard

---

Built with ❤️ by [BOLES Enterprise](https://www.bolesenterprise.io)