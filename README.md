# Comments App (React Native)

A simple React Native app that fetches and displays comments with search, pagination, and detail view. Built using functional components, hooks, and React Navigation.

---

## Setup Instructions

### 1. Clone the repository
```bash
git clone <https://github.com/purniiiima/CommentsApp.git>
cd CommentsApp
```

### 2. Install dependencies
```bash
npm install
```

### 3. Install iOS pods (Mac only)
```bash
cd ios
pod install
cd ..
```

## Run Steps
- **Android:**
```bash
npx react-native run-android
```
- **iOS:**
```bash
npx react-native run-ios
```

## Screenshots / Recording

  - `/screenshots/list.png`
  - `/screenshots/detail.png`
  - `/screenshots/search.png`


## Assumptions / Trade-offs
- API returns stable comment structure (`id`, `name`, `email`, `body`).
- Basic pagination implemented using `FlatList` onEndReached.
- No backend authentication required.
- UI focuses on simplicity over heavy animations.
- State management handled using custom hooks (no Redux used).
- Styling kept minimal for performance and readability.

## Features
- Comments list with infinite scroll.
- Search by name, email, or message.
- Comment detail screen.
- Pull to refresh.
- Optimized FlatList rendering.

## Tech Stack
- React Native (CLI)
- React Navigation
-
 JavaScript (ES6+)
 Custom Hooks
 FlatList API 
 

fffd Author: Purnima Baroi