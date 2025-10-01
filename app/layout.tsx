import GoogleAnalytics from './GoogleAnalytics';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Circumference of a Circle - Calculator, Formula & Examples | 2025",
  description: "Circumference of a circle calculator with formulas C = 2πr, C = πd, and C = 2√(πA). Learn how to find circumference of a circle with step-by-step solutions, examples, and free online calculator.",
  keywords: "circumference of a circle, circumference of a circle calculator, circumference of a circle formula, how to find circumference of a circle, how to calculate circumference of a circle, perimeter of circle, 2πr, πd, circle circumference",
  authors: [{ name: "Circle Calculators" }],
  creator: "Circle Calculators",
  publisher: "Circle Calculators",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Circumference of a Circle - Calculator, Formula & Step-by-Step Guide",
    description: "Calculate circumference of a circle instantly. Learn the formulas C = 2πr and C = πd with examples. Free circumference of a circle calculator with detailed solutions.",
    url: "https://circumferenceofacircle.com",
    siteName: "Circumference of a Circle",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://circumferenceofacircle.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Circumference of a Circle Calculator"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Circumference of a Circle - Free Calculator & Formula Guide",
    description: "Calculate circumference of a circle instantly. Learn formulas C = 2πr, C = πd with step-by-step solutions.",
    images: ["https://circumferenceofacircle.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://circumferenceofacircle.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your actual verification code when you get it
  },
  other: {
    'revisit-after': '7 days',
    'rating': 'general',
    'distribution': 'global',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://circumferenceofacircle.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" />
        
        {/* Enhanced Schema Markup for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebApplication",
                  "name": "Circumference of a Circle Calculator",
                  "url": "https://circumferenceofacircle.com",
                  "description": "Free online calculator to find the circumference of a circle using radius, diameter, or area",
                  "applicationCategory": "EducationalApplication",
                  "operatingSystem": "All",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                  },
                  "featureList": [
                    "Calculate circumference from radius",
                    "Calculate circumference from diameter", 
                    "Calculate circumference from area",
                    "Step-by-step solutions",
                    "Visual circle diagram",
                    "Multiple unit support"
                  ]
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What is the formula for circumference of a circle?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The circumference of a circle formula is C = 2πr (using radius) or C = πd (using diameter), where π ≈ 3.14159."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How do you find the circumference of a circle?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "To find circumference of a circle: 1) Measure the radius or diameter, 2) Use formula C = 2πr for radius or C = πd for diameter, 3) Multiply to get the circumference."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What units should I use for circle circumference?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "You can use any unit (cm, inches, meters, feet), but keep them consistent. If you enter radius in cm, the circumference will be in cm."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Can I calculate circumference from area?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes! Use the formula C = 2√(πA) where A is the area. This works by finding the radius from area first."
                      }
                    }
                  ]
                },
                {
                  "@type": "MathSolver",
                  "name": "Circumference of a Circle Solver",
                  "url": "https://circumferenceofacircle.com",
                  "usageInfo": "https://circumferenceofacircle.com#how-to-use",
                  "potentialAction": {
                    "@type": "SolveMathAction",
                    "eduQuestionType": "Circumference",
                    "mathExpression": "C = 2πr"
                  }
                },
                {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://circumferenceofacircle.com"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Circumference Calculator",
                      "item": "https://circumferenceofacircle.com#calculator"
                    }
                  ]
                },
                {
                  "@type": "WebSite",
                  "url": "https://circumferenceofacircle.com",
                  "name": "Circumference of a Circle",
                  "description": "Free online circumference of a circle calculator with formulas and examples",
                  "publisher": {
                    "@type": "Organization",
                    "name": "Circle Calculators"
                  }
                }
              ]
            })
          }}
        />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Circle Calculators" />
        <meta name="copyright" content="Circle Calculators" />
        <meta name="language" content="EN" />
        <meta name="robots" content="index,follow" />
        <meta name="url" content="https://circumferenceofacircle.com" />
        <meta name="identifier-URL" content="https://circumferenceofacircle.com" />
        <meta name="coverage" content="Worldwide" />
        
        {/* Open Graph Additional Tags */}
        <meta property="og:site_name" content="Circumference of a Circle" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Additional Tags */}
        <meta name="twitter:site" content="@circlecalc" />
        <meta name="twitter:creator" content="@circlecalc" />
        
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={inter.className}>{children}<GoogleAnalytics /></body>
    </html>
  );
}