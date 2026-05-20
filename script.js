
const btn = document.getElementById("btn");
const gif = document.getElementById("gif");


const API_KEY = "Lc3ZVuJ2S2WTCtnZzys2kklBpMThnRHd";

btn.addEventListener("click", async () => {
  gif.style.opacity = "0.3";

  const response = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=kitten`
  );

  const data = await response.json();

  gif.src = data.data.images.original.url;
  gif.onload = () => {
    gif.style.opacity = "1";
  };
});