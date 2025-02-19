import fatihaData from "@/lib/quran/sura.json";
import { SuraType } from "@/lib/quran/types/suraType";
import AudioPlayer from "@/components/AudioPlayer";

const SuraFatihaPage = () => {
  const fatiha: SuraType[] = fatihaData?.fatiha;

  return (
    <div>
      {fatiha?.map((post) => (
        <div key={post.id}>
          <AudioPlayer post={post} />
          <h2>{post.name}</h2>
          <p>আয়াত সংখ্যা: {post.ayahs}</p>
          <p>শহর: {post.city}</p>
        </div>
      ))}
    </div>
  );
};

export default SuraFatihaPage;
