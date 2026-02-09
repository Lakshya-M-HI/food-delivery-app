import { Poppins } from 'next/font/google'
import "./globals.css";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: "Swadya | Food Delivery",
  description: "Curated meals, trusted kitchens aur smooth food delivery experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >

        {children}
      </body>
    </html>
  );
}
