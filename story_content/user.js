function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Cezym2bOIA":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="musikku.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

