import {
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export function DispersionGraphic() {
  return (
    <div className="col-span-6 h-72 border border-white border-opacity-20 p-4 rounded-md">
      <span className="text-white">Disperção</span>
      <ResponsiveContainer height="90%">
        <ScatterChart>
          <XAxis type="number" dataKey="x" unit="M" />
          <YAxis dataKey="y" type="number" />
          <CartesianGrid opacity={0.4} strokeDasharray="0.2" />
          <Tooltip cursor={{ stroke: "#808080" }} />
          <Scatter
            line
            lineType="fitting"
            data={[
              { x: 1, y: 3, name: "A" },
              { x: 0.6, y: 11, name: "B" },
              { x: 2.2, y: 4, name: "C" },
              { x: 2.9, y: 16, name: "D" },
              { x: 4, y: 5.6, name: "E" },
              { x: 6, y: 18, name: "F" },
              { x: 7, y: 8, name: "G" },
            ]}
            fill="#ff7300"
          >
            <LabelList dataKey="name" position="right" />
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
