import { RadialBackground } from "@/components/ui/light-theme-tailwind-css-background-snippet";

export function DemoOne() {
  return (
    <div className="relative isolate min-h-[260px] overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-8 shadow-sm">
      <RadialBackground />
      <div className="relative z-10 space-y-3">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">Demo</p>
        <h3 className="text-2xl font-semibold text-slate-900">Light theme radial background</h3>
        <p className="max-w-md text-sm text-slate-600">
          This creates a soft premium highlight for hero sections, cards, and feature layouts.
        </p>
      </div>
    </div>
  );
}

export default DemoOne;
