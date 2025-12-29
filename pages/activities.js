import Layout from "../components/Layout";

export default function Activities() {
  return (
    <Layout title="Activities | Noormeher Charitable Trust">

      {/* HERO */}
      <section
        className="page-hero"
        style={{ backgroundImage: "url(/images/activities.jpg)" }}
      >
        <div className="overlay">
          <div className="container">
            <h1>Activities</h1>
       
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="container section white-bg">
    
        <hr />

        <div className="grid-2">
          {/* ADMISSION */}
          <div>
            <h3>ADMISSION</h3>

            <ul>
              <li>Age Limit 8 – 14 years</li>
              <li>
                8 - 10 years of age for Norani Qaida and for Noor Meher Urdu
                School.
              </li>
              <li>
                8 - 12 years of age for Nurani Qaida.
              </li>
              <li>
                Upto 14 years of age for Shobe-Hifz (Memorizing of Holy Quran).
              </li>
              <li>
                New Admission start & End on the same day (6th Day of
                Eid-Ul-Fitr).
              </li>
              <li>
                Medical Check-Ups are done after Admission.
              </li>
              <li>
                Adoption Facilitation – No
              </li>
            </ul>
          </div>

          {/* EDUCATION */}
          <div>
            <h3>EDUCATION</h3>
            <p>Education covers the following areas :</p>

            <ul>
              <li>Formal School</li>
              <li>Non-formal School</li>
              <li>Educational Visits</li>
              <li>Inter Islamic school competition</li>
              <li>Basic Computer training</li>
            </ul>
          </div>
        </div>

        <hr />

        {/* PROGRAMME */}
        <h3>PROGRAMME</h3>

        <div className="grid-2">
          <ul>
            <li>Celebrate EID-UL-FITR</li>
            <li>Celebrate EID-AL-ADHA</li>
            <li>
              Weekly Inter Competition known as Bazme Noormeher conducted every
              Thursday Evening.
            </li>
            <li>Education Day & Teachers Day are celebrated.</li>
            <li>Yearly picnic for students.</li>
            <li>Annual function for students.</li>
            <li>Flag hoisting on 26 January (Republic Day).</li>
            <li>Flag hoisting on 15 August (Independence Day).</li>
            <li>Sports Day</li>
          </ul>

          <ul>
            <li>
              Yearly speech competition on Seeratun Nabawi (pbuh).
            </li>
            <li>
              Yearly All Mumbai Islamic Inter School Competition (Musabeqa) for
              Hifz ul Quran, Qirat ul Quran, Hamd-O-Naat, Speech in Urdu /
              English / Hindi / Marathi / Khutbe Jummah / Azaan.
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
