/* eslint-disable react/prop-types */
function WorkProjectCard({ project }) {
  const {
    title,
    description,
    company,
    overview,
    features,
    responsibilities,
    stacks,
    impact,
    challenges,
    notes,
    images,
  } = project;

  return (
    <article className="flex flex-col justify-between overflow-hidden rounded-md border border-transparent bg-articleBg text-textColor hover:shadow-lg">
      <div className={`${project.color ?? "bg-transparent"} h-1 w-full`} />

      <header className="p-4">
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold">{title}</h3>
            <div className="mt-1 flex flex-col gap-1 text-sm">
              {company && (
                <span className="text-muted font-medium">{company}</span>
              )}
              {description && <span className="text-muted">{description}</span>}
            </div>
          </div>
          {images && images[0] ? (
            <img
              src={images[0]}
              alt={title}
              className="h-12 w-12 rounded-md object-cover"
            />
          ) : null}
        </div>
      </header>

      <div className="flex flex-1 flex-col justify-between p-4">
        <div className="space-y-4">
          {overview && (
            <div>
              <h4 className="font-semibold">Overview</h4>
              <p className="mt-1 text-sm">{overview}</p>
            </div>
          )}

          {stacks && stacks.length > 0 && (
            <div>
              <h4 className="font-semibold">Technical Stacks</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {stacks.map((s, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-gradient-to-br from-pink-500 to-sky-500 px-3 py-1 text-xs text-white shadow-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {features && features.length > 0 && (
            <div>
              <h4 className="font-semibold">Features</h4>
              <ul className="mt-1 list-inside list-disc text-sm">
                {features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          )}

          {responsibilities && responsibilities.length > 0 && (
            <div>
              <h4 className="font-semibold">Key Responsibilities</h4>
              <ul className="mt-1 list-inside list-disc text-sm">
                {responsibilities.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          )}

          {impact && impact.length > 0 && (
            <div>
              <h4 className="font-semibold">Usage & Impact</h4>
              <ul className="mt-1 list-inside list-disc text-sm">
                {impact.map((it, i) => (
                  <li key={i}>{it}</li>
                ))}
              </ul>
            </div>
          )}

          {challenges && challenges.length > 0 && (
            <div>
              <h4 className="font-semibold">Challenges & Learnings</h4>
              <ul className="mt-1 list-inside list-disc text-sm">
                {challenges.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {notes && (
          <div className="mt-4 border-t border-gray-200/10 pt-3">
            <h4 className="font-semibold">Notes</h4>
            <p className="mt-1 text-sm italic">{notes}</p>
          </div>
        )}
      </div>
    </article>
  );
}

export default WorkProjectCard;
