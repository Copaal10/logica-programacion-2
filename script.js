function convertirTemperatura() {
  const input = document.getElementById("celsius").value;
  const celsius = Number(input);

  if (isNaN(celsius)) {
    document.getElementById("resultado").innerText = "❌ Error: ingresa un número válido.";
    return;
  }

  const fahrenheit = (celsius * 9/5) + 32;
  const kelvin = celsius + 273.15;

  document.getElementById("resultado").innerHTML = `
    ✅ Grados Fahrenheit: ${fahrenheit.toFixed(2)}<br>
    ✅ Grados Kelvin: ${kelvin.toFixed(2)}
  `;
}