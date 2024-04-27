import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

export function RadarGraphic() {
  return (
    <div className="col-span-6 h-72 border border-white border-opacity-20 p-4 rounded-md">
      <span className="text-white">Radar</span>
      <ResponsiveContainer width="100%" height="90%">
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="80%"
          data={[
            {
              windows: 30,
              linux: 34,
              mac: 10,
              browser: "Edge",
            },
            {
              windows: 80,
              linux: 42,
              mac: 69,
              browser: "Chrome",
            },

            {
              windows: 0,
              linux: 0,
              mac: 45,
              browser: "Safari",
            },
            {
              windows: 70,
              linux: 60,
              mac: 50,
              browser: "Firefox",
            },
          ]}
        >
          <PolarGrid opacity={0.2} />
          <PolarAngleAxis dataKey="browser" />
          <Radar
            dataKey="linux"
            stroke="#FBE947"
            fill="#FBE947"
            fillOpacity={0.2}
          />
          <Radar
            dataKey="windows"
            stroke="#F94144"
            fill="#F94144"
            fillOpacity={0.2}
          />
          <Radar
            dataKey="mac"
            stroke="#FF903E"
            fill="#FF903E"
            fillOpacity={0.2}
          />
          <Legend
            iconType="circle"
            formatter={(value) => (
              <span className="text-white text-xs text-opacity-75">
                {value}
              </span>
            )}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
