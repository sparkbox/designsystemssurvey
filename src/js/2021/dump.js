entries.forEach(function(entry, i) {
  if (i % 2 === 0 && entry.boundingClientRect.y < 0) {
    document.body.classList.add("works");
    document.body.dataset.theme = "dark";
    console.log('testing:' + i);
  } else {
    document.body.classList.remove("works");
    document.body.dataset.theme = "light";
  }
});



if (document.body.dataset.theme = "dark") {
  document.body.dataset.theme = "light";
} else {
  document.body.dataset.theme = "dark";
  console.log("set dark");
}

document.querySelectorAll('.obj-section--dark').forEach(section => { observer.observe(section) });
