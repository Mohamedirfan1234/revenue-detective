import express from 'express';
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Helper function to calculate conversion rates
function calculateConversionRates(visitors, signup, checkout, purchase) {
  return {
    visitorToSignup: visitors > 0 ? ((signup / visitors) * 100).toFixed(2) : 0,
    signupToCheckout: signup > 0 ? ((checkout / signup) * 100).toFixed(2) : 0,
    checkoutToPurchase: checkout > 0 ? ((purchase / checkout) * 100).toFixed(2) : 0
  };
}

// Helper function to calculate drop-off rates
function calculateDropOffRates(visitors, signup, checkout, purchase) {
  return {
    visitorToSignup: visitors > 0 ? (((visitors - signup) / visitors) * 100).toFixed(2) : 0,
    signupToCheckout: signup > 0 ? (((signup - checkout) / signup) * 100).toFixed(2) : 0,
    checkoutToPurchase: checkout > 0 ? (((checkout - purchase) / checkout) * 100).toFixed(2) : 0
  };
}

// Helper function to find highest drop-off stage
function findHighestDropStage(dropOffRates) {
  const stages = [
    { name: 'visitorToSignup', label: 'Visitor to Signup', rate: parseFloat(dropOffRates.visitorToSignup) },
    { name: 'signupToCheckout', label: 'Signup to Checkout', rate: parseFloat(dropOffRates.signupToCheckout) },
    { name: 'checkoutToPurchase', label: 'Checkout to Purchase', rate: parseFloat(dropOffRates.checkoutToPurchase) }
  ];
  
  const highest = stages.reduce((prev, current) => (prev.rate > current.rate) ? prev : current);
  return highest.label;
}

// Helper function to generate smart suggestions
function generateSuggestions(dropOffRates, conversionRates, highestDropStage) {
  const suggestions = [];
  
  const visitorToSignup = parseFloat(dropOffRates.visitorToSignup);
  const signupToCheckout = parseFloat(dropOffRates.signupToCheckout);
  const checkoutToPurchase = parseFloat(dropOffRates.checkoutToPurchase);
  
  // High drop-off at visitor to signup stage
  if (visitorToSignup > 50) {
    suggestions.push("Optimize landing page design and improve call-to-action visibility");
    suggestions.push("Reduce form fields and simplify the signup process");
  } else if (visitorToSignup > 30) {
    suggestions.push("Test different value propositions and messaging on landing page");
  }
  
  // High drop-off at signup to checkout stage
  if (signupToCheckout > 40) {
    suggestions.push("Implement user onboarding flow to guide customers to checkout");
    suggestions.push("Add product recommendations and personalized offers");
  } else if (signupToCheckout > 25) {
    suggestions.push("Improve product discovery and navigation experience");
  }
  
  // High drop-off at checkout to purchase stage
  if (checkoutToPurchase > 35) {
    suggestions.push("Simplify checkout process and reduce form complexity");
    suggestions.push("Offer multiple payment options and guest checkout");
  } else if (checkoutToPurchase > 20) {
    suggestions.push("Add trust signals, security badges, and customer reviews");
  }
  
  // Low overall conversion rates
  const overallConversion = parseFloat(conversionRates.visitorToSignup) * 
                           parseFloat(conversionRates.signupToCheckout) * 
                           parseFloat(conversionRates.checkoutToPurchase) / 10000;
  
  if (overallConversion < 5) {
    suggestions.push("Implement A/B testing to optimize conversion funnel");
    suggestions.push("Add exit-intent popups with special offers");
  }
  
  // Ensure we return at least 3 suggestions
  if (suggestions.length < 3) {
    suggestions.push("Analyze user behavior with heatmaps and session recordings");
    suggestions.push("Implement progressive profiling to reduce friction");
    suggestions.push("Add social proof and customer testimonials");
  }
  
  return suggestions.slice(0, 4); // Return max 4 suggestions
}

// Helper function to generate demo data
function generateDemoData() {
  const visitors = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
  const signupRate = 0.4 + Math.random() * 0.3; // 40-70%
  const checkoutRate = 0.4 + Math.random() * 0.2; // 40-60%
  const purchaseRate = 0.3 + Math.random() * 0.2; // 30-50%
  
  const signup = Math.floor(visitors * signupRate);
  const checkout = Math.floor(signup * checkoutRate);
  const purchase = Math.floor(checkout * purchaseRate);
  const avgOrderValue = Math.floor(Math.random() * (200 - 50 + 1)) + 50;
  
  return { visitors, signup, checkout, purchase, avgOrderValue };
}

// Fake Authentication Endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  // Accept any input and return fake token
  res.json({
    success: true,
    token: 'demo-token-123',
    user: {
      name: 'Demo User',
      email: email || 'test@gmail.com'
    }
  });
});

// Analysis API Endpoint
app.post('/analyze', async (req, res) => {
  try {
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 500));
    
    let { visitors, signup, checkout, purchase, avgOrderValue } = req.body;
    
    // Generate demo data if no input provided
    if (!visitors || !signup || !checkout || !purchase || !avgOrderValue) {
      const demoData = generateDemoData();
      visitors = demoData.visitors;
      signup = demoData.signup;
      checkout = demoData.checkout;
      purchase = demoData.purchase;
      avgOrderValue = demoData.avgOrderValue;
    }
    
    // Calculate metrics
    const conversionRates = calculateConversionRates(visitors, signup, checkout, purchase);
    const dropOffRates = calculateDropOffRates(visitors, signup, checkout, purchase);
    const highestDropStage = findHighestDropStage(dropOffRates);
    const revenueLoss = (visitors - purchase) * avgOrderValue;
    const suggestions = generateSuggestions(dropOffRates, conversionRates, highestDropStage);
    
    // Return response
    res.json({
      success: true,
      data: {
        conversionRates: {
          visitorToSignup: parseFloat(conversionRates.visitorToSignup),
          signupToCheckout: parseFloat(conversionRates.signupToCheckout),
          checkoutToPurchase: parseFloat(conversionRates.checkoutToPurchase)
        },
        dropOffRates: {
          visitorToSignup: parseFloat(dropOffRates.visitorToSignup),
          signupToCheckout: parseFloat(dropOffRates.signupToCheckout),
          checkoutToPurchase: parseFloat(dropOffRates.checkoutToPurchase)
        },
        highestDropStage,
        revenueLoss,
        suggestions,
        inputSummary: {
          visitors,
          signup,
          checkout,
          purchase,
          avgOrderValue,
          totalRevenue: purchase * avgOrderValue
        }
      }
    });
    
  } catch (error) {
    console.error('Analysis error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error during analysis'
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'Missed Revenue Detector API is running',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Missed Revenue Detector API running on port ${PORT}`);
  console.log(`📊 Available endpoints:`);
  console.log(`   POST /login - Fake authentication`);
  console.log(`   POST /analyze - Revenue analysis`);
  console.log(`   GET  /health - Health check`);
  console.log(`\n💡 Try the demo: curl -X POST http://localhost:${PORT}/analyze -H "Content-Type: application/json" -d '{}'`);
});
