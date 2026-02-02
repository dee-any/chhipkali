import { useState } from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

export default function App() {
  const [step, setStep] = useState(0);
  const [mood, setMood] = useState("");

  const pieData = {
    labels: ["NO", "NO but yellow"],
    datasets: [
      {
        data: [95, 5],
        backgroundColor: ["#76a5fa", "#ffe066"],
      },
    ],
  };
  

  const pieOptions = {
    plugins: {
      datalabels: {
        formatter: (value, context) => {
          const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
          const percentage = ((value / total) * 100).toFixed(1);
          return `${percentage}%`;
        },
        color: "#fff",
        font: {
          weight: "bold",
        },
      },
    },
  };

  return (
    <div className="card">
      {step === 0 && (
        <>
          <h2>Hi Anshikaaaa 🌸</h2>
          <p>How are you today?</p>

          <button
            onClick={() => {
              setMood("good");
              setStep(1);
            }}
          >
            Good 😀
          </button>

          <button
            onClick={() => {
              setMood("bad");
              setStep(1);
            }}
          >
            Sad 😞
          </button>
        </>
      )}

      {step === 1 && (
        <>
          {mood === "good" ? null : (
            <>
              <p>Do we care 🙃</p>
              <Pie data={pieData} />
            </>
          )}

          <button onClick={() => setStep(2)}>Do you want something your favourite to eat?</button>
        </>
      )}

      {step === 2 && (
        <>
          <p>Are you sure</p>

          <button onClick={() => setStep(3)}>Yessss 🤤</button>
        </>
      )}

      {step === 3 && (
        <>
          <img
            width="200"
            src="https://em-content.zobj.net/source/microsoft-teams/363/pile-of-poo_1f4a9.png"
          />
          <p>le guuuuuu khale</p>
        </>
      )}
    </div>
  );
}
