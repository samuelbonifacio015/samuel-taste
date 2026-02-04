import { Zap, Moon, LogOut } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="flex items-center justify-between px-8 py-5 border-b border-zinc-800 bg-zinc-950">
            <div className="flex items-center gap-2">
                <Zap className="w-6 h-6 text-orange-500 fill-orange-500" />
                <span className="text-xl font-bold text-white tracking-tight">Samuel Taste</span>
            </div>

            <nav className="flex items-center gap-8">
                <Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">
                    Dashboard
                </Link>
                <Link href="#" className="text-white text-sm font-medium">
                    Library
                </Link>
                <Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">
                    Community
                </Link>
            </nav>

            <div className="flex items-center gap-6">
                <button className="text-zinc-400 hover:text-white transition-colors">
                    <Moon className="w-5 h-5" />
                </button>
                <div className="w-8 h-8 rounded-full bg-orange-100 overflow-hidden border border-zinc-700">
                    {/* Placeholder avatar if no image is available, but for now we'll simulate an empty one or use a generic user icon if preferred, 
              but the design shows a specific avatar. I'll use a div simulating it or an img tag if I had a url. 
              For now, let's use a simple colored div or an icon. The prompt mentions "avatar de perfil".
           */}
                    <div className="w-full h-full flex items-center justify-center bg-orange-200 text-orange-700 font-bold text-xs">
                        U
                    </div>
                </div>
            </div>
        </header>
    );
}
