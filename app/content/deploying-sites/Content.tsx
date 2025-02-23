// /content/my-nextjs-workflow.tsx
export default function Content() {
  return (
      <article className="prose lg:prose-xl mx-auto p-6 bg-white rounded-lg w-[92vw] md:w-[50vw]">
          <h1 className="text-3xl font-bold mb-4">Deploying a site</h1>

          <p className="my-6">
            In this post I&apos;m going to show you how to deploy so that you can access them on the web. In reality, there are infinite ways
            of doing this, but in this post I&apos;ll show you three ways of doing this that should get you up to speed:
          </p>
          <ul className="mb-4">
            <li>- Hosting your own http server.</li>
            <li>- Vercel, Netlify, Heroku.</li>
            <li>- Azure, Google cloud and AWS.</li>
          </ul>
          <p className="mb-4">
            Anything beyond this is outside of the scope of this post. 
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-2">Part 1: The world of servers and clients.</h2>
          <p className="mb-4">
            I welcome you to the modern civil world, where 99% of all interaction is done via communication protocols.
            
          </p>
      </article>
  );
}