// /content/my-nextjs-workflow.tsx
export default function Content() {
  return (
      <article className="prose lg:prose-xl mx-auto p-6 bg-white rounded-lg w-[92vw] md:w-[50vw]">
          <h1 className="text-3xl font-bold mb-4">Multimodal interaction</h1>

          <p className="my-6">
            Here I will go through the topic of multimodal interaction and try to compress the topic at hand by
            walking through various literature, and meanwhile take a look at the most recent innovation in the topic.
          </p>
          <p className="mb-4">Here is the tl:dr</p>
          <h2 className="text-lg font-semibold">Literature</h2>
          <ul className="list-disc ml-10">
            <li>Azofeifa et al. (2021) <i>Systematic Review of Multimodal Human-Computer-Interaction</i> Informatics, 9(1), p. 13.</li>
          </ul>
          <p className="mb-4">
          </p>
          <h2 className="text-xl font-bold mb-4">Systematic review of multimodal HCI</h2>
          <p className="mb-4">
            The Article in short tries to suggest that future work should be mixing haptic feedback and Virtual reality together.
            The metastudy went through various literature such as 
          </p>
          <ul>
            <li>- <b>Data/concept</b> (Visualization, Education, VR/AR, )</li>
            <li>- <b>Medicine</b> (surgery, training, rehabilitation, dentistry)</li>
            <li>- <b>Physics</b> (surface, object grasping, fluid mechanics, electromagnitism, dynamic systems, astrophysics, molecular physics)</li>
            <li>- <b>Human factors</b> (user factors, product factors)</li>
            <li>- <b>Transportation</b> (Driving, Flight)</li>
            <li>- <b>Cultural heritage</b> (Museums, Archeology, Tourism)</li>
            <li>- <b>Industry</b> (Manufacturing, Maintainance)</li>
          </ul>
          <p className="mb-4">
            In the study there were several important factors to note about the modal interactions themselves: 
          </p>
          <ul className="mb-4">
            <li>- Displays are Haptic, VR, AR</li>
            <li>- Interactions are Audio, Gizmo, Tracking or vibration.</li>
            <li>- Tracking happens by analysing Hand movements, body movements, eye movements, object movements or head movements.</li>
          </ul>
          <p className="mb-4">
            The coneptual idea of the paper, is pretty straight forward, and are related to their research questions. To understand the semantics of the paper,
            we need to define the ideas of type and domain. <b>Type</b> is literally a synonym here the factors stated above ei. &quot;type of interaction&quot;. Largely speaking, we can
            consolidate this into <i>technologies</i>. Further, we&apos;re looking at temporal adjustments - in different <i>industries</i>, or <b>domains</b>.
            The two final research questions are about research, and the research field.
          </p>
          <p className="mb-4">
            The limitations of the study are
          </p>
          <ul className="list-disc ml-10">
            <li>The clusters, which they found are low density, meaning we need to be aware of the validity</li>
            <li>They tried to figure out if industries and interaction types were good metrics, so the data actually can&apos;t validate the technological applications like what VR headset was used, or what haptic system.</li>
            <li>Training in any specific technology is not a part of the metric. Maybe the culture of a particular industry resists integration?</li>
          </ul>
          <p className="my-4">
            So in conclusion, the review of multimodal interaction could be helpful in
            approaching the different industries and to understand or relate where more research is
            potentially needed.
          </p>

      </article>
  );
}