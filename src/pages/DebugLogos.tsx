import logo64 from "@/assets/logo-pp-mark-64.png";
import logo96 from "@/assets/logo-pp-mark-96.png";
import logo192 from "@/assets/logo-pp-mark-192.png";
import logo480 from "@/assets/logo-pp-mark-480.png";
import logo1200 from "@/assets/logo-pp-mark-1200.png";
import logoFull from "@/assets/logo-prime-projects.png";

const variants = [
  { label: "Mark 64", src: logo64, box: 64 },
  { label: "Mark 96", src: logo96, box: 96 },
  { label: "Mark 192", src: logo192, box: 192 },
  { label: "Mark 480", src: logo480, box: 240 },
  { label: "Mark 1200", src: logo1200, box: 320 },
  { label: "Favicon 32 (public)", src: "/favicon-32.png", box: 32 },
  { label: "Favicon 192 (public)", src: "/favicon-192.png", box: 192 },
  { label: "Apple touch (public)", src: "/apple-touch-icon.png", box: 180 },
];

const DebugLogos = () => {
  return (
    <main className="min-h-screen bg-background text-foreground p-8">
      <h1 className="text-3xl font-serif mb-2">Logo Debug</h1>
      <p className="text-sm text-muted-foreground mb-8">
        Internal QA — every generated logo size rendered at native dimensions for crispness verification.
      </p>

      <section className="mb-12">
        <h2 className="text-xl font-serif mb-4">Full lockup</h2>
        <div className="bg-card border rounded-lg p-6 inline-block">
          <img src={logoFull} alt="Prime Projects full lockup" className="max-w-md h-auto" />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-serif mb-4">Mark variants</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {variants.map((v) => (
            <div key={v.label} className="bg-card border rounded-lg p-4 flex flex-col items-center gap-3">
              <div className="bg-near-black/5 rounded p-3 flex items-center justify-center" style={{ minHeight: v.box + 24 }}>
                <img
                  src={v.src}
                  alt={v.label}
                  width={v.box}
                  height={v.box}
                  style={{ width: v.box, height: v.box, objectFit: "contain" }}
                />
              </div>
              <div className="text-xs text-center">
                <div className="font-medium">{v.label}</div>
                <div className="text-muted-foreground">{v.box}px</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-serif mb-4">On dark background</h2>
        <div className="bg-near-black rounded-lg p-8 flex flex-wrap gap-6 items-center">
          <img src={logo96} alt="" width={48} height={48} />
          <img src={logo96} alt="" width={96} height={96} />
          <img src={logo192} alt="" width={192} height={192} />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-serif mb-4">On light background</h2>
        <div className="bg-white border rounded-lg p-8 flex flex-wrap gap-6 items-center">
          <img src={logo96} alt="" width={48} height={48} />
          <img src={logo96} alt="" width={96} height={96} />
          <img src={logo192} alt="" width={192} height={192} />
        </div>
      </section>
    </main>
  );
};

export default DebugLogos;
