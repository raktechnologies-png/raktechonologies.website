// Navy band of what we build — pure CSS marquee, no JavaScript.
// The list is rendered twice so the -50% loop is seamless; the copy is
// hidden from screen readers so they hear the list once.
const ITEMS = [
  "Websites",
  "Online Stores",
  "Custom Software",
  "CRM Systems",
  "Business Automation",
  "AI Integration",
  "Power BI Dashboards",
  "SEO",
];

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {ITEMS.map((item) => (
        <li key={item} className="flex items-center">
          <span className="font-display font-700 text-cloud text-lg md:text-2xl tracking-tight whitespace-nowrap px-5 md:px-8">
            {item}
          </span>
          <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0 text-slate-400">
            <path fill="currentColor" d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
          </svg>
        </li>
      ))}
    </ul>
  );
}

export default function ServicesTicker() {
  return (
    <section aria-label="What we build" className="bg-navy dark:bg-navy-deep border-y border-white/5 py-5 md:py-7 overflow-hidden">
      <div className="marquee-track flex w-max">
        <Row />
        <Row hidden />
      </div>
    </section>
  );
}
