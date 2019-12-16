let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

let cloudLogoImg = document.getElementById("cloud-logo-img");
let cloud1 = 190;
let cloud2 = 190;
let cirSize1 = 20;
let circY = 300;
let rectRed = 255;
let rectGreen = 0;
requestAnimationFrame(loop);
function loop() {
  cloud1++;
  cloud2--;
  cirSize1 += 0.1;
  circY--;
  rectGreen++;

  //Background
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, 400, 300);

  // CIRCLES / ARCS
  ctx.lineWidth = 5;
  ctx.fillStyle = "rgb(" + rectRed + "," + rectGreen + ", 0)";
  ctx.beginPath();
  ctx.arc(200, circY, cirSize1, 0 , 2 * Math.PI);
  ctx.fill();

  // IMAGES
  ctx.drawImage(cloudLogoImg, cloud1, 100);
  ctx.drawImage(cloudLogoImg, cloud2, 80);

  ctx.fillStyle = "green";
  ctx.fillRect(0, 300, 400, 300);

  requestAnimationFrame(loop);
}
