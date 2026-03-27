import "./globals.css";
import { Shippori_Mincho } from "next/font/google";

const shipporiMincho = Shippori_Mincho({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja" className={shipporiMincho.className}>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
