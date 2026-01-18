/* eslint-disable react/prop-types */
import { experiences } from "../../data/experienceData";
const linkLabels = {
  company: "Company",
  live: "Live",
  repo: "Repo",
  linkedin: "LinkedIn",
  caseStudy: "Case Study",
  certificate: "Certificate",
  docs: "Docs",
};
export default function ExperienceSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
            Experience
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Where I Worked & What I Delivered
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            A timeline of real work, responsibilities, and measurable impact.
          </p>
        </div>

        {/* Timeline wrapper */}
        <div className="relative">
          {/* center line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-indigo-200 via-indigo-400 to-indigo-200"></div>

          <div className="space-y-10">
            {experiences.map((exp, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className="relative grid md:grid-cols-2 gap-8 items-start"
                >
                  {/* Dot */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 mt-6">
                    <div className="w-4 h-4 rounded-full bg-indigo-600 ring-4 ring-indigo-100"></div>
                  </div>

                  {/* Left column */}
                  <div
                    className={`${isLeft ? "md:pr-10" : "md:col-start-2 md:pl-10"} `}
                  >
                    <ExperienceCard exp={exp} />
                  </div>

                  {/* Empty column for spacing */}
                  <div
                    className={`${isLeft ? "hidden md:block" : "hidden md:block md:col-start-1"}`}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp }) {
  return (
    <div className="group rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-100 p-6 hover:shadow-[0_18px_45px_rgba(79,70,229,0.15)] transition">
      {/* Top row */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
          <p className="text-gray-600 font-semibold">
            {exp.links?.company ? (
              <a
                href={exp.links.company}
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 hover:underline"
              >
                {exp.company}
              </a>
            ) : (
              exp.company
            )}
            <span className="text-gray-400 font-normal"> • {exp.type}</span>
          </p>
        </div>

        <div className="text-sm text-gray-500 text-right">
          <p className="font-semibold text-gray-700">{exp.period}</p>
          <p>{exp.location}</p>
        </div>
      </div>

      {/* Summary */}
      <p className="mt-4 text-gray-600 leading-relaxed">{exp.summary}</p>

      {/* Highlights */}
      <div className="mt-5">
        <h4 className="text-sm font-bold text-gray-900 mb-2">Key Highlights</h4>
        <ul className="space-y-2">
          {exp.highlights?.map((h, i) => (
            <li key={i} className="flex gap-2 text-gray-700">
              <span className="mt-1 w-2 h-2 rounded-full bg-indigo-600 flex-shrink-0"></span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech */}
      <div className="mt-6 flex flex-wrap gap-2">
        {exp.tech?.map((t, i) => (
          <span
            key={i}
            className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold
                       group-hover:bg-indigo-50 group-hover:text-indigo-700 transition"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="mt-6 flex gap-3 flex-wrap">
        {exp.links &&
          Object.entries(exp.links).map(([key, url]) => (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noreferrer"
              className={
                key === "live"
                  ? "px-4 py-2 rounded-full bg-indigo-600 text-white font-semibold hover:opacity-90 transition"
                  : "px-4 py-2 rounded-full border border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-50 transition"
              }
            >
              {linkLabels[key] || key}
            </a>
          ))}
      </div>
    </div>
  );
}
