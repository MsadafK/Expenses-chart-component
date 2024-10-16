const x = document.querySelectorAll(".spending_individual-bar");
const y = document.querySelectorAll(".spending_day");

fetch("data.json")
  .then((res) => {
    if (!res.ok) {
      throw new Error("Network response was not ok.");
    }
    return res.json();
  })
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      x[i].style.height = `${data[i].amount}%`;
      y[i].textContent = `${data[i].day}`;

      if (data[i].amount >= 50)
        x[i].style.backgroundColor = "hsl(186, 34%, 60%)";
      else x[i].style.backgroundColor = "hsl(10, 79%, 65%)";
    }
  })
  .catch((error) =>
    console.error("There has been a problem with your fetch operation", error)
  );
