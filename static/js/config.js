const HIDEARR = []; // 需要隐藏的目录名

const LOCATIONURL = "/compute/";

if (window) {
  window.LOCATIONURL = LOCATIONURL;
}

if (window?.sessionStorage) {
  window?.sessionStorage.setItem("hideArr", HIDEARR);
} else {
  window.hideArr = HIDEARR || [];
}

console.log("window.LOCATIONURL: ", window.LOCATIONURL);
