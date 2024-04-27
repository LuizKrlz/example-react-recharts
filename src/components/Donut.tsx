import {
  Label,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export function DonutGraphic() {
  return (
    <div className="col-span-6 h-72 border border-white border-opacity-20 p-4 rounded-md">
      <span className="text-white">Donut</span>
      <ResponsiveContainer width="100%" height="90%">
        <PieChart>
          <Pie
            data={[
              {
                name: "Total closed proposals",
                value: 100,
                fill: "url(#primaryGradient)",
              },
            ]}
            innerRadius={50}
            stroke="transparent"
            outerRadius={70}
            height={220}
            dataKey="value"
          />

          <Pie
            startAngle={-270}
            data={[
              {
                name: "b",
                value: 50,
                fill: "transparent",
              },
              {
                name: "Total without insurance",
                value: 50,
                fill: "url(#grayGradient)",
              },
            ]}
            cornerRadius={2}
            isAnimationActive
            innerRadius={20}
            stroke="transparent"
            outerRadius={40}
            dataKey="value"
          />
          <Tooltip />
          <Label />
          <Legend
            iconType="circle"
            formatter={(value) => {
              if (value == "b") return <></>;

              return (
                <span className="text-white text-xs font-medium text-opacity-75">
                  {value}
                </span>
              );
            }}
          />

          <defs>
            <linearGradient id="primaryGradient" gradientUnits="userSpaceOnUse">
              <stop stop-color="#F94144" />
              <stop offset="0.4" stop-color="#F94144" stop-opacity="0.25" />
            </linearGradient>

            <linearGradient id="orangeGradient" gradientUnits="userSpaceOnUse">
              <stop stop-color="#F3722C" />
              <stop offset="1" stop-color="#F3722C" stop-opacity="0.5" />
            </linearGradient>

            <linearGradient
              id="grayGradient"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#A0A0A0" />
              <stop offset="1" stop-color="#A0A0A0" stop-opacity="0.25" />
            </linearGradient>

            <linearGradient
              id="orangeLightGradient"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F8961E" />
              <stop offset={1} stop-color="#F8961E" stop-opacity="0.5" />
            </linearGradient>

            <linearGradient id="yellowGradient" gradientUnits="userSpaceOnUse">
              <stop stop-color="#F9C74F" />
              <stop offset="1" stop-color="#F9C74F" stop-opacity="0.5" />
            </linearGradient>
          </defs>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
