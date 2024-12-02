import Player from "react-player";
// import { next, useCurrentLesson } from "../store/slices/player";
// import { useAppDispatch, useAppSelector } from "../store";
import { Loader } from "lucide-react";
import { useCurrentLesson, useStore } from "../zustand-store";

export function Video() {
  const { currentLesson } = useCurrentLesson();
  const { isLoading, next } = useStore((store) => {
    return {
      isLoading: store.isLoading,
      next: store.next,
    };
  });

  // const dispatch = useAppDispatch();
  // const { currentLesson } = useCurrentLesson();
  // const isCourseLoading = useAppSelector((state) => state.player.isLoading);

  function handlePlayNext() {
    // dispatch(next());
    next();
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      {isLoading ? (
        <div>
          <Loader className="w-6 h-6 animate-spin text-zinc-400" />
        </div>
      ) : (
        <Player
          width="100%"
          height="100%"
          controls
          url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
          playing
          onEnded={handlePlayNext}
        />
      )}
    </div>
  );
}
