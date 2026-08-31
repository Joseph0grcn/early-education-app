export function useSound() {
  const play = (name) => {
    // Real sound files can be wired here later, e.g. /sounds/pop.mp3.
    window.dispatchEvent(new CustomEvent('app:sound', { detail: { name } }));
  };

  return { play };
}
