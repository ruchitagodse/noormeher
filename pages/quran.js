import Layout from "../components/Layout";


export default function QuranPage() {
  return (
    <Layout title="Quran | Noormeher Charitable Trust">

      {/* ===== PAGE BANNER ===== */}
      {/* <section
        className="page-banner"
        style={{
          backgroundImage: "url(/images/quran.jpg)",
        }}
      /> */}

      {/* ===== CONTENT ===== */}
        <section className="container section">
        <div className="grid-layout">

          {/* ===== MAIN CONTENT ===== */}
          <div className="content">

            <nav className="breadcrumb">
         
            </nav>
  
            <h2 className="center">QURANIC VERSES / HADITH</h2>

        
        
      


          

            <h3>QURAN</h3>

            <div className="row">
              <div className="text">
                <p>
                  Believe in Allah and His Messenger (PBUH) and spend (in charity)
                  out of the (substance) whereof He has made you heirs. For those
                  of you who believe and spend (in charity), for them is a great
                  Reward.
                </p>
              </div>

              <div className="image-box">
                <img
                  src="/images/quran1.jpg"
                  alt="Quran Verse"
                  className="img-responsive"
                />
              </div>
            </div>

            <hr />

            <div className="row">
              <div className="image-box">
                <img
                  src="/images/achievements2.jpg"
                  alt="Hadith"
                  className="img-responsive"
                />
              </div>

              <div className="text">
                <h4>Narrated 'Adi bin Hatim heard the Prophet (PBUH) saying:</h4>
                <p>
                  <i>
                    "Save yourself from Hell-fire even by giving half a
                    date-fruit in charity."
                  </i>
                </p>

                <h4>Narrated Abu Huraira:</h4>
                <p>
                  The Prophet (PBUH) said,
                  <i>
                    {" "}
                    "Every day two angels come down from Heaven and one of them
                    says, 'O Allah! Compensate every person who spends in Your
                    Cause,' and the other angel says, 'O Allah! Destroy every
                    miser.'"
                  </i>
                </p>
              </div>
            </div>

          </div>

       

        </div>
      </section>
    </Layout>
  );
}
