import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

export function BarHorizontalGraphic() {
  return (
    <div className="col-span-6 shadow-sm h-72 border border-white border-opacity-20 p-4 rounded-md">
      <span className="text-white">Bar horizontal</span>
      <ResponsiveContainer width="100%" height="95%">
        <BarChart
          layout="vertical"
          barCategoryGap={10}
          margin={{
            top: 10,
          }}
          data={[
            {
              name: "A",
              value: 4000,
              fill: "url(#primaryGradient)",
            },
            {
              name: "B",
              value: 3000,
              fill: "url(#orangeGradient)",
            },
            {
              name: "C",
              value: 2000,
              fill: "url(#orangeGradient)",
            },
          ]}
        >
          <Bar dataKey="value" radius={8} />

          <XAxis type="number" dataKey="value" />
          <YAxis type="category" dataKey="name" />
          <Legend />
          <CartesianGrid strokeDasharray="0.3" opacity={0.3} />
          <defs>
            <linearGradient id="primaryGradient" gradientUnits="userSpaceOnUse">
              <stop stop-color="#F94144" stop-opacity="0.5" />
              <stop offset="1" stop-color="#F94144" />
            </linearGradient>
            <linearGradient id="orangeGradient" gradientUnits="userSpaceOnUse">
              <stop stop-color="#F3722C" stop-opacity="0.5" />
              <stop offset="1" stop-color="#F3722C" />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
