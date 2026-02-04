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
    return (
        <div className="flex gap-8 py-8 border-b border-zinc-900/50 min-h-[300px]">
            {/* Left Column: Rating */}
            <div className="w-32 flex flex-col items-center justify-center shrink-0">
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

            {/* Right Column: Albums Carousel */}
            <div className="flex-1 overflow-x-auto pb-4 scrollbar-hide">
                <div className="flex gap-6 px-4">
                    {albums.map((album) => (
                        <AlbumCard
                            key={album.id}
                            title={album.title}
                            artist={album.artist}
                            coverUrl={album.coverUrl}
                        />
                    ))}
                    <AddAlbumCard />

                    {/* Add extra padding at the end for better scroll UX */}
                    <div className="w-4 shrink-0" />
                </div>
            </div>
        </div>
    );
}
