import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export function AreaGraphic() {
  return (
    <div className="col-span-6 h-72 border border-white border-opacity-20 p-4 rounded-md">
      <span className="text-white">Area</span>
      <ResponsiveContainer width="100%" height="90%">
        <AreaChart
          data={[
            {
              name: 1,
              subscribed: 80,
            },
            {
              name: 2,
              subscribed: 125,
            },
            {
              name: 3,
              subscribed: 180,
            },
            {
              name: 4,
              subscribed: 100,
            },
            {
              name: 5,
              subscribed: 50,
            },
            {
              name: 6,
              subscribed: 100,
            },
            {
              name: 7,
              subscribed: 28,
            },
            {
              name: 8,
              subscribed: 175,
            },
          ]}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid opacity={0.1} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend align="left" iconType="circle" iconSize={10} />
          <Area
            type="monotone"
            dataKey="subscribed"
            dot
            stroke="#F94144"
            fill="url(#redGradient)"
          />
          <defs>
            <linearGradient
              id="redGradient"
              x1="114.5"
              y1="0.973633"
              x2="114.5"
              y2="160.25"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.574993" stop-color="#F94144" />
              <stop offset="1" stop-color="#F94144" stop-opacity="0.25" />
            </linearGradient>
          </defs>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
