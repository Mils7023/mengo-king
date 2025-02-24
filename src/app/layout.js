import "@/assets/fonts/stylesheet.css";
import "./globals.css";
import { App, Footer } from "@/components";
import { Header } from "@/components";

export const metadata = {
  title: "Mengo Store App",
  description: "Mengo Store App",
  generator: "Next.js",
  manifest: "/manifest.json",
  icons: {
    icon: "/icon.png", // Path to your favicon
  },
  openGraph: {
    title: "Mengo Store App",
    description: "Mengo Store App",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <App>
          <Header />
          {children}
          <Footer />
        </App>
      </body>
    </html>
  );
}
