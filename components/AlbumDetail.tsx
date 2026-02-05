import Image from "next/image";

interface AlbumDetailProps {
    title: string;
    artist: string;
    coverUrl: string;
    songs?: string[];
    year?: string;
    genre?: string;
}

export default function AlbumDetail({
    title,
    artist,
    coverUrl,
    songs = ["Track 1", "Track 2", "Track 3", "Track 4", "Track 5"],
    year = "2024",
    genre = "Alternative Rock",
}: AlbumDetailProps) {
    return (
        <div className="w-72 bg-zinc-950/95 backdrop-blur-md border border-zinc-800 rounded-xl shadow-2xl shadow-black/50 overflow-hidden z-50">
            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/50 to-zinc-950 z-10" />
                <div className="relative h-40 w-full">
                    <Image
                        src={coverUrl}
                        alt={`${title} by ${artist}`}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                    <span className="inline-block px-2 py-0.5 bg-orange-500/20 text-orange-400 text-xs font-medium rounded-full mb-2">
                        {genre}
                    </span>
                    <h3 className="text-white font-bold text-lg leading-tight">{title}</h3>
                    <p className="text-orange-400 font-medium text-sm">{artist}</p>
                    <p className="text-zinc-500 text-xs mt-1">{year}</p>
                </div>
            </div>
            
            <div className="p-4 pt-2">
                <h4 className="text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="w-4 h-0.5 bg-orange-500 rounded-full" />
                    Canciones
                </h4>
                <ul className="space-y-2">
                    {songs.slice(0, 5).map((song, index) => (
                        <li
                            key={index}
                            className="flex items-center gap-3 text-sm text-zinc-300 hover:text-orange-400 transition-colors cursor-default"
                        >
                            <span className="text-zinc-600 text-xs font-mono w-4">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <span className="truncate flex-1">{song}</span>
                        </li>
                    ))}
                </ul>
                
                <div className="mt-4 pt-4 border-t border-zinc-800">
                    <p className="text-zinc-500 text-xs leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
        </div>
    );
}
