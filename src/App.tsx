import { AreaGraphic } from "./components/Area";
import { RadarGraphic } from "./components/Radar";
import { DispersionGraphic } from "./components/Dispersion";
import { PieGraphic } from "./components/Pie";
import { DonutGraphic } from "./components/Donut";
import { FunnelGraphic } from "./components/Funnel";
import { StackedBarGraphic } from "./components/StackedBar";
import { BarVerticalGraphic } from "./components/BarVertical";
import { BarHorizontalGraphic } from "./components/BarHorizontal";

function App() {
  return (
    <div className="bg-zinc-800 min-h-screen">
      <div className="max-w-screen-lg mx-auto p-4 grid grid-cols-12 gap-6">
        <BarHorizontalGraphic />
        <BarVerticalGraphic />
        <StackedBarGraphic />
        <FunnelGraphic />
        <DonutGraphic />
        <PieGraphic />
        <DispersionGraphic />
        <AreaGraphic />
        <RadarGraphic />
      </div>
    </div>
  );
}

export default App;
