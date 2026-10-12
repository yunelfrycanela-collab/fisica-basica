/* ============================================================
   Física Básica — interactividad
   ============================================================ */

/* ---------- Cambio de tema (claro / oscuro) ---------- */
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

function aplicarTema(oscuro) {
  document.body.classList.toggle("dark", oscuro);
  themeIcon.textContent = oscuro ? "☀️" : "🌙";
  try { localStorage.setItem("fisicaTema", oscuro ? "oscuro" : "claro"); } catch (e) {}
}

// Recuperar preferencia guardada o la del sistema
(function iniciarTema() {
  let guardado = null;
  try { guardado = localStorage.getItem("fisicaTema"); } catch (e) {}

  if (guardado) {
    aplicarTema(guardado === "oscuro");
  } else {
    const prefiereOscuro = window.matchMedia("(prefers-color-scheme: dark)").matches;
    aplicarTema(prefiereOscuro);
  }
})();

themeToggle.addEventListener("click", () => {
  aplicarTema(!document.body.classList.contains("dark"));
});

/* ---------- Calculadora de fórmulas ---------- */
const formulas = {
  mru: {
    nombre: "Velocidad (MRU)",
    unidades: "m/s",
    campos: [
      { id: "d", etiqueta: "Distancia (m)", def: 100 },
      { id: "t", etiqueta: "Tiempo (s)", def: 20 }
    ],
    calcular: (v) => v.d / v.t
  },
  newton: {
    nombre: "Fuerza (2ª Ley de Newton)",
    unidades: "N",
    campos: [
      { id: "m", etiqueta: "Masa (kg)", def: 10 },
      { id: "a", etiqueta: "Aceleración (m/s²)", def: 2 }
    ],
    calcular: (v) => v.m * v.a
  },
  cinetica: {
    nombre: "Energía cinética",
    unidades: "J",
    campos: [
      { id: "m", etiqueta: "Masa (kg)", def: 2 },
      { id: "v", etiqueta: "Velocidad (m/s)", def: 5 }
    ],
    calcular: (v) => 0.5 * v.m * v.v * v.v
  },
  potencial: {
    nombre: "Energía potencial",
    unidades: "J",
    campos: [
      { id: "m", etiqueta: "Masa (kg)", def: 5 },
      { id: "h", etiqueta: "Altura (m)", def: 10 }
    ],
    calcular: (v) => v.m * 9.8 * v.h
  },
  ohm: {
    nombre: "Voltaje (Ley de Ohm)",
    unidades: "V",
    campos: [
      { id: "i", etiqueta: "Corriente (A)", def: 2 },
      { id: "r", etiqueta: "Resistencia (Ω)", def: 10 }
    ],
    calcular: (v) => v.i * v.r
  },
  onda: {
    nombre: "Velocidad de onda",
    unidades: "m/s",
    campos: [
      { id: "l", etiqueta: "Longitud de onda (m)", def: 2 },
      { id: "f", etiqueta: "Frecuencia (Hz)", def: 50 }
    ],
    calcular: (v) => v.l * v.f
  }
};

const formulaSelect = document.getElementById("formulaSelect");
const calcInputs = document.getElementById("calcInputs");
const calcBtn = document.getElementById("calcBtn");
const calcOutput = document.getElementById("calcOutput");

function crearCampos(clave) {
  const f = formulas[clave];
  calcInputs.innerHTML = "";

  f.campos.forEach((campo) => {
    const wrapper = document.createElement("div");
    wrapper.className = "calculator__row";

    const label = document.createElement("label");
    label.setAttribute("for", "input_" + campo.id);
    label.textContent = campo.etiqueta;

    const input = document.createElement("input");
    input.type = "number";
    input.id = "input_" + campo.id;
    input.value = campo.def;
    input.step = "any";
    input.min = "0";

    wrapper.appendChild(label);
    wrapper.appendChild(input);
    calcInputs.appendChild(wrapper);
  });

  calcOutput.textContent = "Resultado: —";
}

function calcular() {
  const clave = formulaSelect.value;
  const f = formulas[clave];
  const valores = {};

  for (const campo of f.campos) {
    const valor = parseFloat(document.getElementById("input_" + campo.id).value);
    if (isNaN(valor)) {
      calcOutput.textContent = "⚠️ Ingresa valores numéricos válidos.";
      return;
    }
    valores[campo.id] = valor;
  }

  const resultado = f.calcular(valores);
  calcOutput.textContent = `${f.nombre} = ${resultado.toLocaleString("es-ES", { maximumFractionDigits: 4 })} ${f.unidades}`;
}

formulaSelect.addEventListener("change", () => crearCampos(formulaSelect.value));
calcBtn.addEventListener("click", calcular);

// Inicializar
crearCampos(formulaSelect.value);
