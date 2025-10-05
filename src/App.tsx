'use client'

import { motion } from 'motion/react'
import { ImageWithFallback } from './components/figma/ImageWithFallback'
import { Button } from './components/ui/button'
import { Card, CardContent } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Star, Clock, MapPin, Smartphone, Download, Facebook, Twitter, Instagram, Youtube, Menu, X, ChevronLeft, ChevronRight, Plus } from 'lucide-react'
import { useEffect, useState } from 'react'
import { getDefaultClassNames } from 'react-day-picker'
import Link from "next/link";
import { FaPizzaSlice, FaHamburger, FaIceCream } from "react-icons/fa";
import { GiFrenchFries } from "react-icons/gi";
import MobileNav from './components/mobileNav'
import { ShoppingBag, Truck, CreditCard, Headphones, Gift } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";


const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeInOut" } // use a valid easing string
  },
}

// const fadeInUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
// }

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const scaleOnHover = {
  hover: { 
    scale: 1.02,
    y: -8,
    transition: { duration: 0.3, ease: "easeOut" }
  }
}


export default function App() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // ✅ New: track active nav item
  const [activeNav, setActiveNav] = useState("Home")

  const navItems = [
    "Home",
    "Working",
    "Services",
    "Reviews",
    "Contact"
  ]

  const navLinks = [
    "#home",
    "#how-it-works",
    "#services",
    "#reviews",
    "#contact"
  ]

  const icons = [
    <FaPizzaSlice size={28} color="white" />,
    <FaHamburger size={28} color="white" />,
    <GiFrenchFries size={28} color="white" />,
    <FaIceCream size={28} color="white" />,
  ];


  const menuItems = [
    {
      name: "Margherita Pizza",
      description: "Fresh tomato, mozzarella, and basil",
      price: "$16.99",
      image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=300&h=300&fit=crop",
      rating: 4.8
    },
    {
      name: "Chicken Pad Thai",
      description: "Stir-fried rice noodles with chicken and peanuts",
      price: "$14.99",
      image: "https://images.unsplash.com/photo-1559314809-0f31657def5e?w=300&h=300&fit=crop",
      rating: 4.9
    },
    {
      name: "Beef Burger Deluxe",
      description: "Angus beef with lettuce, tomato, and fries",
      price: "$18.99",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=300&fit=crop",
      rating: 4.7
    },
    {
      name: "Caesar Salad",
      description: "Crisp romaine with parmesan and croutons",
      price: "$12.99",
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=300&h=300&fit=crop",
      rating: 4.6
    },
    {
      name: "Salmon Teriyaki",
      description: "Grilled salmon with steamed vegetables",
      price: "$22.99",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300&h=300&fit=crop",
      rating: 4.9
    },
    {
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with vanilla ice cream",
      price: "$8.99",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=300&fit=crop",
      rating: 4.8
    }
  ]

  const howItWorksSteps = [
    {
      icon: "🍽️",
      title: "Browse",
      description: "Explore local restaurants and cuisines"
    },
    {
      icon: "📱",
      title: "Order",
      description: "Place your order with just a few taps"
    },
    {
      icon: "🚚",
      title: "Enjoy",
      description: "Fresh food delivered to your door"
    }
  ]

  const specialOffers = [
    {
      title: "50% OFF First Order",
      description: "New users get 50% off their first delivery",
      code: "WELCOME50"
    },
    {
      title: "Free Delivery Weekend",
      description: "No delivery fees on orders over $25",
      code: "FREEDEL"
    },
    {
      title: "Family Feast Deal",
      description: "Order for 4+ people and save 30%",
      code: "FAMILY30"
    }
  ]

  const customerReviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      review: "MagicMenu makes ordering food so easy! The delivery is always fast and the food quality is amazing. My go-to app for dinner.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612e738?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Mike Chen",
      rating: 5,
      review: "Love the variety of restaurants available. The app is super user-friendly and the customer service is excellent.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Emma Davis",
      rating: 4,
      review: "Great deals and promotions every week. The food always arrives hot and fresh. Highly recommend this app!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "David Wilson",
      rating: 5,
      review: "Best food delivery service I've used. Fast, reliable, and the food selection is incredible. Five stars!",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    }
  ]

  const nextReview = () => {
    setCurrentReviewIndex((prev) => (prev + 1) % customerReviews.length)
  }

  const prevReview = () => {
    setCurrentReviewIndex((prev) => (prev - 1 + customerReviews.length) % customerReviews.length)
  }

  useEffect(() => {
    const timer = setInterval(nextReview, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Montserrat' }}>
      {/* Navigation Bar */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50  bg-white/0 justify-between"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="inline-block rounded-4xl px-4 py-2 shadow-lg backdrop-blur-md bg-white/40"
            >
              <span
                className="text-2xl font-bold bg-clip-text text-transparent
                          [background-image:linear-gradient(90deg,#573cff,#ff0069)] 
                          font-ubuntu"
                style={{ fontFamily: 'Ubuntu, sans-serif' }}
              >
                mag!c menu
              </span>
            </motion.div>


                  {/* Desktop Navigation */}
                  <div className="hidden md:flex items-center space-x-8 
                  shadow-lg p-2 rounded-4xl backdrop-blur-md bg-white/20 
                  hover:bg-white/30 transition-colors duration-300 ease-in-out" >
                    {navItems.map((item) => (
                      <Link
                        key={item}
                        href={navLinks[navItems.indexOf(item)]}
                        onClick={() => setActiveNav(item)}
                        className={`transition-colors duration-300 ease-in-out font-medium px-4 py-2 rounded-4xl
                          ${
                            activeNav === item
                              ? "text-[#f00086] bg-white/60"
                              : "text-gray-700 hover:text-[#f00086]"
                          }`}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>


            {/* Sign In Button & Mobile Menu */}
            {/* <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="hidden sm:flex border-[#f00086] text-[#f00086] hover:bg-[#f00086] hover:text-white transition-all duration-300"
              >
                Sign In
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div> */}
          </div>


          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 py-4 border-t bg-white rounded-lg"
            >

            </motion.div>
          )}
        </div>


      </motion.nav>


    <motion.div className='md:hidden'>
      <MobileNav />
    </motion.div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #f00086 0%, #cc06c3 25%, #e179dc 50%, #9126e9 100%)'
        }}
      />

      {/* Floating Food Icons */}
      {icons.map((icon, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            bottom: "-10%",
            left: `${15 + i * 20}%`,
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: "-120vh", opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "loop",
            delay: Math.random() * 3

          }}

        >
          {icon}
        </motion.div>
      ))}


        
        {/* Animated Background Elements */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              'radial-gradient(circle at 20% 30%, rgba(252, 242, 251, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 70%, rgba(252, 242, 251, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 60%, rgba(252, 242, 251, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 30%, rgba(252, 242, 251, 0.3) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-6 z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center lg:text-left"
            >
              <motion.h1 
                variants={fadeInUp}
                className="text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight"
                style={{ 
                  fontWeight: '800',
                  color: '#fcf2fb'
                }}
              >
                Order Fresh.
                <br />
                <span className="bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
                  Eat Magic.
                </span>
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed max-w-md mx-auto lg:mx-0"
                style={{ color: '#fcf2fb' }}
              >
                Discover amazing local restaurants and get fresh, delicious food delivered right to your door.
              </motion.p>
              
              <motion.div variants={fadeInUp}>
                <motion.div
                >
                  <Button
                    size="lg"
                    className="px-12 py-6 text-lg rounded-full relative overflow-hidden shadow-2xl"
                    style={{ 
                      backgroundColor: '#fcf2fb',
                      color: '#9126e9',
                      border: 'none'
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      animate={{
                        boxShadow: [
                          '0 0 0 0 rgba(240, 0, 134, 0.4)',
                          '0 0 0 15px rgba(240, 0, 134, 0)',
                          '0 0 0 0 rgba(240, 0, 134, 0.4)'
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    Order Now
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex justify-center"
            >
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 1, -1, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative "
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-3xl blur-xl opacity-30 scale-105"/>

                  <div className="relative flex justify-center items-center gap-8 py-12   rotate-[-10deg]">
                    {/* Phone 1 */}
                    <div className="transform  hover:scale-102  transition duration-500">
                      <img
                        src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=800&fit=crop"
                        alt="App screen 1"
                        className="object-cover shadow-2xl border border-gray-200
                          w-50 h-auto rounded-2xl
                          md:rounded-3xl"
                      />
                    </div>

                    {/* Phone 2 */}
                    <div className="transform hover:scale-102 transition duration-500">
                      <img 
                        src="https://images.unsplash.com/photo-1599950755346-a3e58f84ca63?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="App screen 2"
                        className="object-cover shadow-2xl border border-gray-200
                          w-50 h-auto rounded-2xl
                          md:rounded-3xl"                      />
                    </div>

                    {/* Phone 3 */}
                    <div className="transform hover:scale-102  transition duration-500">
                      <img
                        src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400&h=800&fit=crop"
                        alt="App screen 3"
                        className="object-cover shadow-2xl border border-gray-200
                          w-50 h-auto rounded-2xl
                          md:rounded-3xl"                      />
                    </div>
                  </div>


              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      {/* <motion.section 
        className="py-24"
        style={{ backgroundColor: '#fcf2fb' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-6">
          <motion.div variants={fadeInUp} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl mb-6 font-bold text-[#9126e9]">
              Popular Dishes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most loved dishes from top-rated restaurants in your area
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover="hover"
                className="group"
              >
                <motion.div variants={scaleOnHover}>
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                    <div className="relative overflow-hidden">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium text-gray-700">{item.rating}</span>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-semibold text-[#9126e9]">{item.name}</h3>
                        <span className="text-xl font-bold text-[#f00086]">{item.price}</span>
                      </div>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                      
                      <Button 
                        className="w-full bg-[#f00086] hover:bg-[#cc06c3] text-white rounded-full transition-all duration-300 group"
                        size="lg"
                      >
                        <Plus className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section> */}

      {/* How It Works Section */}
      <motion.section 
        className="py-24"
        style={{ backgroundColor: '#e179dc20' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        id="how-it-works"
      >
        <div className="container mx-auto px-6 ">
          <motion.div variants={fadeInUp} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl mb-6 font-bold text-[#9126e9]">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Three simple steps to delicious food
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {howItWorksSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center group"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div 
                  className="w-24 h-24 mx-auto mb-8 rounded-full flex items-center justify-center text-4xl shadow-xl group-hover:shadow-2xl transition-all duration-300"
                  style={{ backgroundColor: '#e179dc' }}
                >
                  {step.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-[#9126e9]">{step.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Special Offers Section */}
      {/* <motion.section 
        className="py-24"
        style={{ backgroundColor: '#e179dc10' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-6">
          <motion.div variants={fadeInUp} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl mb-6 font-bold text-[#9126e9]">
              Special Offers
            </h2>
            <p className="text-xl text-gray-600">
              Don't miss out on these amazing deals
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {specialOffers.map((offer, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card 
                  className="p-8 text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500"
                  style={{ backgroundColor: '#e179dc' }}
                >
                  <CardContent className="text-white">
                    <h3 className="text-2xl font-bold mb-4">{offer.title}</h3>
                    <p className="mb-8 opacity-90 text-lg leading-relaxed">{offer.description}</p>
                    <Badge 
                      variant="secondary" 
                      className="px-6 py-3 text-lg font-semibold bg-white/20 text-white border-white/30 mb-6"
                    >
                      {offer.code}
                    </Badge>
                    <br />
                    <Button 
                      className="mt-4 bg-[#f00086] hover:bg-white hover:text-[#f00086] text-white rounded-full px-8 py-3 transition-all duration-300"
                    >
                      Order Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section> */}



      {/** Service Section */}
      <motion.section
        className="py-24"
        style={{ backgroundColor: '#fcf2fb' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        id="services"
      >
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            className="text-center mb-20 d-flex flex-col gap-12"
          >
            <h2 className="text-4xl md:text-5xl mb-6 font-bold text-[#9126e9]">
              Services We Offer
            </h2>

            {/* Services Grid */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
              {[
                {
                  title: "Food Ordering",
                  desc: "Browse restaurants, explore menus, and place your food orders with ease.",
                  icon: <ShoppingBag className="w-12 h-12 text-[#9126e9] mx-auto mb-4" />,
                },
                {
                  title: "Real-Time Tracking",
                  desc: "Track your order live from the restaurant to your doorstep.",
                  icon: <MapPin className="w-12 h-12 text-[#9126e9] mx-auto mb-4" />,
                },
                {
                  title: "Fast & Reliable Delivery",
                  desc: "Get your meals delivered hot, fresh, and on time.",
                  icon: <Truck className="w-12 h-12 text-[#9126e9] mx-auto mb-4" />,
                },
                {
                  title: "Secure Online Payments",
                  desc: "Pay easily via UPI, wallets, cards, or cash on delivery.",
                  icon: <CreditCard className="w-12 h-12 text-[#9126e9] mx-auto mb-4" />,
                },
                {
                  title: "24/7 Customer Support",
                  desc: "Get instant help for any order or delivery-related issues.",
                  icon: <Headphones className="w-12 h-12 text-[#9126e9] mx-auto mb-4" />,
                },
                {
                  title: "Exclusive Offers & Discounts",
                  desc: "Enjoy daily deals, promo codes, and loyalty rewards.",
                  icon: <Gift className="w-12 h-12 text-[#9126e9] mx-auto mb-4" />,
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="text-center p-8 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white rounded-2xl"
                >
                  {service.icon}
                  <h4 className="text-xl font-semibold mb-2 text-[#9126e9]">
                    {service.title}
                  </h4>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>



      {/* Customer Reviews Section */}
      <motion.section 
        className="py-24"
        style={{ backgroundColor: '#fcf2fb' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        id="reviews"
      >
        <div className="container mx-auto px-6">
          <motion.div variants={fadeInUp} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl mb-6 font-bold text-[#9126e9]">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real reviews from real customers
            </p>
          </motion.div>
          
          {/* Review Slider */}
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <motion.div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentReviewIndex * 100}%)` }}
              >
                {customerReviews.map((review, index) => (
                  <div key={index} className="min-w-full px-4">
                    <Card className="border-0 shadow-xl bg-white/70 backdrop-blur-sm">
                      <CardContent className="p-12 text-center">
                        <div className="mb-8">
                          <ImageWithFallback
                            src={review.avatar}
                            alt={review.name}
                            className="w-20 h-20 rounded-full object-cover mx-auto mb-6 shadow-lg"
                          />
                          <h4 className="text-xl font-semibold text-[#9126e9] mb-2">{review.name}</h4>
                          <div className="flex justify-center gap-1 mb-6">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <p className="text-lg text-gray-600 italic leading-relaxed max-w-2xl mx-auto">
                          "{review.review}"
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevReview}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#9126e9] hover:bg-[#f00086] hover:text-white transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextReview}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#9126e9] hover:bg-[#f00086] hover:text-white transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 gap-2">
              {customerReviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReviewIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentReviewIndex 
                      ? 'bg-[#f00086] scale-125' 
                      : 'bg-gray-300 hover:bg-[#cc06c3]'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Download App Section */}
      <motion.section 
        className="py-24"
        style={{ backgroundColor: '#e179dc10' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        id="download-app"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.div variants={fadeInUp}>
            <Smartphone className="w-20 h-20 mx-auto mb-8 text-[#f00086]" />
            <h2 className="text-4xl md:text-5xl mb-6 font-bold text-[#9126e9]">
              Get MagicMenu on your phone
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Download our app for the fastest, most convenient way to order your favorite food
            </p>
            
            <div className="flex justify-center gap-6 flex-wrap">
                <motion.div 
                  whileHover={{ y: -8 }} 
                  transition={{ duration: 0.3 }}
                >
                  <Button 
                    size="lg" 
                    asChild
                    className="px-8 py-6 rounded-2xl flex items-center gap-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    style={{ backgroundColor: '#9126e9', color: '#fcf2fb' }}
                  >
                    <a 
                      href="https://play.google.com/store/apps/details?id=in.krunaljayale.MagicMenuCustomerApp&pcampaignid=web_share" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Download className="w-6 h-6" />
                      Google Play
                    </a>
                  </Button>
                </motion.div>

              <motion.div 
                whileHover={{ y: -8 }} 
                transition={{ duration: 0.3 }}
              >

                <button ></button>
                {/* <Button 
                  size="lg" 
                  className="px-8 py-6 rounded-2xl flex items-center gap-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ backgroundColor: '#f00086', color: '#fcf2fb' }}
                >
                  <Download className="w-6 h-6" />
                  App Store
                </Button> */}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>



      {/* Footer */}
      <footer className="py-20" style={{ backgroundColor: '#9126e9', color: '#fcf2fb' }}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-3xl font-bold mb-6">MagicMenu</h3>
              <p className="opacity-80 leading-relaxed">
                Bringing delicious food right to your doorstep with a touch of magic. 
                Fresh ingredients, amazing flavors, delivered fast.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3 opacity-80">
                <li><a href="#about" className="hover:text-pink-300 transition-colors duration-300">About Us</a></li>
                <li><a href="#restaurants" className="hover:text-pink-300 transition-colors duration-300">Restaurants</a></li>
                <li><a href="#delivery-areas" className="hover:text-pink-300 transition-colors duration-300">Delivery Areas</a></li>
                <li><a href="#contact" className="hover:text-pink-300 transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-6">Support</h4>
              <ul className="space-y-3 opacity-80">
                <li><a href="#" className="hover:text-pink-300 transition-colors duration-300">Help Center</a></li>
                <li><a href="#" className="hover:text-pink-300 transition-colors duration-300">Track Order</a></li>
                <li><a href="#" className="hover:text-pink-300 transition-colors duration-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-pink-300 transition-colors duration-300">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-6">Follow Us</h4>
              <div className="flex gap-4">
                  {/* <motion.a
                    href="#"
                    whileHover={{ 
                      scale: 1.2,
                      color: '#f00086'
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 rounded-full border border-pink-300/30 flex items-center justify-center hover:bg-pink-300 hover:text-purple-600 transition-all duration-300"
                  >
                    <Facebook className="w-5 h-5" />
                  </motion.a> */}

                  <motion.a
                    href="#"
                    whileHover={{ 
                      scale: 1.2,
                      color: '#f00086'
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 rounded-full border border-pink-300/30 flex items-center justify-center hover:bg-pink-300 hover:text-purple-600 transition-all duration-300"
                  >
                    <FaXTwitter className="w-5 h-5" />
                  </motion.a>

                  <motion.a
                    href="https://www.instagram.com/magic_menu.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    whileHover={{
                      scale: 1.2,
                      color: '#f00086'
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 rounded-full border border-pink-300/30 flex items-center justify-center hover:bg-pink-300 hover:text-purple-600 transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                  </motion.a>

                  <motion.a
                    href="https://youtube.com/@magicmenu.in2024?feature=shared"
                    whileHover={{
                      scale: 1.2,
                      color: '#f00086'
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 rounded-full border border-pink-300/30 flex items-center justify-center hover:bg-pink-300 hover:text-purple-600 transition-all duration-300"
                  >
                    <Youtube className="w-5 h-5" />
                  </motion.a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-pink-300/20 pt-8 text-center opacity-60">
            <p>&copy; 2025 MagicMenu. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}