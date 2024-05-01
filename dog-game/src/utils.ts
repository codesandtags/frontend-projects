// utils.ts
export const playSound = (soundPath: string) => {
  const audio = new Audio(soundPath);
  audio.play();
};
