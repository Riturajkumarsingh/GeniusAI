"use client";

import React from "react";
import { Linkedin, Github, Twitter, ExternalLink, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/company/geniusai",
      color: "hover:text-blue-400"
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Riturajkumarsingh/GeniusAI",
      color: "hover:text-gray-300"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/geniusai",
      color: "hover:text-blue-400"
    }
  ];

  const quickLinks = [
    { name: "Dashboard", url: "/dashboard" },
    { name: "Resume Builder", url: "/resume" },
    { name: "Cover Letter", url: "/ai-cover-letter" },
    { name: "Mock Interview", url: "/interview" }
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-t border-gray-700">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <h3 className="text-xl font-bold text-white">GeniusAI</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering careers with AI-driven tools for resume building, 
              cover letters, and interview preparation. Your success is our mission.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg bg-gray-800 text-gray-400 transition-all duration-300 transform hover:scale-110 hover:bg-gray-700 ${social.color}`}
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink 
                      size={14} 
                      className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-3">
              <a
                href="mailto:support@geniusai.com"
                className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 group"
              >
                <Mail size={16} className="mr-3 text-blue-400" />
                <span className="group-hover:underline">support@geniusai.com</span>
              </a>
              <a
                href="tel:+1-555-0123"
                className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 group"
              >
                <Phone size={16} className="mr-3 text-green-400" />
                <span className="group-hover:underline">+91 8809114486</span>
              </a>
              <div className="flex items-start text-gray-400">
                <MapPin size={16} className="mr-3 text-red-400 mt-1 flex-shrink-0" />
                <span>
                  Suresh Gyan Vihar University<br />
                  Jaipur, Rajasthan
                </span>
              </div>
            </div>
          </div>

          {/* Support & Legal */}
          {/* <div className="col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/help"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-gray-900">
        <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <p className="text-gray-400 text-sm text-center sm:text-left">
                © 2025 <span className="text-blue-400 font-semibold">GeniusAI</span>. All rights reserved.
              </p>
              <div className="hidden sm:block w-px h-4 bg-gray-600"></div>
              <p className="text-gray-500 text-xs text-center sm:text-left">
                Made by RkSingh for career success
              </p>
            </div>
{/*             
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-400">All systems operational</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

