"use client";

import Image from "next/image";
import { useState } from "react";
import AlbumDetail from "./AlbumDetail";

interface AlbumCardProps {
    title: string;
    artist: string;
    coverUrl: string;
}

export default function AlbumCard({ title, artist, coverUrl }: AlbumCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="flex-shrink-0 w-32 md:w-48 group cursor-pointer relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative aspect-square rounded-lg overflow-hidden mb-3 bg-zinc-800 shadow-lg group-hover:shadow-orange-500/10 transition-shadow">
                <Image
                    src={coverUrl}
                    alt={`${title} by ${artist}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <h3 className="text-white font-semibold text-xs md:text-sm truncate">{title}</h3>
            <p className="text-zinc-500 text-[10px] md:text-xs truncate">{artist}</p>
            
            {isHovered && (
                <div className="absolute left-full top-0 ml-2 z-50 animate-in fade-in zoom-in-95 duration-200">
                    <AlbumDetail
                        title={title}
                        artist={artist}
                        coverUrl={coverUrl}
                    />
                </div>
            )}
        </div>
    );
}
