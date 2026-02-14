# Kine - Your AI Fitness Coach

Kine is an AI-powered fitness coaching app built with React Native and Expo. It provides personalized nutrition tracking, voice coaching, and real-time form analysis through your camera.

## 🎯 Features

- **Voice Coaching**: Talk naturally with your AI trainer
- **Form Analysis**: Real-time video feedback on exercise form (mobile only)
- **Smart Nutrition**: Log meals with voice, track macros automatically
- **Progress Tracking**: Visualize your fitness journey over time
- **Dedicated AI**: Pro plans get their own AI instance with personalized memory

## 🏗️ Architecture

This is a cross-platform app supporting iOS, Android, and Web from a single codebase:

```
src/
├── components/
│   ├── Hero.tsx              # Landing page hero
│   ├── Features.tsx          # Feature showcase
│   ├── Pricing.tsx           # Pricing tiers
│   └── VideoCoach/
│       ├── index.tsx         # Platform-agnostic wrapper
│       ├── VideoCoach.native.tsx  # iOS/Android (camera)
│       └── VideoCoach.web.tsx     # Web (fallback UI)
├── screens/                  # Full page screens
├── hooks/                    # Custom React hooks
├── types/                    # TypeScript types
└── utils/                    # Utility functions
```

### Platform-Specific Features

| Feature | Web | iOS/Android |
|---------|-----|-------------|
| Voice coaching | ✅ | ✅ |
| Nutrition logging | ✅ | ✅ |
| Progress tracking | ✅ | ✅ |
| Camera form analysis | ❌ | ✅ |

Web users see a "Download the app" prompt for video coaching features.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Expo CLI: `npm install -g expo-cli`
- iOS: macOS with Xcode
- Android: Android Studio with emulator

### Installation

```bash
# Clone the repository
git clone https://github.com/BermyBoysTechSolutions/kine.git
cd kine

# Install dependencies
npm install

# Start the development server
npm start
```

### Running on Different Platforms

```bash
# Web
npm run web

# iOS (macOS only)
npm run ios

# Android
npm run android
```

## 💰 Pricing Tiers

| Plan | Price | Video Minutes | Features |
|------|-------|---------------|----------|
| **Basic** | USD 39/mo | 0 | Voice nutrition, macro tracking, basic workouts |
| **Pro** | USD 99/mo | 60 min | Everything + video coaching, form analysis, dedicated AI |
| **Elite** | USD 179/mo | 180 min | Everything + priority support, advanced analytics |

## 🛠️ Tech Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Camera**: Expo Camera
- **Audio**: Expo AV
- **Styling**: React Native StyleSheet
- **Build**: EAS (Expo Application Services)

## 📝 Environment Variables

Create a `.env` file in the root:

```
EXPO_PUBLIC_API_URL=https://api.kine.fitness
EXPO_PUBLIC_GEMINI_API_KEY=your_key_here
```

## 🚢 Deployment

### Web

```bash
npm run build:web
# Deploy dist/ folder to Vercel, Netlify, etc.
```

### Mobile

```bash
# Build for app stores
eas build --platform ios
eas build --platform android
```

## 📊 Business Metrics

- **Break-even**: 3 paying customers
- **Gross margins**: 89-94%
- **API costs**: 4-7% of revenue (Gemini Live API)

See [Financials & Pricing](https://www.notion.so/Financials-Pricing-307f8443fe1281909d26fe2bfe5e9e8e) for detailed projections.

## 🤝 Contributing

This is a private project by Bermy Boys Tech Solutions.

## 📄 License

MIT License - See LICENSE file for details.

---

Built with ❤️ by [Bermy Boys Tech Solutions](https://github.com/BermyBoysTechSolutions)
