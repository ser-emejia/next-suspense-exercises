import LibraryGameCardSkeleton from "@/components/LibraryGameCardSkeleton";
import { range } from "@/utils";

const Loading = () => {
  return (
    <section className="max-width-wrapper">
      <header className="library-header">
        <h1>My games</h1>
      </header>
      <div className="game-grid">
        {range(12).map((item) => (
          <LibraryGameCardSkeleton key={item} />
        ))}
      </div>
    </section>
  );
};

export default Loading;
