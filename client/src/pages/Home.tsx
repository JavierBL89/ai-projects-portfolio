import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { APP_LOGO, APP_TITLE, getLoginUrl } from "@/const";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "wouter";

const projects = [
  {
    id: "regression",
    title: "Linear & Polynomial Regression",
    description: "Implementation of linear regression with gradient descent optimization and polynomial feature expansion for non-linear relationships.",
    technologies: ["Python", "NumPy", "Scikit-learn"],
    icon: "📈",
  },
  {
    id: "decision-trees",
    title: "Decision Trees",
    description: "Building decision trees from scratch with entropy-based splitting criteria, pruning techniques, and visualization of tree structures.",
    technologies: ["Python", "Pandas", "Matplotlib"],
    icon: "🌳",
  },
  {
    id: "random-forest",
    title: "Random Forest",
    description: "Ensemble learning method combining multiple decision trees with bootstrap aggregating for improved accuracy and reduced overfitting.",
    technologies: ["Python", "Scikit-learn", "Ensemble Methods"],
    icon: "🌲",
  },
  {
    id: "boosting",
    title: "Gradient Boosting & AdaBoost",
    description: "Sequential ensemble methods that build weak learners iteratively, focusing on misclassified samples to create powerful predictive models.",
    technologies: ["Python", "XGBoost", "LightGBM"],
    icon: "🚀",
  },
  {
    id: "bagging",
    title: "Bagging & Bootstrap Methods",
    description: "Bootstrap aggregating techniques for reducing variance in machine learning models through parallel ensemble construction.",
    technologies: ["Python", "Scikit-learn", "Statistics"],
    icon: "📦",
  },
  {
    id: "svm",
    title: "Support Vector Machines",
    description: "Implementation of SVM for classification and regression with kernel methods, margin maximization, and support vector selection.",
    technologies: ["Python", "Scikit-learn", "Kernel Methods"],
    icon: "⚡",
  },
  {
    id: "knn",
    title: "K-Nearest Neighbors",
    description: "Non-parametric classification and regression algorithm with distance metrics, optimal k selection, and performance optimization.",
    technologies: ["Python", "Distance Metrics", "Scikit-learn"],
    icon: "👥",
  },
  {
    id: "kmeans",
    title: "K-Means Clustering",
    description: "Unsupervised learning algorithm for partitioning data into k clusters with centroid-based optimization and convergence analysis.",
    technologies: ["Python", "Clustering", "Data Analysis"],
    icon: "🎯",
  },
];

export default function Home() {
  const { user, loading, isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Portfolio
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#projects" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
              Projects
            </a>
            <a href="#about" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
              Contact
            </a>

          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-slate-50 mb-6 leading-tight">
            Machine Learning Projects
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            A comprehensive showcase of machine learning algorithms and techniques implemented from scratch. Explore my learning journey through practical implementations of fundamental and advanced ML concepts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <a href="#projects">
                Explore Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline">
              View on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-20">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            A collection of machine learning algorithms and techniques implemented as part of my learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-slate-200 dark:border-slate-800">
              <CardHeader>
                <div className="text-4xl mb-3">{project.icon}</div>
                <CardTitle className="text-lg">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="w-full mt-2 group/btn">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-20 bg-white dark:bg-slate-950/50 rounded-2xl my-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-6">
            About This Portfolio
          </h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
            <p>
              This portfolio represents my journey into machine learning and data science. Each project demonstrates a deep understanding of fundamental ML algorithms, their mathematical foundations, and practical implementations.
            </p>
            <p>
              Rather than relying solely on high-level libraries, I've implemented many algorithms from scratch to truly understand how they work. This hands-on approach has strengthened my grasp of:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Supervised learning techniques (regression, classification)</li>
              <li>Ensemble methods for improved model performance</li>
              <li>Unsupervised learning and clustering algorithms</li>
              <li>Mathematical optimization and convergence analysis</li>
              <li>Model evaluation and hyperparameter tuning</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-12">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">Languages & Libraries</h3>
            <div className="space-y-2 text-slate-600 dark:text-slate-300">
              <p>• Python (NumPy, Pandas, Scikit-learn)</p>
              <p>• Advanced ML Libraries (XGBoost, LightGBM)</p>
              <p>• Data Visualization (Matplotlib, Seaborn)</p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">ML Concepts</h3>
            <div className="space-y-2 text-slate-600 dark:text-slate-300">
              <p>• Supervised & Unsupervised Learning</p>
              <p>• Ensemble Methods & Boosting</p>
              <p>• Feature Engineering & Selection</p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">Tools & Practices</h3>
            <div className="space-y-2 text-slate-600 dark:text-slate-300">
              <p>• Jupyter Notebooks & Analysis</p>
              <p>• Git & Version Control</p>
              <p>• Model Evaluation & Metrics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-12">
            Interested in discussing machine learning, data science, or collaboration opportunities? Feel free to reach out.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="outline" className="gap-2">
              <Mail className="h-5 w-5" />
              Email
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Github className="h-5 w-5" />
              GitHub
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-50 mb-4">Portfolio</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li><a href="#projects" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">Projects</a></li>
                <li><a href="#about" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-50 mb-4">Projects</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li><a href="#" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">Regression</a></li>
                <li><a href="#" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">Decision Trees</a></li>
                <li><a href="#" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">Random Forest</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-50 mb-4">Learning</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li><a href="#" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">Boosting</a></li>
                <li><a href="#" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">SVM</a></li>
                <li><a href="#" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">K-Means</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-50 mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li><a href="#" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600 dark:text-slate-400">
            <p>&copy; 2025 AI Project Portfolio. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">Privacy</a>
              <a href="#" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

