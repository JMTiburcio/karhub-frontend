"use client";

import { SSRProvider } from "react-bootstrap";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SSRProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </SSRProvider>
  );
}
