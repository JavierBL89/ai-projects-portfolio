# AI/ML Projects Portfolio

A comprehensive showcase of machine learning algorithms and techniques implemented from scratch. This portfolio demonstrates a deep understanding of fundamental ML concepts through practical implementations and a professional portfolio website.

## 🎯 Overview

This project combines a curated collection of machine learning implementations with a modern, responsive portfolio website. Each algorithm is implemented with attention to mathematical foundations and practical optimization techniques.

## 📚 Featured Projects

### 1. **Linear & Polynomial Regression** 📈
Implementation of linear regression with gradient descent optimization and polynomial feature expansion for non-linear relationships.
- **Technologies**: Python, NumPy, Scikit-learn
- **Key Concepts**: Gradient descent, feature scaling, regularization

### 2. **Decision Trees** 🌳
Building decision trees from scratch with entropy-based splitting criteria, pruning techniques, and visualization of tree structures.
- **Technologies**: Python, Pandas, Matplotlib
- **Key Concepts**: Information gain, tree pruning, recursive partitioning

### 3. **Random Forest** 🌲
Ensemble learning method combining multiple decision trees with bootstrap aggregating for improved accuracy and reduced overfitting.
- **Technologies**: Python, Scikit-learn, Ensemble Methods
- **Key Concepts**: Bootstrap aggregating, feature randomness, variance reduction

### 4. **Gradient Boosting & AdaBoost** 🚀
Sequential ensemble methods that build weak learners iteratively, focusing on misclassified samples to create powerful predictive models.
- **Technologies**: Python, XGBoost, LightGBM
- **Key Concepts**: Sequential learning, weighted sampling, residual fitting

### 5. **Bagging & Bootstrap Methods** 📦
Bootstrap aggregating techniques for reducing variance in machine learning models through parallel ensemble construction.
- **Technologies**: Python, Scikit-learn, Statistics
- **Key Concepts**: Bootstrap sampling, parallel aggregation, variance analysis

### 6. **Support Vector Machines (SVM)** ⚡
Implementation of SVM for classification and regression with kernel methods, margin maximization, and support vector selection.
- **Technologies**: Python, Scikit-learn, Kernel Methods
- **Key Concepts**: Margin maximization, kernel tricks, support vectors

### 7. **K-Nearest Neighbors (K-NN)** 👥
Non-parametric classification and regression algorithm with distance metrics, optimal k selection, and performance optimization.
- **Technologies**: Python, Distance Metrics, Scikit-learn
- **Key Concepts**: Distance metrics, lazy learning, optimal k selection

### 8. **K-Means Clustering** 🎯
Unsupervised learning algorithm for partitioning data into k clusters with centroid-based optimization and convergence analysis.
- **Technologies**: Python, Clustering, Data Analysis
- **Key Concepts**: Centroid initialization, convergence criteria, cluster validation

## 🛠️ Technology Stack

### Frontend
- **React 19** - Modern UI framework
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **Vite** - Fast build tool and dev server
- **shadcn/ui** - High-quality UI components

### Backend
- **Express 4** - Web server framework
- **tRPC 11** - End-to-end type-safe APIs
- **Drizzle ORM** - Type-safe database queries
- **MySQL/TiDB** - Database

### ML/Data Science
- **Python 3.11** - Primary ML language
- **NumPy** - Numerical computing
- **Pandas** - Data manipulation
- **Scikit-learn** - Machine learning library
- **Matplotlib/Seaborn** - Data visualization
- **XGBoost/LightGBM** - Advanced boosting

## 🚀 Getting Started

### Prerequisites
- Node.js 22.13.0+
- Python 3.11+
- pnpm (package manager)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/JavierBL89/ai-ml-projects-portfolio.git
   cd ai-ml-projects-portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Initialize the database**
   ```bash
   pnpm db:push
   ```

5. **Start the development server**
   ```bash
   pnpm dev
   ```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
ai-ml-projects-portfolio/
├── client/                 # Frontend React application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── pages/         # Page components
│   │   ├── components/    # Reusable UI components
│   │   ├── lib/           # Utility functions
│   │   └── index.css      # Global styles
│   └── index.html         # HTML entry point
├── server/                # Backend Express application
│   ├── routers.ts         # tRPC procedure definitions
│   ├── db.ts              # Database query helpers
│   └── _core/             # Framework infrastructure
├── drizzle/               # Database schema and migrations
│   └── schema.ts          # Table definitions
├── storage/               # S3 storage helpers
├── shared/                # Shared constants and types
└── package.json           # Project dependencies
```

## 🔧 Development Workflow

### Frontend Development
- Update components in `client/src/pages/` and `client/src/components/`
- Styles use Tailwind CSS with custom theme variables in `client/src/index.css`
- Use shadcn/ui components for consistent UI

### Backend Development
- Define database tables in `drizzle/schema.ts`
- Add query helpers in `server/db.ts`
- Create tRPC procedures in `server/routers.ts`

### Database Changes
```bash
# After updating schema.ts
pnpm db:push
```

## 🎨 Design Features

- **Responsive Design**: Mobile-first approach with breakpoints for all screen sizes
- **Modern Aesthetics**: Gradient accents, smooth transitions, and professional typography
- **Dark Mode Support**: Built-in dark theme support
- **Accessibility**: Semantic HTML, keyboard navigation, and ARIA labels
- **Performance**: Optimized images, lazy loading, and efficient bundling

## 📊 Key Learning Outcomes

This portfolio demonstrates expertise in:
- **Supervised Learning**: Regression and classification techniques
- **Ensemble Methods**: Combining multiple models for improved performance
- **Unsupervised Learning**: Clustering and dimensionality reduction
- **Mathematical Foundations**: Understanding algorithms at a deep level
- **Feature Engineering**: Preparing and transforming data
- **Model Evaluation**: Metrics, cross-validation, and hyperparameter tuning
- **Full-Stack Development**: Building complete web applications

## 🔐 Authentication

The application includes Manus OAuth integration for secure user authentication:
- Protected procedures require authentication
- Session management via JWT tokens
- User roles for access control (admin/user)

## 📝 License

This project is open source and available under the MIT License. See the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

- **GitHub**: [@JavierBL89](https://github.com/JavierBL89)
- **Portfolio**: [Visit the live site](https://github.com/JavierBL89/ai-ml-projects-portfolio)

## 🙏 Acknowledgments

- Built with modern web technologies and best practices
- Inspired by the need to deeply understand machine learning algorithms
- Thanks to the open-source community for excellent tools and libraries

---

**Last Updated**: October 2025

For more information about specific implementations, please explore the repository structure and individual project files.

