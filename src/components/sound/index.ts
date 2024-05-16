import { Howl } from "howler";
import buttonSoundMP3 from "../../assets/button.wav";
import oPlaySoundMP3 from "../../assets/playSoundO.mp3";
import xPlaySoundMP3 from "../../assets/playSoundX.mp3";
import reverseSoundMP3 from "../../assets/reverse.mp3";
import toggleSoundMP3 from "../../assets/toggle.wav";
import winSoundMP3 from "../../assets/win.mp3";

export const playSoundX = () => {
  const sound: Howl = new Howl({
    src: [xPlaySoundMP3],
  });

  sound.play();
};

export const playSoundO = () => {
  const sound: Howl = new Howl({
    src: [oPlaySoundMP3],
  });

  sound.play();
};

export const buttonSound = () => {
  const sound: Howl = new Howl({
    src: [buttonSoundMP3],
  });

  sound.play();
};

export const toggleSound = () => {
  const sound: Howl = new Howl({
    src: [toggleSoundMP3],
  });

  sound.play();
};

export const winSound = () => {
  const sound: Howl = new Howl({
    src: [winSoundMP3],
  });

  sound.play();
};

export const reverseSound = () => {
  const sound: Howl = new Howl({
    src: [reverseSoundMP3],
  });

  sound.play();
};
