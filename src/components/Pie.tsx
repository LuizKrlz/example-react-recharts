import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
const RADIAN = Math.PI / 180;

export function PieGraphic() {
  return (
    <div className="col-span-6 h-72 border border-white border-opacity-20 p-4 rounded-md">
      <span className="text-white">Pizza</span>
      <ResponsiveContainer height="90%">
        <PieChart>
          <Pie
            startAngle={-270}
            transform="rotate(1)"
            stroke="none"
            dataKey="value"
            labelLine={false}
            label={({
              cx,
              cy,
              midAngle,
              innerRadius,
              outerRadius,
              percent,
            }) => {
              const radius = innerRadius + (outerRadius - innerRadius) * 1.08;
              const x = cx + radius * Math.cos(-midAngle * RADIAN);
              const y = cy + radius * Math.sin(-midAngle * RADIAN);

              return (
                <text
                  x={x}
                  y={y}
                  fontSize={12}
                  fill="white"
                  textAnchor={x > cx ? "start" : "end"}
                  dominantBaseline="central"
                >
                  {`${(percent * 100).toFixed(0)}%`}
                </text>
              );
            }}
            fillOpacity={1}
            data={[
              {
                name: "Example1",
                value: 5,
                fill: "red",
                fillOpacity: 1,
              },
              {
                name: "Example2",
                value: 5,
                fill: "orange",
                fillOpacity: 1,
              },
              {
                name: "Example3",
                value: 15,
                fill: "yellow",
              },
              {
                name: "Example4",
                value: 10,
                fill: "blue",
              },
              {
                name: "Example5",
                value: 15,
                fill: "green",
              },
              {
                name: "Example6",
                value: 15,
                fill: "url(#blueGradient)",
                fillOpacity: 1,
              },
              {
                name: "Default",
                value: 53,
                fill: "silver",
              },
            ]}
          />
          <Legend
            iconType="circle"
            formatter={(value) => (
              <span className="text-white text-opacity-75 text-xs">
                {value}
              </span>
            )}
          />

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
