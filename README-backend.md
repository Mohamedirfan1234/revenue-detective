# Missed Revenue Detector - Backend Demo

A lightweight demo backend for the "Missed Revenue Detector" SaaS application.

## Features

- **Fake Authentication**: Demo login with hardcoded token
- **Revenue Analysis**: Calculate conversion rates, drop-off rates, and revenue loss
- **Smart Suggestions**: Dynamic business recommendations based on data
- **Demo Data Mode**: Auto-generates realistic test data
- **Loading Simulation**: 1.5-2 second delay for realistic feel

## Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the server**:
   ```bash
   npm run server
   ```

3. **Server runs on**: `http://localhost:5000`

## API Endpoints

### POST /login
Fake authentication for demo purposes.

**Request**:
```json
{
  "email": "test@gmail.com",
  "password": "123456"
}
```

**Response**:
```json
{
  "success": true,
  "token": "demo-token-123",
  "user": {
    "name": "Demo User",
    "email": "test@gmail.com"
  }
}
```

### POST /analyze
Main revenue analysis endpoint.

**Request** (with data):
```json
{
  "visitors": 1000,
  "signup": 400,
  "checkout": 200,
  "purchase": 80,
  "avgOrderValue": 100
}
```

**Request** (without data - uses demo data):
```json
{}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "conversionRates": {
      "visitorToSignup": 40.00,
      "signupToCheckout": 50.00,
      "checkoutToPurchase": 40.00
    },
    "dropOffRates": {
      "visitorToSignup": 60.00,
      "signupToCheckout": 50.00,
      "checkoutToPurchase": 60.00
    },
    "highestDropStage": "Visitor to Signup",
    "revenueLoss": 92000,
    "suggestions": [
      "Optimize landing page design and improve call-to-action visibility",
      "Reduce form fields and simplify the signup process",
      "Simplify checkout process and reduce form complexity",
      "Add trust signals, security badges, and customer reviews"
    ],
    "inputSummary": {
      "visitors": 1000,
      "signup": 400,
      "checkout": 200,
      "purchase": 80,
      "avgOrderValue": 100,
      "totalRevenue": 8000
    }
  }
}
```

### GET /health
Health check endpoint.

**Response**:
```json
{
  "success": true,
  "message": "Missed Revenue Detector API is running",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Testing the API

### Test with curl (Demo Data Mode):
```bash
curl -X POST http://localhost:5000/analyze \
  -H "Content-Type: application/json" \
  -d '{}'
```

### Test with curl (Custom Data):
```bash
curl -X POST http://localhost:5000/analyze \
  -H "Content-Type: application/json" \
  -d '{
    "visitors": 2000,
    "signup": 800,
    "checkout": 400,
    "purchase": 160,
    "avgOrderValue": 150
  }'
```

### Test Login:
```bash
curl -X POST http://localhost:5000/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "123456"
  }'
```

## Business Logic

### Conversion Rate Calculations
- **Visitor to Signup**: `(signup / visitors) * 100`
- **Signup to Checkout**: `(checkout / signup) * 100`
- **Checkout to Purchase**: `(purchase / checkout) * 100`

### Drop-off Rate Calculations
- **Visitor to Signup**: `((visitors - signup) / visitors) * 100`
- **Signup to Checkout**: `((signup - checkout) / signup) * 100`
- **Checkout to Purchase**: `((checkout - purchase) / checkout) * 100`

### Revenue Loss Calculation
```javascript
revenueLoss = (visitors - purchase) * avgOrderValue
```

### Smart Suggestions Logic
The system generates suggestions based on:
- High drop-off at visitor → signup: Landing page optimization
- High drop-off at signup → checkout: User onboarding improvements
- High drop-off at checkout → purchase: Checkout simplification
- Low overall conversion: A/B testing recommendations

## Demo Data Ranges
When no input is provided, the system generates:
- **Visitors**: 1,000 - 5,000
- **Signup Rate**: 40% - 70% of visitors
- **Checkout Rate**: 40% - 60% of signups
- **Purchase Rate**: 30% - 50% of checkouts
- **Avg Order Value**: $50 - $200

## Notes

- This is a demo backend with no persistent storage
- All authentication is fake (accepts any credentials)
- Processing delay of 1.5-2 seconds simulates real AI processing
- Responses are designed to look professional and business-focused
- Perfect for portfolio demonstrations and frontend development
