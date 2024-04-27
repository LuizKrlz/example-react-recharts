import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

export function BarVerticalGraphic() {
  return (
    <div className="col-span-6 h-72 shadow-sm border border-white border-opacity-20 p-4 rounded-md">
      <span className="text-white">Bar Vertical</span>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          layout="horizontal"
          margin={{
            top: 10,
          }}
          data={[
            {
              name: "A",
              value: 38,
              fill: "red",
            },
            {
              name: "B",
              value: 60,
              fill: "orange",
            },
            {
              name: "C",
              value: 80,
              fill: "salmon",
            },
            {
              name: "D",
              value: 30,
              fill: "pink",
            },
            {
              name: "E",
              value: 20,
              fill: "blue",
            },
            {
              name: "F",
              value: 70,

              fill: "lime",
            },
            {
              name: "G",
              value: 90,
              fill: "cyan",
            },
          ]}
        >
          <Bar dataKey="value" radius={4} />
          <XAxis dataKey="name" />
          <YAxis dataKey="value" type="number" />
          <Legend />
          <CartesianGrid strokeDasharray="0.3" opacity={0.3} />

          <defs>
            <linearGradient id="primaryGradient" gradientUnits="userSpaceOnUse">
              <stop stop-color="#F94144" stop-opacity="0.25" />
              <stop offset="1" stop-color="#F94144" />
            </linearGradient>

            <linearGradient id="orangeGradient" gradientUnits="userSpaceOnUse">
              <stop stop-color="#F3722C" />
              <stop offset="1" stop-color="#F3722C" />
            </linearGradient>

            <linearGradient id="warningGradient" gradientUnits="userSpaceOnUse">
              <stop stop-color="#F8961E" stop-opacity="0.25" />
              <stop offset="1" stop-color="#F8961E" />
            </linearGradient>

            <linearGradient id="pinkGradient" gradientUnits="userSpaceOnUse">
              <stop offset="0.2" stop-color="#F32CDF" />
              <stop offset="0.8" stop-color="#F32CDF" stop-opacity="0.25" />
            </linearGradient>

            <linearGradient
              id="blueLightGradient"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#43BBD6" />
              <stop offset="1" stop-color="#43BBD6" stop-opacity="0.3" />
            </linearGradient>

            <linearGradient id="blueGradient" gradientUnits="userSpaceOnUse">
              <stop stop-color="#2B73DF" />
              <stop offset="1" stop-color="#2B73DF" stop-opacity="0.5" />
            </linearGradient>

            <linearGradient id="greenGradient" gradientUnits="userSpaceOnUse">
              <stop offset="0.2" stop-color="#8CCA5D" stop-opacity="1" />
              <stop offset="0.4" stop-color="#90BE6D" stop-opacity="0.2" />
              <stop offset="0.6" stop-color="#8CCA5D" stop-opacity="0.6" />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
