import React from "react";
import { SuraType } from "@/lib/quran/types/suraType";

type AudioPlayerProps = {
  post: SuraType;
};
const AudioPlayer = ({ post }: AudioPlayerProps) => {
  if (!post || !post.player) {
    return <p>অডিও ফাইল পাওয়া যায়নি।</p>;
  }

  return (
    <div>
      <audio controls>
        <source src={post.player} type="audio/mp3" />
        আপনার ব্রাউজার অডিও প্লেয়ার সাপোর্ট করে না।
      </audio>
    </div>
  );
};

export default AudioPlayer;
