import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { MobileFooter } from "@/components/MobileFooter";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <Navbar />
      <div className="mt-[70px]">{children}</div>
    </div>
  );
}
