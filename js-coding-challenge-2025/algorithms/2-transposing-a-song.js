function transpose(song, interval) {
  const sharp = [
    "A",
    "A#",
    "B",
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
  ];
  const map = { Bb: "A#", Db: "C#", Eb: "D#", Gb: "F#", Ab: "G#" };

  return song.map((note) => {
    if (note.includes("b")) note = map[note];
    const index = (sharp.indexOf(note) + interval + 12) % 12;

    return sharp[index];
  });
}
