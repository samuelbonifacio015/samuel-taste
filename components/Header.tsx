import { Zap, Moon, LogOut } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="flex items-center justify-between px-4 md:px-8 py-5 border-b border-zinc-800 bg-zinc-950">
            <div className="flex items-center gap-2">
                <Zap className="w-6 h-6 text-orange-500 fill-orange-500" />
                <span className="text-xl font-bold text-white tracking-tight">Samuel Taste</span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
                <Link href="#" className="text-white text-sm font-medium">
                    Library
                </Link>
                <Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">
                    Random Pick
                </Link>
            </nav>
        </header>
    );
}
