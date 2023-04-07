// leadership experiences DOM
var ex1 = $('.ex1')
var ex2 = $('.ex2')
var ex3 = $('.ex3')
var exdetail = $('.exdetail')

// if ex2 is clicked
ex2.on("click", changeDetail2);

function changeDetail2() {
  exdetail.text("Wander in Tech is a project that aspires to be a guiding hand in our community's new era of technology by providing students a basic introduction to the technology, informative guidelines for STEM-related majors, and crucial opportunities for future endeavors.");
}
// if ex3 is clicked
ex3.on("click", changeDetail3);

function changeDetail3() {
  exdetail.text("I was a project organizer. I ran JCI International Business Exhibition as exhibition activities planner and salesperson. I was also a member of the Young Leaders Program of JCI Cambodia’s sub-projects.");
}
// if ex1 is clicked
ex1.on("click", changeDetail1);

function changeDetail1() {
  exdetail.text("In Cambodia, menstrual talks are not to be spoken openly, “it’s embarrassing” they say. Girls were never properly taught the subject and only learned how to deal with periods from our mothers, sisters, or close female relatives. This problem can cause severe health problems, physically and emotionally. Hence, it has to be addressed.\n\n We provide menstrual education by hosting workshops and book distributions at schools.");
}



// slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = $(".mySlides");
  let dots = $(".dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// typing animation
// function typing_animation() {
//     let text_element = document.querySelector(".typing");
//     let text_array = text_element.innerHTML.split("");
//     let text_array_slice = text_element.innerHTML.split(" ");
//     let text_len = text_array.length;

//     const word_len = text_array_slice.map((word) => {
//         return word.length;
//     })

//     console.log(word_len);

//     let timings = {
//         easing: `steps(${Number(word_len[0] + 1)}, end)`,
//         delay: 2000,
//         duration: 2000,
//         fill: 'forwards'
//     }

//     let cursor_timings = {
//         duration: 700,
//         iterations: Infinity,
//         easing: 'cubic-bezier(0,.26,.44,.93)'
//     }

//     document.querySelector(".text_cursor").animate([
//         {
//             opacity: 0
//         },
//         {
//             opacity: 0, offset: 0.7
//         },
//         {
//             opacity: 1
//         }
//     ], cursor_timings);

//     if (text_array_slice.length == 1) {
//         timings.easing = `steps(${Number(word_len[0])}, end)`;

//         let reveal_animation = document.querySelector(".text_hide").animate([
//             { left: '0%' },
//             { left: `${(100 / text_len) * (word_len[0])}%` }
//         ], timings);

//         document.querySelector(".text_cursor").animate([
//             { left: '0%' },
//             { left: `${(100 / text_len) * (word_len[0])}%` }
//         ], timings);

//         reveal_animation.onfinish = () => {
//             setTimeout(() => {
//                 document.querySelector('.text_hide').animate([
//                     {left: '0%'}
//                 ], {
//                     duration: 2000,
//                     easing: 'cubic-bezier(.73,0,.38,.88)'
//                 });
//                 document.querySelector('.text_cursor').animate([
//                     {left: '0%'}
//                 ], {
//                     duration: 2000,
//                     easing: 'cubic-bezier(.73,0,.38,.88)'
//                 });
//                 typing_animation();
//             }, 1000);
//         }
//     } else {
//         document.querySelector(".text_hide").animate([
//             { left: '0%' },
//             { left: `${(100 / text_len) * (word_len[0] + 1)}%` }
//         ], timings);

//         document.querySelector(".text_cursor").animate([
//             { left: '0%' },
//             { left: `${(100 / text_len) * (word_len[0] + 1)}%` }
//         ], timings);
//     }


//     for (let i = 1; i < text_array_slice.length; i++) {
//         console.log(word_len);
//         console.log(text_array_slice.length);
//         const single_word_len = word_len[i];
//         console.log(single_word_len);

//         if (i == 1) {
//             var left_instance = (100 / text_len) * (word_len[i - 1] + 1);
//             console.log(left_instance);
//         }

//         let timings_2 = {
//             easing: `steps(${Number(single_word_len + 1)}, end)`,
//             delay: (2 * (i + 1) + (2 * i)) * (1000),
//             // delay: ((i*2)-1)*1000,
//             duration: 2000,
//             fill: 'forwards'
//         }

//         if (i == (text_array_slice.length - 1)) {
//             timings_2.easing = `steps(${Number(single_word_len)}, end)`;
//             let reveal_animation = document.querySelector(".text_hide").animate([
//                 { left: `${left_instance}%` },
//                 { left: `${left_instance + ((100 / text_len) * (word_len[i]))}%` }
//             ], timings_2);

//             document.querySelector(".text_cursor").animate([
//                 { left: `${left_instance}%` },
//                 { left: `${left_instance + ((100 / text_len) * (word_len[i]))}%` }
//             ], timings_2);

//             reveal_animation.onfinish = () => {
//                 setTimeout(() => {
//                     document.querySelector('.text_hide').animate([
//                         {left: '0%'}
//                     ], {
//                         duration: 2000,
//                         easing: 'cubic-bezier(.73,0,.38,.88)'
//                     });
//                     document.querySelector('.text_cursor').animate([
//                         {left: '0%'}
//                     ], {
//                         duration: 2000,
//                         easing: 'cubic-bezier(.73,0,.38,.88)'
//                     });
//                     typing_animation();
//                 }, 1000);
//             }
//         } else {
//             document.querySelector(".text_hide").animate([
//                 { left: `${left_instance}%` },
//                 { left: `${left_instance + ((100 / text_len) * (word_len[i] + 1))}%` }
//             ], timings_2);

//             document.querySelector(".text_cursor").animate([
//                 { left: `${left_instance}%` },
//                 { left: `${left_instance + ((100 / text_len) * (word_len[i] + 1))}%` }
//             ], timings_2);
//         }

//         left_instance = left_instance + ((100 / text_len) * (word_len[i] + 1));
//     }
// }
// typing_animation();