# BOLES Smart Home E-commerce Platform

A modern, feature-rich e-commerce platform for smart home devices built with Next.js 15, TypeScript, and Tailwind CSS. This shopping platform provides a seamless experience for browsing, comparing, and purchasing smart home devices with **real-time NGN currency conversion**, advanced search functionality, and responsive design using shadcn/ui components.

![BOLES Smart Shop](https://via.placeholder.com/1200x600/112137/43abc3?text=BOLES+Smart+Home+Platform)

## 🌟 Features

### Core E-commerce Features
- **Product Catalog**: Browse 50+ smart home devices with detailed specifications
- **Real-time Currency Conversion**: Automatic USD to NGN conversion with live exchange rates
- **Advanced Search**: Real-time search with autocomplete and recent search history
- **Product Filtering**: Filter by category, price range, brand, and features
- **Product Sorting**: Sort by price, rating, popularity, and newest
- **Shopping Cart**: Add/remove items with persistent cart state in NGN
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
- **State Management**: React Context API for cart, auth, search, comparison, and currency
- **Performance**: Optimized with Next.js features and best practices
- **Currency API Integration**: Multiple exchange rate APIs with fallback support

## 💱 Currency Conversion System

The platform features a sophisticated real-time currency conversion system that automatically converts product prices from USD to Nigerian Naira (NGN):

### Key Features
- **Real-time Exchange Rates**: Fetches live USD to NGN exchange rates from multiple APIs
- **Automatic Fallback**: Uses backup APIs and fallback rates to ensure reliability
- **Smart Caching**: 1-hour cache duration to minimize API calls and improve performance
- **Error Handling**: Graceful degradation with fallback rates if APIs are unavailable
- **Multiple API Sources**: 
  - Primary: `exchangerate-api.com`
  - Backup: `open.er-api.com`
  - Fallback: Static rate (₦1,589.77 as of May 30, 2025)

### Currency Features
- **Automatic Conversion**: All prices automatically display in NGN
- **Format Consistency**: Proper Naira formatting with Nigerian locale
- **Currency Status**: Real-time currency status indicator in the header
- **Refresh Capability**: Manual refresh option for exchange rates
- **Context Management**: Global currency state management via React Context

### Technical Implementation
```typescript
// Currency conversion with caching
const rate = await getCurrentExchangeRate();
const ngnPrice = usdPrice * rate;
const formatted = formatNaira(ngnPrice); // ₦125,000
```

## 🛠 Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **Icons**: Lucide React
- **Package Manager**: Bun
- **Linting**: Biome
- **Build Tool**: Turbopack (development)
- **Currency APIs**: exchangerate-api.com, open.er-api.com

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or Bun
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mostiock/boles-smart-shop.git
   cd boles-smart-shop
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

## 🖥️ Screenshots & Demo

### Main Features Showcase
- **Homepage**: Product catalog with category filtering and NGN pricing
- **Product Details**: Individual product pages with specifications and reviews
- **Shopping Cart**: Cart sidebar with NGN totals and currency status
- **Search**: Real-time search with autocomplete functionality
- **Currency Conversion**: Live USD to NGN conversion display
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### Live Demo
The application can be deployed to various platforms:
- **Vercel**: Recommended for Next.js applications
- **Netlify**: Static site deployment option
- **Local Development**: Full-featured development environment

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

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 BOLES Enterprise

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🔗 Links

- **Repository**: [GitHub](https://github.com/mostiock/boles-smart-shop)
- **Documentation**: [Next.js Docs](https://nextjs.org/docs)
- **shadcn/ui**: [Component Library](https://ui.shadcn.com)
- **Exchange Rate API**: [ExchangeRate-API](https://exchangerate-api.com)
- **Tailwind CSS**: [Documentation](https://tailwindcss.com/docs)

## 💡 Future Enhancements

- [ ] **Payment Integration**: Stripe/Paystack for secure NGN payments
- [ ] **Order Management**: Order history, tracking, and status updates
- [ ] **User Profiles**: User preferences, addresses, and account management
- [ ] **Product Recommendations**: AI-powered product suggestions
- [ ] **Inventory Management**: Real-time stock tracking and notifications
- [ ] **Multi-language Support**: English and local Nigerian languages
- [ ] **Dark Mode**: Theme switching capability
- [ ] **Progressive Web App**: Offline functionality and app installation
- [ ] **Advanced Analytics**: User behavior and sales analytics
- [ ] **Admin Dashboard**: Comprehensive admin panel for product management
- [ ] **Currency Alerts**: Exchange rate change notifications
- [ ] **Bulk Pricing**: Wholesale pricing for bulk orders
- [ ] **Product Reviews**: Enhanced review system with images
- [ ] **Social Sharing**: Product sharing on social media platforms

---

Built with ❤️ by [BOLES Enterprise](https://www.bolesenterprise.io)