type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="flex flex-col items-center gap-3 px-5 text-center">
      <h2 className="text-h3">{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
