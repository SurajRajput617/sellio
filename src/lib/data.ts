// Dummy data shared between the marketing dashboard preview and the
// clickable /dashboard prototype. Nothing here touches a real API.

export const heroMetrics = {
  revenue: "£28,540",
  revenueTrend: "+18.2%",
  orders: "1,285",
  ordersTrend: "+9.4%",
  conversion: "2.64%",
  conversionTrend: "+0.3pt",
  aov: "£52.40",
  aovTrend: "+£2.10",
  topChannel: "Paid Social",
  bestSeller: "Everyday Hoodie",
};

export const heroRevenueSeries = [
  { day: "Mon", value: 3200 },
  { day: "Tue", value: 3850 },
  { day: "Wed", value: 3400 },
  { day: "Thu", value: 4600 },
  { day: "Fri", value: 4200 },
  { day: "Sat", value: 5100 },
  { day: "Sun", value: 4190 },
];

export const revenueSeries = [
  { label: "Wk 1", revenue: 5200, orders: 118 },
  { label: "Wk 2", revenue: 6100, orders: 132 },
  { label: "Wk 3", revenue: 5800, orders: 126 },
  { label: "Wk 4", revenue: 7300, orders: 158 },
  { label: "Wk 5", revenue: 6950, orders: 149 },
  { label: "Wk 6", revenue: 8400, orders: 176 },
  { label: "Wk 7", revenue: 7900, orders: 168 },
  { label: "Wk 8", revenue: 9100, orders: 191 },
];

export const salesByDaySeries = [
  { day: "Mon", sales: 1180 },
  { day: "Tue", sales: 1420 },
  { day: "Wed", sales: 1260 },
  { day: "Thu", sales: 1690 },
  { day: "Fri", sales: 2010 },
  { day: "Sat", sales: 2380 },
  { day: "Sun", sales: 1740 },
];

export const trafficSources = [
  { name: "Paid Social", value: 38, color: "#ff5b45" },
  { name: "Organic Search", value: 24, color: "#101b33" },
  { name: "Email", value: 18, color: "#e0432f" },
  { name: "Direct", value: 12, color: "#c7bfa9" },
  { name: "Referral", value: 8, color: "#4a5875" },
];

export const bestSellers = [
  { name: "Everyday Hoodie", units: 312, revenue: "£9,984", share: "21.8%" },
  { name: "Classic Tee", units: 268, revenue: "£4,824", share: "15.4%" },
  { name: "Canvas Tote", units: 190, revenue: "£3,610", share: "10.9%" },
  { name: "Essential Sweatshirt", units: 144, revenue: "£5,760", share: "9.6%" },
];

export const recentOrders = [
  { id: "#SL-3298", customer: "Amelia Ward", product: "Everyday Hoodie", total: "£38.00", status: "Fulfilled" },
  { id: "#SL-3297", customer: "James Okafor", product: "Classic Tee (x2)", total: "£36.00", status: "Fulfilled" },
  { id: "#SL-3296", customer: "Priya Shah", product: "Canvas Tote", total: "£19.00", status: "Processing" },
  { id: "#SL-3295", customer: "Tom Bracken", product: "Essential Sweatshirt", total: "£40.00", status: "Fulfilled" },
  { id: "#SL-3294", customer: "Nia Roberts", product: "Everyday Hoodie", total: "£38.00", status: "Refunded" },
  { id: "#SL-3293", customer: "Sam Delgado", product: "Classic Tee", total: "£18.00", status: "Fulfilled" },
  { id: "#SL-3292", customer: "Erin Callahan", product: "Canvas Tote (x2)", total: "£38.00", status: "Processing" },
];

export const marketingPerformance = [
  { channel: "Meta Ads", spend: "£1,240", revenue: "£6,820", roas: "5.5x" },
  { channel: "Google Ads", spend: "£860", revenue: "£3,940", roas: "4.6x" },
  { channel: "Email", spend: "£0", revenue: "£6,270", roas: "—" },
  { channel: "Influencers", spend: "£420", revenue: "£1,510", roas: "3.6x" },
];

export const sellioInsights = [
  {
    tone: "warn" as const,
    text: "Your mobile conversion rate dropped this week.",
  },
  {
    tone: "good" as const,
    text: "Everyday Hoodie generated 21.8% of sales.",
  },
  {
    tone: "info" as const,
    text: "47 customers bought Product A but not Product B.",
  },
  {
    tone: "good" as const,
    text: "Email generated 22% of total revenue this month.",
  },
  {
    tone: "warn" as const,
    text: "12 product pages could use stronger SEO descriptions.",
  },
];

