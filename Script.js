const btn = document.querySelector("button");
const bodyBg = document.querySelector("body");
const hexdiv = document.querySelector(".hexcode");
const rgbdiv = document.querySelector(".rgb");

 var one = 0, two = 0, three = 0;
 var text = "#";

  btn.addEventListener('click', changeColor);

  function changeColor()
  {
    var hexnum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    var a, b, rgb = 0;

    text = "#";
    one = 0; two = 0; three = 0;

    for(var i = 0; i< 6; i++)
    {
      a = hexnum[Math.floor(Math.random() * 15)];
      text += a;

      a = (hexnum.indexOf(a) + 1);


      if(i % 2 == 0)
      {
        a = a * 16;
        rgb = rgb + a;
      }


      else {
        b = a;
        rgb = rgb + a;

        if( i == 1)
        {
          one = one + rgb;
          rgb = 0;
        }

        else if ( i == 3) {
          two = two + rgb;
          rgb = 0;
        }

        else {
          three = three + rgb;
          rgb = 0;
        }
        }


      }

      bodyBg.style.backgroundColor = text;
      hexdiv.innerHTML = text;
      rgbdiv.innerHTML = "( " + one + ", " + two + ", " + three + " )";
      }
