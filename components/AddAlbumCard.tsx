import { Plus } from "lucide-react";

export default function AddAlbumCard() {
    return (
        <div className="flex-shrink-0 w-32 md:w-48 aspect-square rounded-lg border-2 border-dashed border-zinc-800 flex items-center justify-center cursor-pointer hover:border-zinc-700 hover:bg-zinc-900/50 transition-all group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform">
                <Plus className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
        </div>
    );
}
