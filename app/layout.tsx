import "./globals.css";
export const metadata = { title: "OneTrip", description: "Check what you may need before visiting an office." };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
 return <html lang="en"><body>{children}</body></html>;
}