export const everythingYouNeed = [
  { title: "Shopify ecommerce build", description: "A fully configured Shopify store, structured and ready to sell from day one." },
  { title: "Custom branding", description: "Your logo, colours and product photography applied across every page." },
  { title: "Payment setup", description: "Card payments, wallets and checkout configured and tested." },
  { title: "Shipping setup", description: "Rates, zones and delivery options set up to match how you fulfil orders." },
  { title: "Email automations", description: "Welcome, abandoned cart and post-purchase flows built in from launch." },
  { title: "Analytics", description: "Revenue, orders and conversion tracked in one dashboard you'll actually use." },
  { title: "SEO foundations", description: "Titles, structure and metadata set up so search engines can find you." },
  { title: "Google setup", description: "Merchant Centre and Search Console connected to your catalogue." },
  { title: "Meta setup", description: "Pixel and catalogue feed configured for Instagram and Facebook selling." },
  { title: "Training academy", description: "Short, practical lessons so you and your team can run the store confidently." },
  { title: "Support", description: "A team you can message when something needs fixing or explaining." },
  { title: "Growth guidance", description: "Ongoing recommendations on what to improve next, and why." },
];

export const diyList = [
  "Buy Shopify",
  "Pick a theme",
  "Configure payments",
  "Configure shipping",
  "Set up email",
  "Work out analytics",
  "Install apps",
  "Learn SEO",
  "Configure Google",
  "Configure Meta",
  "Find technical help",
];

export const sellioHandles = [
  "Store build",
  "Branding",
  "Payments",
  "Shipping",
  "Email flows",
  "Analytics",
  "SEO basics",
  "Google + Meta",
  "Training",
  "Support",
];

export const howItWorksSteps = [
  { title: "Tell us about your business", description: "A short onboarding form covering your products, customers and goals." },
  { title: "Send your branding and products", description: "Logo, images, product details and any existing brand guidelines." },
  { title: "We build your store", description: "Our team configures your Shopify store using our proven framework." },
  { title: "We connect the essentials", description: "Payments, shipping, email, analytics, Google and Meta, all wired up." },
  { title: "Review and approve", description: "Walk through the finished store with us and request any changes." },
  { title: "Launch and grow", description: "Your store goes live, and we stay on to help you grow it." },
];

export const productisedSystem = [
  "Proven homepage sections",
  "High-converting product pages",
  "Collection structure",
  "Trust sections",
  "Reviews",
  "FAQs",
  "Email foundations",
  "Analytics foundations",
  "Proven Shopify app stack",
];

export const pricingPlans = [
  {
    name: "Launch",
    price: "£99",
    period: "/month",
    description: "For new ecommerce brands.",
    features: [
      "Shopify ecommerce build",
      "Custom branding",
      "Up to 20 products",
      "Payment + shipping setup",
      "Core email automations",
      "Sellio dashboard",
      "Training academy",
      "Standard support",
    ],
    cta: "Start with Launch",
    featured: false,
  },
  {
    name: "Grow",
    price: "£149",
    period: "/month",
    description: "For brands ready to scale up.",
    badge: "MOST POPULAR",
    features: [
      "Everything in Launch",
      "Up to 50 products",
      "Google Merchant Centre",
      "Meta Pixel setup",
      "Advanced analytics",
      "Priority support",
      "Monthly improvements",
      "Conversion guidance",
    ],
    cta: "Choose Grow",
    featured: true,
  },
  {
    name: "Scale",
    price: "Custom",
    period: "",
    description: "For established or high-volume brands.",
    features: [
      "Everything in Grow",
      "Larger catalogues",
      "Migration help",
      "Advanced integrations",
      "SEO + CRO support",
      "Account support",
      "Custom dashboards",
      "Growth projects",
    ],
    cta: "Book discovery call",
    featured: false,
  },
];

export const supportItems = [
  { title: "Training Academy", description: "Bite-sized lessons on running and growing your store." },
  { title: "Store Management Guides", description: "Step-by-step guides for the tasks you'll do most often." },
  { title: "SEO Guides", description: "Practical steps to help your products get found in search." },
  { title: "Email Marketing Help", description: "Templates and guidance for campaigns that convert." },
  { title: "Analytics Guidance", description: "How to read your dashboard and act on what it shows you." },
  { title: "Customer Support", description: "A real team, reachable when you need a hand." },
];
