# Recipe Finder with Currency Converter 🍳💱

A dynamic web application that combines recipe search functionality with real-time currency conversion, making it easy for users to discover recipes from around the world while understanding ingredient costs in their local currency.

## 🎯 Project Purpose

The Recipe Finder with Currency Converter addresses two common challenges faced by cooking enthusiasts:
1. Finding detailed recipes with instructions for various dishes worldwide
2. Understanding recipe costs across different currencies for budget planning

This application is particularly useful for:
- Food bloggers calculating recipe costs for different audiences
- International cooking enthusiasts
- Restaurant owners planning international menus
- Home cooks managing grocery budgets across currencies

## 🚀 Features

### Recipe Search
- Instant recipe search with real-time results
- Detailed cooking instructions
- Recipe categorization
- Visual representation with recipe images
- Mobile-responsive design

### Currency Converter
- Real-time currency conversion
- Support for multiple major currencies (USD, EUR, GBP, INR)
- Instant rate updates
- User-friendly interface

## 🛠️ Technologies Used

### Frontend
- HTML5
- CSS3 (with Flexbox for responsive layouts)
- JavaScript (ES6+)
- Custom CSS animations and transitions
- Responsive Design principles

### APIs Integrated

1. **TheMealDB API**
   - Endpoint: `https://www.themealdb.com/api/json/v1/1/`
   - Purpose: Fetching recipe data
   - Type: RESTful API
   - Features used:
     - Recipe search
     - Detailed recipe information
     - Recipe categories
     - Recipe images

2. **ExchangeRate-API**
   - Endpoint: `https://v6.exchangerate-api.com/v6/`
   - Purpose: Real-time currency conversion
   - Type: RESTful API
   - Features used:
     - Live exchange rates
     - Multiple currency support
     - Rate conversion calculations

## 📝 Implementation Details

### Error Handling
- Recipe search validation
- API error handling with user-friendly messages
- Input validation for currency conversion
- Fallback UI states for failed API calls

### Performance Optimizations
- Efficient DOM manipulation
- Optimized API calls
- Responsive image loading
- CSS performance considerations

### User Experience
- Intuitive search interface
- Real-time feedback
- Mobile-first design
- Smooth animations
- Clear error messages

## 🔧 Setup and Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/recipe-finder.git
```

2. Navigate to project directory:
```bash
cd recipe-finder
```

3. Configure API keys:
   - Sign up for a free API key at [ExchangeRate-API](https://www.exchangerate-api.com/)
   - Replace `YOUR_API_KEY` in script.js with your actual API key

4. Open `index.html` in your web browser

## 💻 Usage

### Recipe Search
1. Enter recipe name in the search box
2. Click "Search" or press Enter
3. Browse through recipe cards
4. Click "View Recipe" for detailed instructions

### Currency Conversion
1. Select source currency
2. Enter amount
3. Select target currency
4. View converted amount instantly

## 🔒 Security Considerations

- API key protection
- Input sanitization
- Cross-Origin Resource Sharing (CORS) handling
- Secure HTTPS endpoints

## 🌟 Future Enhancements

1. Additional Features
   - Recipe saving functionality
   - User accounts
   - Shopping list generation
   - More currency options
   - Historical exchange rates

2. Technical Improvements
   - Offline support with Service Workers
   - Cache implementation
   - Performance optimization
   - Advanced error handling

## 📱 Responsive Design

The application is fully responsive and works across:
- Desktop computers
- Tablets
- Mobile phones
- Different screen orientations

## ⚠️ Known Limitations

- API rate limits
- Currency conversion updates (limited by API refresh rate)
- Recipe database limitations
- Browser compatibility considerations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Open a Pull Request


## 🙏 Acknowledgments

- TheMealDB for recipe data
- ExchangeRate-API for currency conversion
- Open source community
