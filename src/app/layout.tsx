import Navbar from "@/components/layout/navbar"
import "@/styles/globals.css"
// import { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: 'E-Commerce',
//   description: 'The official E-Commerce agency site.',
//   icons: {
//     icon: {
//       url: "/favicon.png",
//       type: "image/png",
//     },
//     shortcut: { url: "/favicon.png", type: "image/png" },
//   }
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="grid py-[20px] lg:py-[40px] gap-[40px] lg:gap-[80px] md:gap-[60px]">
          {children}
        </div>
      </body>
    </html>
  )
}
