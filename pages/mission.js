import Layout from "@/components/Layout";

export default function MissionPage() {
  return (
    <Layout title="Mission | Noormeher Charitable Trust">
      {/* HERO */}
      <section
        className="page-hero"
        style={{ backgroundImage: "url(/images/bmission.JPG)" }}
      >
        <h1>Our Mission</h1>
      </section>

      {/* CONTENT */}
      <section className="container section white-bg">
      
        <p className="italic">
          “Our Mission is to work for the cause and care of CHILDREN of our
          Community and to improve their quality of life.”
        </p>

        <p>
          Noor Meher Charitable Trust, founder of Jamiya Tajveedul Quran, started
          its mission with two children in the year 2001. Today in 2025, we are
          serving 165 children.
        </p>

        <p>
          Over the years, we have succeeded in moulding children through
          education, personality development, and stage exposure—helping them
          grow into professionals in Medical and Engineering fields.
        </p>

        <p>
          There has been a tremendous change in attitude, personality,
          discipline, concentration, and leadership qualities. Children now take
          keen interest in their education and personal growth.
        </p>

        <p>
          Our aim is to nurture God-gifted potential in Muslim orphan and poor
          children so that, Insha’Allah, they build a better future and uplift
          the next generation. AAMEEN.
        </p>

        <blockquote>
          “Help us generously in our work by leading the poor and illiterate out
          of darkness and ignorance into the light and Noor of Islam. Kindly
          assist us for the better future of orphans and the needy. Almighty
          Allah will reward you in this world and hereafter. AAMEEN.”
        </blockquote>
      </section>
    </Layout>
  );
}
