import * as motion from "framer-motion/client";
import { Star } from "lucide-react";
import AlbumCard from "./AlbumCard";
import AddAlbumCard from "./AddAlbumCard";

interface Album {
    id: string;
    title: string;
    artist: string;
    coverUrl: string;
}

interface TierRowProps {
    score: string; // "10", "9", etc.
    label: string; // "MASTERPIECE", "EXCELLENT"
    albums: Album[];
}

export default function TierRow({ score, label, albums }: TierRowProps) {
    // Duplicate albums to ensure seamless loop
    const loopedAlbums = [...albums, ...albums, ...albums];

    return (
        <div className="flex gap-8 py-8 border-b border-zinc-900/50 min-h-[300px] overflow-hidden">
            {/* Left Column: Rating */}
            <div className="w-32 flex flex-col items-center justify-center shrink-0 z-10 bg-zinc-950/50 backdrop-blur-sm">
                <span className="text-7xl font-bold text-orange-500 tracking-tighter leading-none mb-2">
                    {score}
                </span>
                <div className="flex items-center gap-1.5 opacity-80">
                    <Star className="w-3 h-3 text-orange-500 fill-orange-500" />
                    <span className="text-xs font-bold text-orange-500 tracking-wider uppercase">
                        {label}
                    </span>
                </div>
            </div>

            {/* Right Column: Albums Carousel with Infinite Loop */}
            <div className="flex-1 overflow-hidden mask-linear-gradient">
                <motion.div
                    className="flex gap-6 px-4 w-max"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear",
                    }}
                >
                    {loopedAlbums.map((album, index) => (
                        <AlbumCard
                            key={`${album.id}-${index}`}
                            title={album.title}
                            artist={album.artist}
                            coverUrl={album.coverUrl}
                        />
                    ))}
                    <AddAlbumCard />
                </motion.div>
            </div>
        </div>
    );
}
