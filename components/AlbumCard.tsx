import Image from "next/image";

interface AlbumCardProps {
    title: string;
    artist: string;
    coverUrl: string;
}

export default function AlbumCard({ title, artist, coverUrl }: AlbumCardProps) {
    return (
        <div className="flex-shrink-0 w-48 group cursor-pointer">
            <div className="relative aspect-square rounded-lg overflow-hidden mb-3 bg-zinc-800 shadow-lg group-hover:shadow-orange-500/10 transition-shadow">
                <Image
                    src={coverUrl}
                    alt={`${title} by ${artist}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <h3 className="text-white font-semibold text-sm truncate">{title}</h3>
            <p className="text-zinc-500 text-xs truncate">{artist}</p>
        </div>
    );
}
