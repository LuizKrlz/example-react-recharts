import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

export function StackedBarGraphic() {
  return (
    <div className="col-span-6 h-72 shadow-sm border border-white border-opacity-20 p-4 rounded-md">
      <span className="text-white">Stacked Bar</span>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          maxBarSize={24}
          height={300}
          data={[
            {
              name: "A",
              red: 210,
              orange: 100,
            },
            {
              name: "B",
              red: 150,
              orange: 140,
            },
            {
              name: "C",
              red: 250,
              orange: 240,
            },
            {
              name: "D",
              red: 250,
              orange: 240,
            },
            {
              name: "E",
              red: 170,
              orange: 150,
            },
            {
              name: "F",
              red: 140,
              orange: 120,
            },
            {
              name: "G",
              red: 90,
              orange: 80,
            },
          ]}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid opacity={0.1} />
          <XAxis dataKey="name" />
          <YAxis type="number" />

          <Legend
            align="left"
            iconType="circle"
            formatter={(value) => {
              return <span className="text-white text-xs">{value}</span>;
            }}
          />
          <Bar dataKey="red" stackId="a" fill="url(#redGradient)" />
          <Bar
            dataKey="orange"
            stackId="a"
            fill="url(#orangeGradient)"
            radius={[4, 4, 0, 0]}
          />

          <defs>
            <linearGradient id="redGradient" gradientUnits="userSpaceOnUse">
              <stop offset="1" stop-color="#F94144" stop-opacity="0.75" />
              <stop stop-color="#F94144" stop-opacity="0.25" />
            </linearGradient>

            <linearGradient id="orangeGradient" gradientUnits="userSpaceOnUse">
              <stop stop-color="#F3722C" stop-opacity="0.75" />
              <stop offset="1" stop-color="#F3722C" stop-opacity="0.25" />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
