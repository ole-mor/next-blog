// /content/my-nextjs-workflow.tsx
export default function Content() {
  return (
      <article className="prose lg:prose-xl mx-auto p-6 bg-white rounded-lg w-[50vw]">
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
            The study wend through various fields such as Data/concept Visualization, Education, Medicine, Surgery, Training, Rehabilitation 
            Dentistry, Physics, UX, Transportation, Cultural Heritage and Industry. 
          </p>
          <p className="mb-4">
            In the study there were several important things to note about the modal interactions themselves. 
          </p>
          <ul className="mb-4">
            <li>- Displays are Haptic, VR, AR</li>
            <li>- Interactions are Audio, Gizmo, Tracking or vibration.</li>
            <li>- Tracking happens by analysing Hand movements, body movements, eye movements, object movements or head movements.</li>
          </ul>

      </article>
  );
}