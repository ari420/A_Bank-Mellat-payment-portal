////////////////////celections//////////////////////////
const cornometr = document.querySelector(".time");
const cart_number = document.querySelector(".inp1");
const cvv2 = document.querySelector(".inp2");
const date_l = document.querySelector(".inp3");
const date_r = document.querySelector(".inp4");
const c_entery = document.querySelector(".inp5");
const cc_code2 = document.querySelector(".inp6");
const gmail = document.querySelector(".inp7");
const c_code = document.querySelector(".code");
const c_code_i = document.querySelector(".chang_c_code");
const btn_no = document.querySelector(".btn_n");
const btn_yes = document.querySelector(".btn_y");

////////////////////extra requierment//////////////////
const rNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let m = 9;
let s = 59;

////////////////make pre random c_code////////////////
c_code.innerText = getRandomFourDigitNumber([...rNumber]);

cart_number.addEventListener("input", (e) => {
  ////////////////////clear eny thing exspt number/////////////////////
  let val = e.target.value.replace(/[^0-9]/g, "");
  // Limit the input to 16 characters
  val = val.substring(0, 16);
  // Add a dash every 4 characters
  let formattedValue = val.match(/.{1,4}/g)?.join("-") || "";
  // Update the input field with the formatted value
  cart_number.value = formattedValue;

  console.log(val);

  if (val.length === 16) {
    cvv2.focus();
  }
});

////////////////////////cvv2 keyup value//////////////////////
cvv2.addEventListener("keyup", (e) => {
  ////////////////////clear eny thing exspt number/////////////////////
  e.target.value = e.target.value.replace(/[^0-9]/g, "");
  ////////////////////limit cvv2 value to 4////////////////////
  cvv2.value.length > 4 && (cvv2.value = cvv2.value.slice(0, 4));
  ////////////////////focus back if user clear cvv2//////////////////
  e.keyCode == 8 && cvv2.value.length == 0 && cart_number.focus();
});

//////////// date_l and date_r keyup////////////
date_l.addEventListener("keyup", (e) => {
  ////////////////////clear eny thing exspt number/////////////////////
  e.target.value = e.target.value.replace(/[^0-9]/g, "");
  //////////////limit to 2///////////////////
  date_l.value.length > 2 && (date_l.value = date_l.value.slice(0, 2));
  ////////////////focus back if nesesury///////////
  e.keyCode == 8 && date_l.value.length == 0 && cvv2.focus();
  ///////////////focus next//////////
  date_l.value.length == 2 && date_r.focus();
});

date_r.addEventListener("keyup", (e) => {
  ////////////////////clear eny thing exspt number/////////////////////
  e.target.value = e.target.value.replace(/[^0-9]/g, "");
  ////////////////limit to 2///////////////
  date_r.value.length > 2 && (date_r.value = date_r.value.slice(0, 2));
  ////////////////focus back if nesesury///////////
  e.keyCode == 8 && date_r.value.length == 0 && date_l.focus();
  ///////////////focus next///////////////
  date_r.value.length == 2 && c_entery.focus();
});

//////////////////c_entry keyup////////////////
c_entery.addEventListener("keyup", (e) => {
  ////////////////////clear eny thing exspt number/////////////////////
  e.target.value = e.target.value.replace(/[^0-9]/g, "");
  ////////////////limit to 4///////////////
  c_entery.value.length > 4 && (c_entery.value = c_entery.value.slice(0, 4));
  ////////////////focus back if nesesury///////////
  e.keyCode == 8 && c_entery.value.length == 0 && date_r.focus();
  ///////////////focus next///////////////
  c_entery.value.length == 4 && cc_code2.focus();
});

////////////////cc_code2 keyup/////////////////
cc_code2.addEventListener("keyup", (e) => {
  ////////////////////clear eny thing exspt number/////////////////////
  e.target.value = e.target.value.replace(/[^0-9]/g, "");
  ////////////////focus back if nesesury///////////
  e.keyCode == 8 && cc_code2.value.length == 0 && c_entery.focus();
});

/////////////////make c_code by i///////////////////
c_code_i.addEventListener("click", () => {
  c_code.innerText = "";
  setTimeout(() => {
    c_code.innerText = getRandomFourDigitNumber([...rNumber]);
  }, 1000);
});

////////////////////make a cornometr//////////////////////
setInterval(() => {
  if (s != 0) {
    s--;
  } else {
    if (m != 0) {
      m--;
      s = 59;
    } else {
      //if end do something //
      alert("time up");
      m = 9;
      s = 59;
    }
  }
  cornometr.innerText = m + ":" + s;
}, 1000);

///////////////////////just refreshing the page when btn click////////////////
btn_no.addEventListener("click", () => {
  alert("you sure you want to give up");
  location.reload();
});

btn_yes.addEventListener("click", () => {
  alert("your transaction has done successfully");
  location.reload();
});

////////////////////////////////////////////////////
////////////////////////functions///////////////////
///////////////////////////////////////////////////

///////////////////make for digit random number/////////////////////
function getRandomFourDigitNumber(rNumber) {
  let result = "";

  for (let i = 0; i < 4; i++) {
    // Pick a random index from the remaining numbers
    const randomIndex = Math.floor(Math.random() * rNumber.length);
    // Add the selected number to the result
    result += rNumber[randomIndex];
    // Remove the selected number to ensure no duplicates
    rNumber.splice(randomIndex, 1);
  }

  return result;
}
