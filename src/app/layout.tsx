import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Ahmed Raza & Ayesha Khan — Wedding Invitation", description: "Emerald green royal wedding invitation of Ahmed Raza & Ayesha Khan with animated envelope, event schedule, scratch-to-reveal date and RSVP." };
export default function Layout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
