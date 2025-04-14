let image = document.getElementsByClassName("image");

let count = [];
for (let i = 0; i < image.length; i++) {
  count.push(i);
}
let element = image[2];
let y = 95;
let dot = image.length;
let topp = 0;
for (let i = 0; i < image.length; i++) {
  let x = i;
  let element = image[x];

  y = y - 3;
  topp = topp + 12;
  console.log(topp);
  image[i].style.zIndex = dot;

  dot = dot - 1;
  image[i].style.top = topp + "px";
  image[i].style.width = y + "%";
}

count.forEach((data) => {
  let first = "header_image";
  let second = "second_header_image";
  let third = "third_header_image";

  image[data].addEventListener("click", function (a) {
    for (let i = 0; i < image.length; i++) {
      image[i].classList.remove(first, second, third);
    }
    console.log(data);
    image[data].classList.add(first);

    // let lastElement = count[count.length - 1];
    //         if (data ==0) {
    //  image[data].classList.add(first)
    //             image[data+1].classList.add(second)
    //             image[lastElement].classList.add(third)
    //         }
    //         else if (data==lastElement) {
    //      image[data].classList.add(first)
    //             image[data-1].classList.add(second)
    //             image[0].classList.add(third)
    //         }
    //     else  {

    // image[data].classList.add(first)
    //             image[data+1].classList.add(second)
    //             image[data-1].classList.add(third)

    //         }
  });
});
