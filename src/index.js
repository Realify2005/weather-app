async function fetchData(city) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=b08cce43980e41f7bb580301241401&q=${city}`,
      { mode: "cors" }
    );

    if (!response.ok) {
      throw new Error("something went wrong");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

const body = document.querySelector("body");

const h1 = document.createElement("h1");
h1.textContent = "Weather checker";

const input = document.createElement("input");
input.placeholder = "Enter city";

const button = document.createElement("button");
button.textContent = "Search";

const div = document.createElement("div");

body.appendChild(h1);
body.appendChild(input);
body.appendChild(button);

const temp = document.createElement("p");
const condition = document.createElement("p");
const humidity = document.createElement("p");

async function handleButtonClick() {
  const data = await fetchData(input.value);

  temp.textContent = `Temperature: ${data.current.temp_c} degrees Celcius`;
  condition.textContent = `Condition: ${data.current.condition.text}`;
  humidity.textContent = `Humidity: ${data.current.humidity}%`;
}

button.addEventListener("click", handleButtonClick);

div.appendChild(temp);
div.appendChild(condition);
div.appendChild(humidity);
body.appendChild(div);
