import {
  Funnel,
  FunnelChart,
  LabelList,
  Legend,
  ResponsiveContainer,
} from "recharts";

export function FunnelGraphic() {
  return (
    <div className="col-span-6 h-72 border border-white border-opacity-20 p-4 rounded-md">
      <span className="text-white">Funnel</span>
      <ResponsiveContainer height="90%">
        <FunnelChart>
          <Funnel
            width={400}
            data={[
              {
                fill: "red",
                name: "100",
                value: 3000,
              },
              {
                fill: "orange",
                name: "200",
                value: 2000,
              },
              {
                fill: "chocolate",
                name: "300",
                value: 1556,
              },
              {
                fill: "yellow",
                name: "400",
                value: 1022,
              },
            ]}
            dataKey="value"
            stroke="transparent"
            isAnimationActive
            lastShapeType="rectangle"
            orientation="horizontal"
          >
            <LabelList
              dataKey="name"
              fill="#fff"
              position="center"
              opacity={1}
            />
          </Funnel>

          <Legend
            payload={[
              {
                color: "red",
                dataKey: "name",
                value: "A",
              },
              {
                color: "orange",
                dataKey: "name",
                value: "B",
              },
              {
                color: "chocolate",
                dataKey: "name",
                value: "C",
              },
              {
                color: "yellow",
                dataKey: "name",
                value: "D",
              },
            ]}
            align="left"
            iconType="circle"
            formatter={(value) => (
              <small className="text-sm text-white text-opacity-75">
                {value}
              </small>
            )}
          />

          <defs>
            <linearGradient id="primaryGradient" gradientUnits="userSpaceOnUse">
              <stop stop-color="#F94144" />
              <stop offset="1" stop-color="#F94144" stop-opacity="0.5" />
            </linearGradient>

            <linearGradient id="orangeGradient" gradientUnits="userSpaceOnUse">
              <stop stop-color="#F3722C" />
              <stop offset="1" stop-color="#F3722C" stop-opacity="0.5" />
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
        </FunnelChart>
      </ResponsiveContainer>
    </div>
  );
}
