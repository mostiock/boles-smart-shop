module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/app/ClientBody.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ClientBody)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function ClientBody({ children }) {
    // Remove any extension-added classes during hydration
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // This runs only on the client after hydration
        document.body.className = "antialiased";
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "antialiased",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/ClientBody.tsx",
        lineNumber: 16,
        columnNumber: 10
    }, this);
}
}}),
"[project]/src/contexts/CartContext.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CartProvider": (()=>CartProvider),
    "useCart": (()=>useCart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const CartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const calculateTotals = (items)=>{
    const total = items.reduce((sum, item)=>sum + item.product.price * item.quantity, 0);
    const itemCount = items.reduce((sum, item)=>sum + item.quantity, 0);
    return {
        total,
        itemCount
    };
};
const cartReducer = (state, action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            {
                const existingItem = state.cart.items.find((item)=>item.product.id === action.product.id);
                let newItems;
                if (existingItem) {
                    newItems = state.cart.items.map((item)=>item.product.id === action.product.id ? {
                            ...item,
                            quantity: item.quantity + action.quantity
                        } : item);
                } else {
                    newItems = [
                        ...state.cart.items,
                        {
                            product: action.product,
                            quantity: action.quantity
                        }
                    ];
                }
                const { total, itemCount } = calculateTotals(newItems);
                return {
                    ...state,
                    cart: {
                        items: newItems,
                        total,
                        itemCount
                    }
                };
            }
        case 'REMOVE_FROM_CART':
            {
                const newItems = state.cart.items.filter((item)=>item.product.id !== action.productId);
                const { total, itemCount } = calculateTotals(newItems);
                return {
                    ...state,
                    cart: {
                        items: newItems,
                        total,
                        itemCount
                    }
                };
            }
        case 'UPDATE_QUANTITY':
            {
                if (action.quantity <= 0) {
                    return cartReducer(state, {
                        type: 'REMOVE_FROM_CART',
                        productId: action.productId
                    });
                }
                const newItems = state.cart.items.map((item)=>item.product.id === action.productId ? {
                        ...item,
                        quantity: action.quantity
                    } : item);
                const { total, itemCount } = calculateTotals(newItems);
                return {
                    ...state,
                    cart: {
                        items: newItems,
                        total,
                        itemCount
                    }
                };
            }
        case 'CLEAR_CART':
            return {
                ...state,
                cart: {
                    items: [],
                    total: 0,
                    itemCount: 0
                }
            };
        case 'TOGGLE_CART':
            return {
                ...state,
                isCartOpen: !state.isCartOpen
            };
        default:
            return state;
    }
};
const initialState = {
    cart: {
        items: [],
        total: 0,
        itemCount: 0
    },
    isCartOpen: false
};
function CartProvider({ children }) {
    const [state, dispatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducer"])(cartReducer, initialState);
    const addToCart = (product, quantity = 1)=>{
        dispatch({
            type: 'ADD_TO_CART',
            product,
            quantity
        });
    };
    const removeFromCart = (productId)=>{
        dispatch({
            type: 'REMOVE_FROM_CART',
            productId
        });
    };
    const updateQuantity = (productId, quantity)=>{
        dispatch({
            type: 'UPDATE_QUANTITY',
            productId,
            quantity
        });
    };
    const clearCart = ()=>{
        dispatch({
            type: 'CLEAR_CART'
        });
    };
    const toggleCart = ()=>{
        dispatch({
            type: 'TOGGLE_CART'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext.Provider, {
        value: {
            cart: state.cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            isCartOpen: state.isCartOpen,
            toggleCart
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/CartContext.tsx",
        lineNumber: 155,
        columnNumber: 5
    }, this);
}
function useCart() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
}}),
"[project]/src/contexts/AuthContext.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AuthProvider": (()=>AuthProvider),
    "useAuth": (()=>useAuth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
// Mock user data
const mockUser = {
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
const mockOrders = [
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
function AuthProvider({ children }) {
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [orders, setOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [wishlist, setWishlist] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Simulate checking for existing session
        const checkAuth = async ()=>{
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
    const login = async (email, password)=>{
        setIsLoading(true);
        try {
            // Simulate API call
            await new Promise((resolve)=>setTimeout(resolve, 1000));
            if (email === 'demo@bolesenterprise.io' && password === 'demo123') {
                setUser(mockUser);
                setOrders(mockOrders);
                localStorage.setItem('boles_user', JSON.stringify(mockUser));
            } else {
                throw new Error('Invalid credentials');
            }
        } finally{
            setIsLoading(false);
        }
    };
    const register = async (userData)=>{
        setIsLoading(true);
        try {
            // Simulate API call
            await new Promise((resolve)=>setTimeout(resolve, 1000));
            const newUser = {
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
        } finally{
            setIsLoading(false);
        }
    };
    const logout = ()=>{
        setUser(null);
        setOrders([]);
        setWishlist([]);
        localStorage.removeItem('boles_user');
        localStorage.removeItem('boles_wishlist');
    };
    const updateProfile = async (data)=>{
        if (!user) return;
        setIsLoading(true);
        try {
            // Simulate API call
            await new Promise((resolve)=>setTimeout(resolve, 500));
            const updatedUser = {
                ...user,
                ...data
            };
            setUser(updatedUser);
            localStorage.setItem('boles_user', JSON.stringify(updatedUser));
        } finally{
            setIsLoading(false);
        }
    };
    const addToWishlist = (productId)=>{
        if (!user) return;
        const newItem = {
            id: `wishlist-${Date.now()}`,
            productId,
            userId: user.id,
            dateAdded: new Date().toISOString()
        };
        const updatedWishlist = [
            ...wishlist,
            newItem
        ];
        setWishlist(updatedWishlist);
        localStorage.setItem('boles_wishlist', JSON.stringify(updatedWishlist));
    };
    const removeFromWishlist = (productId)=>{
        const updatedWishlist = wishlist.filter((item)=>item.productId !== productId);
        setWishlist(updatedWishlist);
        localStorage.setItem('boles_wishlist', JSON.stringify(updatedWishlist));
    };
    const isInWishlist = (productId)=>{
        return wishlist.some((item)=>item.productId === productId);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
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
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/AuthContext.tsx",
        lineNumber: 256,
        columnNumber: 5
    }, this);
}
function useAuth() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
}}),
"[project]/src/data/products.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "categories": (()=>categories),
    "featuredProducts": (()=>featuredProducts),
    "getProductById": (()=>getProductById),
    "getProductsByCategory": (()=>getProductsByCategory),
    "products": (()=>products)
});
const categories = [
    {
        id: 'smart-lighting',
        name: 'Smart Lighting',
        description: 'Intelligent lighting solutions for modern homes',
        icon: '💡'
    },
    {
        id: 'security-cameras',
        name: 'Security Cameras',
        description: 'Advanced surveillance and monitoring systems',
        icon: '📹'
    },
    {
        id: 'smart-speakers',
        name: 'Smart Speakers',
        description: 'Voice-controlled audio and smart home hubs',
        icon: '🔊'
    },
    {
        id: 'smart-locks',
        name: 'Smart Locks',
        description: 'Secure keyless entry solutions',
        icon: '🔐'
    },
    {
        id: 'sensors-detectors',
        name: 'Sensors & Detectors',
        description: 'Motion, temperature, and security sensors',
        icon: '🌡️'
    },
    {
        id: 'control-panels',
        name: 'Control Panels',
        description: 'Central hubs for smart home automation',
        icon: '📱'
    }
];
const products = [
    // Control Panels (from existing Boles products)
    {
        id: 'mixpad-mini',
        name: 'MixPad Mini Super Smart Panel',
        description: 'Compact 4-inch smart control panel with multi-touch capacitive screen and unlimited scenario support.',
        price: 299,
        category: 'control-panels',
        image: 'https://res.cloudinary.com/control4/image/upload/f_auto,q_auto,dpr_auto/www/control4/homepage/OS_3_WWW_Home_1b.jpg',
        images: [
            'https://res.cloudinary.com/control4/image/upload/f_auto,q_auto,dpr_auto/www/control4/homepage/OS_3_WWW_Home_1b.jpg',
            'https://m.media-amazon.com/images/I/61f8O-P1fqL._AC_UF894,1000_QL80_.jpg',
            'http://anjielo.com/cdn/shop/products/Wifi-Smart-Home-Control-Panel-Smart-Switch-Electronic-Lock-Tuya-Control-Panel-Music-Light-Tuya-Series.jpg?v=1649234895'
        ],
        features: [
            '4 inches, 480x480P resolution display',
            'Multi-touch capacitive screen',
            'AAC 1813 speaker',
            '220V zero live wire power supply',
            'Wi-Fi and Bluetooth connectivity',
            'Unlimited scenarios supported'
        ],
        specifications: {
            'Display': '4 inches, 480×480P resolution',
            'Touch Layer': 'Multi-touch capacitive screen',
            'Speaker': 'AAC 1813 speaker',
            'Power Supply': '220V zero live wire power supply',
            'Connectivity': 'Wi-Fi, Bluetooth',
            'Scenarios': 'Unlimited scenarios supported',
            'Dimensions': '86×86×12mm',
            'Installation': 'Wall-mounted'
        },
        inStock: true,
        stockCount: 25,
        rating: 4.8,
        reviewCount: 203,
        badges: [
            'Best Seller'
        ],
        brand: 'BOLES',
        model: 'MP-MINI-001',
        warranty: '2 years',
        compatibility: [
            'iOS',
            'Android',
            'Smart Home Systems'
        ]
    },
    {
        id: 'mixpad-s-gateway',
        name: 'MixPad S All-in-one Gateway Panel',
        description: 'Advanced smart panel with built-in gateway, supporting up to 350 devices with zigbee networking.',
        price: 449,
        originalPrice: 499,
        category: 'control-panels',
        image: 'https://m.media-amazon.com/images/I/61C2YFb1-+L._AC_UF1000,1000_QL80_.jpg',
        images: [
            'https://m.media-amazon.com/images/I/61C2YFb1-+L._AC_UF1000,1000_QL80_.jpg',
            'https://image.made-in-china.com/202f0j00AeWiIDkhgufY/Wgsensor-Touch-Screen-Panel-6-Inches-Central-Control-for-Tuya-Intelligent-Devices-Zigbee-Smart-Hub-Products.webp',
            'https://m.media-amazon.com/images/I/61jVMVk76VL._AC_UF894,1000_QL80_.jpg'
        ],
        features: [
            '2GB RAM, 8GB ROM storage',
            '4 inches, 480x480P resolution',
            'Dual microphone array',
            'Built-in zigbee gateway',
            'Supports 350 devices',
            'Wi-Fi, Bluetooth, Zigbee 3.0'
        ],
        specifications: {
            'Storage': '2GB RAM, 8GB ROM',
            'Display': '4 inches, 480×480P resolution',
            'Microphone': 'Dual microphone array',
            'Gateway': 'Built-in Zigbee 3.0 gateway',
            'Device Support': 'Up to 350 devices',
            'Connectivity': 'Wi-Fi, Bluetooth, Zigbee 3.0',
            'Light Sensor': 'Automatic brightness adjustment',
            'Distance Sensor': '10-15cm gesture sensing'
        },
        inStock: true,
        stockCount: 15,
        rating: 4.9,
        reviewCount: 156,
        badges: [
            'Featured',
            'Gateway Hub'
        ],
        brand: 'BOLES',
        model: 'MP-S-GW-001',
        warranty: '2 years',
        compatibility: [
            'iOS',
            'Android',
            'Zigbee 3.0',
            'Smart Home Systems'
        ]
    },
    {
        id: 'mixpad-genie',
        name: 'MixPad Genie',
        description: 'Compact smart controller with 3.27-inch color display, supporting voice, touch, and app control.',
        price: 199,
        category: 'control-panels',
        image: 'https://ext.same-assets.com/596243380/2361381922.png',
        images: [
            'https://ext.same-assets.com/596243380/2361381922.png',
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop',
            'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=500&h=400&fit=crop'
        ],
        features: [
            '3.27 inches color HD touch screen',
            'Voice, touch, and app control',
            'Type-C mobile phone charging',
            'Bluetooth Mesh, Wi-Fi, infrared',
            'Multiple power supply options',
            'Home appliance control'
        ],
        specifications: {
            'Display': '3.27 inches color HD touch screen',
            'Control Methods': 'Voice, touch, and app control',
            'Charging': 'Type-C mobile phone charging',
            'Connectivity': 'Bluetooth Mesh, Wi-Fi, infrared',
            'Power': 'Multiple power supply options',
            'Compatibility': 'Home appliances'
        },
        inStock: true,
        stockCount: 18,
        rating: 4.7,
        reviewCount: 203,
        badges: [
            'Compact Design'
        ],
        brand: 'BOLES',
        model: 'MP-GENIE-001',
        warranty: '2 years',
        compatibility: [
            'iOS',
            'Android',
            'Smart Home Systems'
        ]
    },
    // Smart Lighting
    {
        id: 'smart-led-strip',
        name: 'BOLES RGB Smart LED Strip',
        description: 'Color-changing LED strip with app control and voice compatibility.',
        price: 79,
        originalPrice: 99,
        category: 'smart-lighting',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop',
            'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=500&h=400&fit=crop',
            'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=500&h=400&fit=crop'
        ],
        features: [
            '16 million colors',
            'Music sync capability',
            'Voice control compatible',
            'Easy installation',
            '32.8ft length',
            'App control'
        ],
        specifications: {
            'Length': '32.8ft (10m)',
            'Colors': '16 million colors',
            'Connectivity': 'Wi-Fi, App control',
            'Features': 'Music sync, Voice control',
            'Installation': 'Adhesive backing',
            'Voltage': '12V DC'
        },
        inStock: true,
        stockCount: 45,
        rating: 4.6,
        reviewCount: 342,
        badges: [
            'Popular'
        ],
        brand: 'BOLES',
        model: 'LED-RGB-10M',
        warranty: '1 year',
        compatibility: [
            'iOS',
            'Android',
            'Alexa',
            'Google Assistant'
        ]
    },
    {
        id: 'smart-ceiling-light',
        name: 'Smart Ceiling Light Pro',
        description: 'Intelligent ceiling light with adjustable brightness and color temperature.',
        price: 159,
        category: 'smart-lighting',
        image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=500&h=400&fit=crop',
        features: [
            'Adjustable brightness',
            'Color temperature control',
            'Schedule automation',
            'Energy efficient LED',
            'Flush mount design',
            'Remote control included'
        ],
        inStock: true,
        rating: 4.8,
        reviewCount: 128,
        badges: [
            'Energy Efficient'
        ]
    },
    {
        id: 'smart-dimmer-switch',
        name: 'Smart Dimmer Switch',
        description: 'Wi-Fi enabled dimmer switch with voice control and scheduling.',
        price: 49,
        category: 'smart-lighting',
        image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=500&h=400&fit=crop',
        features: [
            'Wi-Fi connectivity',
            'Voice control support',
            'Scheduling and timers',
            'Easy installation',
            'Compatible with LED bulbs',
            'No hub required'
        ],
        inStock: true,
        rating: 4.5,
        reviewCount: 89,
        badges: [
            'Easy Install'
        ]
    },
    // Security Cameras
    {
        id: 'outdoor-security-cam',
        name: 'BOLES Outdoor Security Camera',
        description: 'Weatherproof 4K security camera with night vision and motion detection.',
        price: 249,
        originalPrice: 299,
        category: 'security-cameras',
        image: 'https://m.media-amazon.com/images/I/51eqMHze4nL.jpg',
        images: [
            'https://m.media-amazon.com/images/I/51eqMHze4nL.jpg',
            'https://m.media-amazon.com/images/I/51t-3glKo0L.jpg',
            'https://m.media-amazon.com/images/I/51gnQYv09EL.jpg'
        ],
        features: [
            '4K Ultra HD recording',
            'Night vision up to 100ft',
            'Motion detection alerts',
            'Weatherproof IP66 rating',
            'Two-way audio',
            'Cloud storage included'
        ],
        specifications: {
            'Resolution': '4K Ultra HD (3840×2160)',
            'Night Vision': 'Up to 100ft infrared range',
            'Weather Rating': 'IP66 weatherproof',
            'Audio': 'Two-way communication',
            'Storage': 'Cloud and local storage',
            'Connectivity': 'Wi-Fi 6, Ethernet',
            'Power': 'PoE or 12V DC adapter',
            'Field of View': '110° diagonal'
        },
        inStock: true,
        stockCount: 18,
        rating: getAverageRating(getReviewsForProduct('outdoor-security-cam')) || 4.7,
        reviews: getReviewsForProduct('outdoor-security-cam'),
        badges: [
            'Weatherproof',
            'Best Seller'
        ],
        brand: 'BOLES',
        model: 'SEC-4K-001',
        warranty: '3 years',
        compatibility: [
            'iOS',
            'Android',
            'PC',
            'Mac'
        ]
    },
    {
        id: 'indoor-pan-tilt-cam',
        name: 'Smart Indoor Pan/Tilt Camera',
        description: '360° rotating indoor camera with AI person detection and privacy mode.',
        price: 129,
        category: 'security-cameras',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop',
        features: [
            '360° pan and 96° tilt',
            'AI person detection',
            'Privacy mode',
            '1080p HD video',
            'Two-way communication',
            'Mobile app control'
        ],
        inStock: true,
        rating: 4.6,
        reviewCount: 198,
        badges: [
            'AI Powered'
        ]
    },
    {
        id: 'doorbell-camera',
        name: 'Smart Video Doorbell',
        description: 'Wireless video doorbell with motion alerts and smartphone notifications.',
        price: 199,
        category: 'security-cameras',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop',
        features: [
            'Wireless installation',
            'Motion detection zones',
            'Smartphone notifications',
            'Two-way talk',
            'Cloud recording',
            'Night vision'
        ],
        inStock: true,
        rating: 4.8,
        reviewCount: 156,
        badges: [
            'Wireless'
        ]
    },
    // Smart Speakers
    {
        id: 'voice-assistant-hub',
        name: 'BOLES Voice Assistant Hub',
        description: 'Premium smart speaker with superior sound quality and smart home control.',
        price: 179,
        category: 'smart-speakers',
        image: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=500&h=400&fit=crop',
        features: [
            'Superior 360° sound',
            'Built-in smart hub',
            'Voice control',
            'Music streaming',
            'Smart device control',
            'Multiple assistant support'
        ],
        inStock: true,
        rating: 4.7,
        reviewCount: 234,
        badges: [
            'Premium Audio'
        ]
    },
    {
        id: 'compact-smart-speaker',
        name: 'Compact Smart Speaker',
        description: 'Small but powerful smart speaker perfect for any room.',
        price: 79,
        originalPrice: 99,
        category: 'smart-speakers',
        image: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=500&h=400&fit=crop',
        features: [
            'Compact design',
            'Rich bass sound',
            'Voice activation',
            'Multi-room audio',
            'Smart home control',
            'Bluetooth connectivity'
        ],
        inStock: true,
        rating: 4.4,
        reviewCount: 167,
        badges: [
            'Compact'
        ]
    },
    // Smart Locks
    {
        id: 'keypad-smart-lock',
        name: 'Smart Keypad Door Lock',
        description: 'Keyless entry with keypad, smartphone app, and backup keys.',
        price: 279,
        category: 'smart-locks',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop',
        features: [
            'Keyless entry',
            'Smartphone app control',
            'Backup physical keys',
            'Auto-lock feature',
            'Access logs',
            'Easy installation'
        ],
        inStock: true,
        rating: 4.6,
        reviewCount: 145,
        badges: [
            'Secure'
        ]
    },
    {
        id: 'fingerprint-lock',
        name: 'Biometric Fingerprint Lock',
        description: 'Advanced biometric lock with fingerprint recognition and app control.',
        price: 349,
        originalPrice: 399,
        category: 'smart-locks',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop',
        features: [
            'Fingerprint recognition',
            'Stores 100 fingerprints',
            'Smartphone integration',
            'Battery backup',
            'Weather resistant',
            'Quick access'
        ],
        inStock: true,
        rating: 4.8,
        reviewCount: 92,
        badges: [
            'Biometric',
            'Advanced'
        ]
    },
    // Sensors & Detectors
    {
        id: 'motion-sensor',
        name: 'Smart Motion Sensor',
        description: 'Wireless motion detector with smartphone alerts and automation triggers.',
        price: 39,
        category: 'sensors-detectors',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop',
        features: [
            'Wireless connectivity',
            'Instant alerts',
            'Long battery life',
            'Easy mounting',
            'Automation triggers',
            'Pet-friendly option'
        ],
        inStock: true,
        rating: 4.5,
        reviewCount: 289,
        badges: [
            'Wireless'
        ]
    },
    {
        id: 'smart-smoke-detector',
        name: 'Smart Smoke & Carbon Monoxide Detector',
        description: 'Intelligent detector with smartphone notifications and self-testing.',
        price: 129,
        category: 'sensors-detectors',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop',
        features: [
            'Smoke and CO detection',
            'Smartphone alerts',
            'Self-testing capability',
            '10-year battery',
            'Voice announcements',
            'Easy installation'
        ],
        inStock: true,
        rating: 4.9,
        reviewCount: 178,
        badges: [
            'Safety Critical',
            '10-Year Battery'
        ]
    },
    {
        id: 'door-window-sensor',
        name: 'Smart Door/Window Sensor Set',
        description: 'Wireless sensors for doors and windows with instant alerts.',
        price: 59,
        category: 'sensors-detectors',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop',
        features: [
            'Set of 4 sensors',
            'Wireless installation',
            'Instant notifications',
            'Long battery life',
            'Small, discreet design',
            'Home automation ready'
        ],
        inStock: true,
        rating: 4.6,
        reviewCount: 203,
        badges: [
            '4-Pack',
            'Discreet'
        ]
    }
];
const featuredProducts = products.filter((p)=>p.badges?.includes('Best Seller') || p.badges?.includes('Featured')).slice(0, 6);
const getProductsByCategory = (category)=>{
    if (category === 'all') return products;
    return products.filter((p)=>p.category === category);
};
const getProductById = (id)=>{
    return products.find((p)=>p.id === id);
};
}}),
"[project]/src/contexts/SearchContext.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SearchProvider": (()=>SearchProvider),
    "useSearch": (()=>useSearch)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/products.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const SearchContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function SearchProvider({ children }) {
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [searchResults, setSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [suggestions, setSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [recentSearches, setRecentSearches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isSearching, setIsSearching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load recent searches from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const stored = localStorage.getItem('boles_recent_searches');
        if (stored) {
            setRecentSearches(JSON.parse(stored));
        }
    }, []);
    // Generate suggestions based on search query
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (searchQuery.trim().length > 0) {
            const query = searchQuery.toLowerCase();
            const productSuggestions = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["products"].filter((product)=>product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query) || product.features.some((feature)=>feature.toLowerCase().includes(query)) || product.brand?.toLowerCase().includes(query)).map((product)=>product.name).slice(0, 5);
            // Add category suggestions
            const categorySuggestions = [
                'Smart Lighting',
                'Security Cameras',
                'Smart Speakers',
                'Smart Locks',
                'Sensors & Detectors',
                'Control Panels'
            ].filter((category)=>category.toLowerCase().includes(query));
            // Add feature suggestions
            const featureSuggestions = [
                'Wi-Fi connectivity',
                'Voice control',
                'Motion detection',
                'Night vision',
                'Smartphone app',
                'Zigbee compatible',
                'Bluetooth',
                '4K resolution'
            ].filter((feature)=>feature.toLowerCase().includes(query));
            const allSuggestions = [
                ...productSuggestions,
                ...categorySuggestions,
                ...featureSuggestions
            ].slice(0, 8);
            setSuggestions(allSuggestions);
        } else {
            setSuggestions([]);
        }
    }, [
        searchQuery
    ]);
    const performSearch = (query)=>{
        if (!query.trim()) {
            setSearchResults([]);
            return;
        }
        setIsSearching(true);
        // Simulate search delay
        setTimeout(()=>{
            const searchTerm = query.toLowerCase();
            const results = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["products"].filter((product)=>{
                // Search in product name
                if (product.name.toLowerCase().includes(searchTerm)) return true;
                // Search in description
                if (product.description.toLowerCase().includes(searchTerm)) return true;
                // Search in features
                if (product.features.some((feature)=>feature.toLowerCase().includes(searchTerm))) return true;
                // Search in brand
                if (product.brand?.toLowerCase().includes(searchTerm)) return true;
                // Search in specifications
                if (product.specifications && Object.values(product.specifications).some((spec)=>spec.toLowerCase().includes(searchTerm))) return true;
                // Search in compatibility
                if (product.compatibility?.some((compat)=>compat.toLowerCase().includes(searchTerm))) return true;
                return false;
            });
            // Sort results by relevance
            const sortedResults = results.sort((a, b)=>{
                const aNameMatch = a.name.toLowerCase().includes(searchTerm);
                const bNameMatch = b.name.toLowerCase().includes(searchTerm);
                if (aNameMatch && !bNameMatch) return -1;
                if (!aNameMatch && bNameMatch) return 1;
                // Sort by rating if both match equally
                return b.rating - a.rating;
            });
            setSearchResults(sortedResults);
            setIsSearching(false);
        }, 300);
    };
    const clearSearch = ()=>{
        setSearchQuery('');
        setSearchResults([]);
        setSuggestions([]);
    };
    const addToRecentSearches = (query)=>{
        if (!query.trim()) return;
        const updated = [
            query,
            ...recentSearches.filter((q)=>q !== query)
        ].slice(0, 10);
        setRecentSearches(updated);
        localStorage.setItem('boles_recent_searches', JSON.stringify(updated));
    };
    const clearRecentSearches = ()=>{
        setRecentSearches([]);
        localStorage.removeItem('boles_recent_searches');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchContext.Provider, {
        value: {
            searchQuery,
            searchResults,
            suggestions,
            recentSearches,
            isSearching,
            setSearchQuery,
            performSearch,
            clearSearch,
            addToRecentSearches,
            clearRecentSearches
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/SearchContext.tsx",
        lineNumber: 159,
        columnNumber: 5
    }, this);
}
function useSearch() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(SearchContext);
    if (context === undefined) {
        throw new Error('useSearch must be used within a SearchProvider');
    }
    return context;
}
}}),
"[project]/src/contexts/ComparisonContext.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ComparisonProvider": (()=>ComparisonProvider),
    "useComparison": (()=>useComparison)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const ComparisonContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function ComparisonProvider({ children }) {
    const [comparedProducts, setComparedProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isComparisonOpen, setIsComparisonOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const addToComparison = (product)=>{
        if (comparedProducts.length >= 4) {
            // Remove the first product if we have 4 already
            setComparedProducts((prev)=>[
                    ...prev.slice(1),
                    product
                ]);
        } else if (!comparedProducts.find((p)=>p.id === product.id)) {
            setComparedProducts((prev)=>[
                    ...prev,
                    product
                ]);
        }
    };
    const removeFromComparison = (productId)=>{
        setComparedProducts((prev)=>prev.filter((p)=>p.id !== productId));
    };
    const clearComparison = ()=>{
        setComparedProducts([]);
    };
    const isInComparison = (productId)=>{
        return comparedProducts.some((p)=>p.id === productId);
    };
    const toggleComparison = ()=>{
        setIsComparisonOpen((prev)=>!prev);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ComparisonContext.Provider, {
        value: {
            comparedProducts,
            addToComparison,
            removeFromComparison,
            clearComparison,
            isInComparison,
            isComparisonOpen,
            toggleComparison
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/ComparisonContext.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
function useComparison() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ComparisonContext);
    if (context === undefined) {
        throw new Error('useComparison must be used within a ComparisonProvider');
    }
    return context;
}
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__0fbfba70._.js.map