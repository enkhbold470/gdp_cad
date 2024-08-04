import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Head>
        <title>GDP - GO Disabled People</title>
        <meta
          name="description"
          content="Solutions for disabled individuals and their families."
        />
      </Head>
      <main className="flex flex-col items-center">
        <h1>GDP</h1>
        <h2>GO Disabled People</h2>

        <iframe
          src="https://go.echo3d.co/vSjM"
          width="500"
          height="500"
        ></iframe>
        <div className="flex">
          <Image src="/1.JPG" alt="Screenshot 1" width={300} height={300} />
          <Image src="/2.png" alt="Screenshot 2" width={300} height={300} />
          <Image src="/3.png" alt="Screenshot 3" width={300} height={300} />
          <Image src="/4.png" alt="Screenshot 4" width={300} height={300} />
          <Image src="/5.png" alt="Screenshot 5" width={300} height={300} />
        </div>

        <section>
          <h3>Solution Ideas</h3>
          <ul>
            <li>
              Development of wheelchair robots to assist paralyzed individuals.
            </li>
            <li>
              Voice command integration for wheelchair robots to enhance
              convenience.
            </li>
            <li>AI features for better user interaction and assistance.</li>
            <li>
              Ergonomic designs to reduce strain on caregivers and family
              helpers.
            </li>
          </ul>
        </section>

        <section>
          <h3>Business Outcomes</h3>
          <ul>
            <li>
              Hospitals will purchase wheelchair robots, leading to reduced
              labor costs.
            </li>
            <li>
              Paralyzed individuals and their families will save money and time,
              and reduce physical strain.
            </li>
            <li>
              Increase in caregiver job satisfaction due to reduced physical
              demands.
            </li>
            <li>
              Enhanced independence and quality of life for paralyzed
              individuals.
            </li>
          </ul>
        </section>

        <section>
          <h3>Business Problem</h3>
          <ul>
            <li>
              High costs and physical strain associated with hiring caregivers
              for paralyzed individuals.
            </li>
            <li>
              Difficulty in moving paralyzed patients without appropriate tools,
              leading to caregiver injuries.
            </li>
            <li>
              Hospitals seeking cost-effective solutions to manage labor
              expenses.
            </li>
          </ul>
        </section>

        <section>
          <h3>Users and Customers</h3>
          <ul>
            <li>Paralyzed individuals and their families.</li>
            <li>Hospitals and healthcare facilities.</li>
            <li>Caregivers and family helpers.</li>
          </ul>
        </section>

        <section>
          <h3>User Benefits</h3>
          <ul>
            <li>Paralyzed individuals gain more independence and mobility.</li>
            <li>
              Families and caregivers can provide care more efficiently and with
              less physical strain.
            </li>
            <li>
              Hospitals can reduce labor costs while ensuring better patient
              care.
            </li>
          </ul>
        </section>

        <section>
          <h3>What&apon;s the Most Important Thing We Need to Learn First?</h3>
          <p>
            The feasibility and cost-effectiveness of developing wheelchair
            robots with the desired features.
          </p>
        </section>

        <section>
          <h3>Hypotheses</h3>
          <ul>
            <li>
              <strong>Hypothesis 1:</strong> We believe that hospitals buying
              and using wheelchair robots will be achieved if hospitals protect
              nurses (caregivers) with wheelchair robots taking over
              patients&apon; weight.
            </li>
            <li>
              <strong>Hypothesis 2:</strong> We believe that saving money for
              paralyzed individuals and saving their family helpers&apon; time
              will be achieved if they rely on caregivers less by using
              wheelchair robots to transfer and move them around.
            </li>
            <li>
              <strong>Hypothesis 3:</strong> We believe that hospitals buying
              and using wheelchair robots will be achieved if hospitals save
              money on labor with wheelchair robots working for them.
            </li>
          </ul>
        </section>

        <section>
          <h3>Riskiest Assumption</h3>
          <p>
            The cost of making such wheelchair robots will be affordable and
            justified by the savings and benefits provided.
          </p>
        </section>

        <section>
          <h3>Experiments to Validate Assumptions</h3>
          <ul>
            <li>
              Conduct market research to estimate the demand and willingness to
              pay for wheelchair robots.
            </li>
            <li>
              Collaborate with mechanical engineers and AI experts to design a
              cost-effective prototype.
            </li>
            <li>
              Pilot the prototype in a few hospitals to gather feedback and
              assess cost savings.
            </li>
          </ul>
        </section>

        <section>
          <h3>Next Steps</h3>
          <ol>
            <li>
              <strong>Research and Development:</strong> Collaborate with
              technical experts to design and prototype wheelchair robots.
            </li>
            <li>
              <strong>Cost Analysis:</strong> Evaluate the manufacturing costs
              and potential savings for users.
            </li>
            <li>
              <strong>Pilot Testing:</strong> Implement the prototype in
              selected hospitals and gather data on performance and user
              satisfaction.
            </li>
          </ol>
        </section>
      </main>
    </div>
  );
}
