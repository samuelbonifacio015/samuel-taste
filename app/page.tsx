"use client";

import { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Eye, Pencil } from "lucide-react";
import Header from "@/components/Header";
import TierRow from "@/components/TierRow";

interface Album {
  id: string;
  title: string;
  artist: string;
  coverUrl: string;
}

interface Tier {
  id: string;
  score: string;
  label: string;
  albums: Album[];
}

export default function Home() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [tiers, setTiers] = useState<Tier[]>([
    {
      id: "tier-10",
      score: "10",
      label: "MASTERPIECE",
      albums: [
        {
          id: "dsotm",
          title: "Dark Side of The Moon",
          artist: "Pink Floyd",
          coverUrl: "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png",
        },
        {
          id: "kid-a",
          title: "Kid A",
          artist: "Radiohead",
          coverUrl: "https://upload.wikimedia.org/wikipedia/en/b/b5/Radiohead.kida.albumart.jpg",
        },
        {
          id: "tpab",
          title: "To Pimp a Butterfly",
          artist: "Kendrick Lamar",
          coverUrl: "https://upload.wikimedia.org/wikipedia/en/f/f6/Kendrick_Lamar_-_To_Pimp_a_Butterfly.png",
        },
        {
          id: "blonde",
          title: "Blonde",
          artist: "Frank Ocean",
          coverUrl: "https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg",
        },
        {
          id: "in-rainbows",
          title: "In Rainbows",
          artist: "Radiohead",
          coverUrl: "https://upload.wikimedia.org/wikipedia/en/1/14/In_rainbows_cover.png",
        },
        {
          id: "currents",
          title: "Currents",
          artist: "Tame Impala",
          coverUrl: "https://upload.wikimedia.org/wikipedia/en/9/9b/Tame_Impala_-_Currents.png",
        },
      ],
    },
    {
      id: "tier-9",
      score: "9",
      label: "EXCELLENT",
      albums: [
        {
          id: "melodrama",
          title: "Melodrama",
          artist: "Lorde",
          coverUrl: "https://upload.wikimedia.org/wikipedia/en/b/b2/Lorde_-_Melodrama.png",
        },
        {
          id: "igor",
          title: "Igor",
          artist: "Tyler, The Creator",
          coverUrl: "https://upload.wikimedia.org/wikipedia/en/5/51/Igor_-_Tyler%2C_the_Creator.jpg",
        },
        {
          id: "after-hours",
          title: "After Hours",
          artist: "The Weeknd",
          coverUrl: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png",
        },
        {
          id: "punisher",
          title: "Punisher",
          artist: "Phoebe Bridgers",
          coverUrl: "https://upload.wikimedia.org/wikipedia/en/1/10/Phoebe_Bridgers_-_Punisher.png",
        },
        {
          id: "ram",
          title: "Random Access Memories",
          artist: "Daft Punk",
          coverUrl: "https://upload.wikimedia.org/wikipedia/en/a/a7/Random_Access_Memories.jpg",
        },
      ],
    },
    {
      id: "tier-8",
      score: "8",
      label: "GREAT",
      albums: [
        {
          id: "folklore",
          title: "Folklore",
          artist: "Taylor Swift",
          coverUrl: "https://upload.wikimedia.org/wikipedia/en/f/f8/Taylor_Swift_-_Folklore.png",
        },
        {
          id: "future-nostalgia",
          title: "Future Nostalgia",
          artist: "Dua Lipa",
          coverUrl: "https://upload.wikimedia.org/wikipedia/en/f/f5/Dua_Lipa_-_Future_Nostalgia_%28Official_Album_Cover%29.png",
        },
        {
          id: "nfr",
          title: "Norman F****** Rockwell!",
          artist: "Lana Del Rey",
          coverUrl: "https://upload.wikimedia.org/wikipedia/en/d/d5/Lana_Del_Rey_-_Norman_Fucking_Rockwell.png",
        },
      ],
    },
  ]);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    const sourceTierIndex = tiers.findIndex((tier) => tier.id === source.droppableId);
    const destTierIndex = tiers.findIndex((tier) => tier.id === destination.droppableId);

    if (sourceTierIndex === -1 || destTierIndex === -1) return;

    const newTiers = [...tiers];
    const sourceTier = newTiers[sourceTierIndex];
    const destTier = newTiers[destTierIndex];

    const [movedAlbum] = sourceTier.albums.splice(source.index, 1);

    if (sourceTierIndex === destTierIndex) {
      sourceTier.albums.splice(destination.index, 0, movedAlbum);
    } else {
      destTier.albums.splice(destination.index, 0, movedAlbum);
    }

    setTiers(newTiers);
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col">
      <Header />

      <main className="flex-1 pb-20">
        <div className="px-4 md:px-8 mt-8 md:mt-12 mb-6 md:mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-2">My Collection</h1>
              <p className="text-zinc-400 text-sm md:text-lg">
                {isEditMode 
                  ? "Drag albums to reorder or move between tiers." 
                  : "Organized by critical acclaim & personal rating."}
              </p>
            </div>
            
            <button
              onClick={() => setIsEditMode(!isEditMode)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                isEditMode 
                  ? "bg-orange-500 text-white hover:bg-orange-600" 
                  : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white"
              }`}
            >
              {isEditMode ? (
                <>
                  <Pencil className="w-4 h-4" />
                  Edit Mode
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4" />
                  View Mode
                </>
              )}
            </button>
          </div>
        </div>

        {isEditMode ? (
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="flex flex-col">
              {tiers.map((tier) => (
                <TierRow
                  key={tier.id}
                  id={tier.id}
                  score={tier.score}
                  label={tier.label}
                  albums={tier.albums}
                  isEditMode={true}
                />
              ))}
            </div>
          </DragDropContext>
        ) : (
          <div className="flex flex-col">
            {tiers.map((tier) => (
              <TierRow
                key={tier.id}
                id={tier.id}
                score={tier.score}
                label={tier.label}
                albums={tier.albums}
                isEditMode={false}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
