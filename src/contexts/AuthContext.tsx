'use client';

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { User, Order, WishlistItem } from '@/types/user';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: RegisterData) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => Promise<void>;
  orders: Order[];
  wishlist: WishlistItem[];
  addToWishlist: (productId: string) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
}

interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data
const mockUser: User = {
  id: 'user-1',
  email: 'demo@bolesenterprise.io',
  firstName: 'John',
  lastName: 'Smith',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
  phone: '+1 (555) 123-4567',
  dateJoined: '2023-06-15',
  addresses: [
    {
      id: 'addr-1',
      type: 'shipping',
      firstName: 'John',
      lastName: 'Smith',
      address1: '123 Smart Home Ave',
      city: 'Tech City',
      state: 'CA',
      zipCode: '94105',
      country: 'United States',
      isDefault: true
    }
  ],
  preferences: {
    emailNotifications: true,
    smsNotifications: false,
    marketingEmails: true,
    currency: 'USD',
    language: 'en'
  }
};

const mockOrders: Order[] = [
  {
    id: 'order-001',
    userId: 'user-1',
    status: 'delivered',
    items: [
      {
        productId: 'mixpad-mini',
        productName: 'MixPad Mini Super Smart Panel',
        productImage: 'https://ext.same-assets.com/596243380/550675188.png',
        quantity: 1,
        price: 299,
        total: 299
      }
    ],
    subtotal: 299,
    tax: 23.92,
    shipping: 0,
    total: 322.92,
    shippingAddress: mockUser.addresses[0],
    billingAddress: mockUser.addresses[0],
    paymentMethod: {
      id: 'pm-1',
      type: 'card',
      last4: '4242',
      brand: 'Visa',
      expiryMonth: 12,
      expiryYear: 2027,
      isDefault: true
    },
    orderDate: '2024-01-10',
    estimatedDelivery: '2024-01-15',
    trackingNumber: 'BOLES123456789'
  },
  {
    id: 'order-002',
    userId: 'user-1',
    status: 'shipped',
    items: [
      {
        productId: 'outdoor-security-cam',
        productName: 'BOLES Outdoor Security Camera',
        productImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop',
        quantity: 2,
        price: 249,
        total: 498
      }
    ],
    subtotal: 498,
    tax: 39.84,
    shipping: 0,
    total: 537.84,
    shippingAddress: mockUser.addresses[0],
    billingAddress: mockUser.addresses[0],
    paymentMethod: {
      id: 'pm-1',
      type: 'card',
      last4: '4242',
      brand: 'Visa',
      expiryMonth: 12,
      expiryYear: 2027,
      isDefault: true
    },
    orderDate: '2024-01-20',
    estimatedDelivery: '2024-01-25',
    trackingNumber: 'BOLES987654321'
  }
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState<Order[]>([]);
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  useEffect(() => {
    // Simulate checking for existing session
    const checkAuth = async () => {
      const storedUser = localStorage.getItem('boles_user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
        setOrders(mockOrders);

        // Load wishlist from localStorage
        const storedWishlist = localStorage.getItem('boles_wishlist');
        if (storedWishlist) {
          setWishlist(JSON.parse(storedWishlist));
        }
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (email === 'demo@bolesenterprise.io' && password === 'demo123') {
        setUser(mockUser);
        setOrders(mockOrders);
        localStorage.setItem('boles_user', JSON.stringify(mockUser));
      } else {
        throw new Error('Invalid credentials');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData: RegisterData) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      const newUser: User = {
        id: `user-${Date.now()}`,
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        phone: userData.phone,
        dateJoined: new Date().toISOString().split('T')[0],
        addresses: [],
        preferences: {
          emailNotifications: true,
          smsNotifications: false,
          marketingEmails: true,
          currency: 'USD',
          language: 'en'
        }
      };

      setUser(newUser);
      localStorage.setItem('boles_user', JSON.stringify(newUser));
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setOrders([]);
    setWishlist([]);
    localStorage.removeItem('boles_user');
    localStorage.removeItem('boles_wishlist');
  };

  const updateProfile = async (data: Partial<User>) => {
    if (!user) return;

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));

      const updatedUser = { ...user, ...data };
      setUser(updatedUser);
      localStorage.setItem('boles_user', JSON.stringify(updatedUser));
    } finally {
      setIsLoading(false);
    }
  };

  const addToWishlist = (productId: string) => {
    if (!user) return;

    const newItem: WishlistItem = {
      id: `wishlist-${Date.now()}`,
      productId,
      userId: user.id,
      dateAdded: new Date().toISOString()
    };

    const updatedWishlist = [...wishlist, newItem];
    setWishlist(updatedWishlist);
    localStorage.setItem('boles_wishlist', JSON.stringify(updatedWishlist));
  };

  const removeFromWishlist = (productId: string) => {
    const updatedWishlist = wishlist.filter(item => item.productId !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem('boles_wishlist', JSON.stringify(updatedWishlist));
  };

  const isInWishlist = (productId: string) => {
    return wishlist.some(item => item.productId === productId);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
        updateProfile,
        orders,
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
