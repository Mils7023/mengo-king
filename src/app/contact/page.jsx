import { ContactContainer } from "@/containers";

export const metadata = {
  title: "Mengo Store | Contact",
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

export default function Contact() {
    return (
      <ContactContainer />
    );
  }
  