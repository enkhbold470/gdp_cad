import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GDP - GO Disabled People",
  description:
    " Our goal is to develop an innovative and cost-effective wheelchair robot that significantly enhances the mobility and independence of paralyzed individuals while reducing the physical strain and financial burden on their families and caregivers. We aim to deliver a product that not only improves the quality of life for users but also provides substantial cost savings and efficiency benefits for hospitals and healthcare facilities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
