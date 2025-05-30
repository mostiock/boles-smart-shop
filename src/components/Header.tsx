'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SearchComponent } from '@/components/SearchComponent';
import { CurrencyStatus } from '@/components/CurrencyStatus';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { useComparison } from '@/contexts/ComparisonContext';
import { ShoppingCart, Menu, X, User, GitCompare } from 'lucide-react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart, toggleCart } = useCart();
  const { isAuthenticated, user } = useAuth();
  const { comparedProducts, toggleComparison } = useComparison();

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://ext.same-assets.com/596243380/3736915175.png"
              alt="BOLES Enterprise"
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-[#43abc3] transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="text-foreground hover:text-[#43abc3] transition-colors">
                Products
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-4">
                  <a href="#smart-lighting" className="block py-2 text-sm text-foreground hover:text-[#43abc3]">
                    SMART HOME AUTOMATION LIGHTING
                  </a>
                  <a href="#security-cameras" className="block py-2 text-sm text-foreground hover:text-[#43abc3]">
                    SECURITY CAMERAS
                  </a>
                  <a href="#smart-speakers" className="block py-2 text-sm text-foreground hover:text-[#43abc3]">
                    SMART SPEAKERS
                  </a>
                  <a href="#smart-locks" className="block py-2 text-sm text-foreground hover:text-[#43abc3]">
                    SMART LOCKS
                  </a>
                  <a href="#sensors-detectors" className="block py-2 text-sm text-foreground hover:text-[#43abc3]">
                    SENSORS & DETECTORS
                  </a>
                  <a href="#control-panels" className="block py-2 text-sm text-foreground hover:text-[#43abc3]">
                    CONTROL PANELS
                  </a>
                </div>
              </div>
            </div>
            <a href="/support" className="text-foreground hover:text-[#43abc3] transition-colors">
              Support
            </a>
            <a href="/about" className="text-foreground hover:text-[#43abc3] transition-colors">
              About Us
            </a>
          </nav>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            {/* Currency Status */}
            <div className="hidden sm:flex">
              <CurrencyStatus />
            </div>

            {/* Search */}
            <div className="hidden sm:flex items-center">
              <SearchComponent className="w-64" />
            </div>

            {/* Comparison Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleComparison}
              className="relative hidden md:flex"
            >
              <GitCompare className="h-4 w-4" />
              {comparedProducts.length > 0 && (
                <Badge
                  variant="secondary"
                  className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-[#43abc3] text-white"
                >
                  {comparedProducts.length}
                </Badge>
              )}
            </Button>

            {/* Cart Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleCart}
              className="relative"
            >
              <ShoppingCart className="h-4 w-4" />
              {cart.itemCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                >
                  {cart.itemCount}
                </Badge>
              )}
            </Button>

            {/* User Account Button */}
            <Button
              variant="outline"
              size="sm"
              className="hidden md:flex"
            >
              <User className="h-4 w-4 mr-2" />
              {isAuthenticated ? user?.firstName : 'Sign In'}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Search */}
              <div className="px-3 py-2">
                <SearchComponent className="w-full" />
              </div>

              <Link href="/" className="block px-3 py-2 text-base font-medium text-foreground hover:text-[#43abc3]">
                Home
              </Link>
              <div className="px-3 py-2">
                <div className="text-base font-medium text-foreground mb-2">Products</div>
                <div className="ml-4 space-y-1">
                  <a href="#smart-lighting" className="block py-1 text-sm text-muted-foreground hover:text-[#43abc3]">
                    Smart Lighting
                  </a>
                  <a href="#security-cameras" className="block py-1 text-sm text-muted-foreground hover:text-[#43abc3]">
                    Security Cameras
                  </a>
                  <a href="#smart-speakers" className="block py-1 text-sm text-muted-foreground hover:text-[#43abc3]">
                    Smart Speakers
                  </a>
                  <a href="#smart-locks" className="block py-1 text-sm text-muted-foreground hover:text-[#43abc3]">
                    Smart Locks
                  </a>
                  <a href="#sensors-detectors" className="block py-1 text-sm text-muted-foreground hover:text-[#43abc3]">
                    Sensors & Detectors
                  </a>
                  <a href="#control-panels" className="block py-1 text-sm text-muted-foreground hover:text-[#43abc3]">
                    Control Panels
                  </a>
                </div>
              </div>
              <a href="/support" className="block px-3 py-2 text-base font-medium text-foreground hover:text-[#43abc3]">
                Support
              </a>
              <a href="/about" className="block px-3 py-2 text-base font-medium text-foreground hover:text-[#43abc3]">
                About Us
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
