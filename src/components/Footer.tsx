import Link from "next/link";
import React from "react";
import { Separator } from "./ui/separator";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-800 mt-12 max-md:mb-[70px]">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="md:w-1/3">
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-primary transition-colors"
              >
                Forum
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-primary transition-colors"
              >
                Resources
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-primary transition-colors"
              >
                Marketplace
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-primary transition-colors"
              >
                Jobs
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-primary transition-colors"
              >
                Report
              </Link>
            </nav>
          </div>
          <div className="md:w-1/3">
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-primary transition-colors"
              >
                Terms & Condition
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-primary transition-colors"
              >
                Support
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-primary transition-colors"
              >
                Report
              </Link>
            </nav>
          </div>
          <div className="md:w-1/3">
            <h3 className="text-lg font-semibold mb-4 text-white">
              Connect With Us
            </h3>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <Youtube className="w-6 h-6" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="text-center text-sm text-gray-500">
          © 2024 SheCures. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
