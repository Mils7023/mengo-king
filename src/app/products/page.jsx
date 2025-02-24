import { ProductContainer } from "@/containers";

export const metadata = {
  title: "Mengo Store | Products",
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

export default function Products() {
    return (
      <ProductContainer />
    );
  }
  