// /content/my-nextjs-workflow.tsx
export default function Content() {
  return (
      <article className="prose lg:prose-xl mx-auto p-6 bg-white rounded-lg w-[92vw] md:w-[50vw]">
          <h1 className="text-3xl font-bold mb-4">Nextjs: From zero to hero💪</h1>
          <div className="border-4 px-4 pb-6">
          <h4 className="text-lg font-semibold mt-4">TL:DR</h4>
          <ul>
            <li>- bun create next-app myproject --template typescript</li>
            <li>- mkdir components, api, utils, hooks</li>
            <li>- git, vercel</li>
            <li>- bun install motion next-themes</li>
            <li>- bunx --bun shadcn@latest add button + more</li>
            <li>- integrating api calls (firebase, clerk)</li>
            <li>- be a hero💪</li>
          </ul>
          </div>
          <p className="my-6">
            Hi, I will in this article walk you through all the steps so that you can
            create your very own Nextjs web-app. The goal of this walkthrough is to help
            you through the processes that I stumbled upon, and give you the learnings, so that
            you don&apos;t have to make the same mistakes as I did during my progression. 

            Building web-applications is a great skill to have in 2025. Let&apos;s go!
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-2">Step 1: Setting Up Your Project</h2>
          <p className="mb-4">
            In the first part here, we are assuming that you the reader have zero knowledge. Here
            we will learn to:
            - Set up environment.
            - Understanding npm/pnpm/bun
            - Common words that we use.

            If you feel like you have a pretty good understanding of these things, you should move to
            Step 2.
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-2">Setting Up Your Environment</h3>
          <p className="mb-4">
            Okay, so to start with we need to create the environment. To do this we&apos;re going to use
            an Integrated Developmnet Environment, or IDE for short. There are many different ones, 
            if you go to the <a href="https://survey.stackoverflow.co/2024/technology/">stack overflow developer survey</a>
            and scroll down, you will see the section integrated development environment. You will see 
            that on the top is visual studio code (VScode). This is an IDE and maintained by microsoft. For web-development
            I personally think that VScode is the best. Visual Studio is the industry standard for programming C++
            which has been the most used language in industry. PyCharm, well I personally don&apos;t see the point in it.
            If you&apos;re new to IDEs I would stay as far away from Vim and Neovim as possible, these are for 10x
            developers that have 200wpm, exclusively. Let&apos;s just use VScode. 
          </p>
          <p className="mb-4">
            So, first you have to download [<a href="https://code.visualstudio.com/">VScode</a>].
          </p>
          <p className="mb-4">
            Next, you need to download npm. I personally use bun. It makes very little difference in the beginning.
            I&apos;ve seen people use pnpm as well. These dictate which packagemanagers that are being used, as well
            as how the server runtime is handled. Both npm and pnpm run on the nodejs runtime, while bun
            uses its own. I think we&apos;re going to go more towards bun in the future, but it really makes little
            difference for now. 
            NPM: Go [<a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm">HERE</a>].
            BUN: Go [<a href="https://bun.sh/">HERE</a>].

            Once you have your environment ready. We&apos;re ready to move to the next part.

          </p>
          <p className="mb-4">Oh why do we need npm? We don&apos;t if we just wanna use html, css and js, but in order to use the nextjs framework 
            we do have to use these tools. I&apos;ve created a bunch of regular web applications using this &quot;oldschool&quot; approach, and 
            the main problem is that especially if you&apos;re in the early stages of just wanting to experiment, you will stumble upon problems
            that are already solved in the industry. There is nothing stopping you from just using htmx and go or wasm through rocket or whatever, but the web is a shitshow anyways
            so why bother. Most browsers are just chromium wrappers, and we know from history that google 
            have no idea what they are doing.</p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2">Setting Up the Project</h3>
          <p className="mb-4">
            Ok before we end this step, we&apos;re going to set up our project. 
            to do this we open our terminal/powershell. 
          </p>
          <code>
            bun create next-app myproject --template typescript
          </code>
          <p>or</p>
          <code className="mb-4">
            npm create-next-app myproject --template typescript
          </code>
          <p className="my-4">Then just blindly press enter on all the options that appear. 
            If you now type <code>ls</code> in the terminal (<code>dir</code> on windows), you should see your project in there.
            Now we&apos;re going to remove this project. To do this. We type <code>rm -rf myproject</code> or <code>Remove-Item -Recurse -Force</code> on windows.
            You&apos;ve probably seen rm -rf as a meme on the internet, and this is where it is from.
            Luckily for us, as long as we don&apos;t do <code>sudo rm -rf</code> / or <code>Remove-Item -Recurse -Force /</code> from a powershell shell ran as administrator, we should be able to find our deleted files in the bin.
            It is good practice going forward to organize developement on your computer. Do <code>cd ~</code>.
            This will take you to your home directory. Here you should type <code>mkdir dev</code>. This will create a folder in your home directory. Type <code>ls </code>
            to see the directory. Now do <code> cd dev</code> before we create our next app again in here.
          </p>
          <code>
            bun create next-app myproject --template typescript
          </code>
          <p>or</p>
          <code className="mb-4">
            npm create-next-app myproject --template typescript
          </code>
          <p className="my-4">Why did I tell you to do this? It is good to know how to use the terminal.</p>
          <p className="mb-4">After having finished creating myproject again, do <code>cd myproject </code></p>

          <p className="mb-4">If you&apos;re using windows, you can skip this part. So before we start programming, you should set up one final thing. Here, I want you to just tunnel vision and just look
            at what I am telling you. The VScode IDE is kind of bloated and you don&apos;t need to know everything (I certaintly don&apos;t).
            Press Ctrl+Shift+P to open the command palette
            Type <code>shell command</code> and select &quot;Shell Command: Install &apos;code&apos; command in PATH&quot;
          </p>

          <p className="mb-4">[Continue] Go back into the terminal and type <code>code .</code>
            This should open VScode and should show the files your project.
          </p>
          

          <h2 className="text-2xl font-semibold mt-6 mb-2">Step 2: Creating Pages</h2>
          <p className="mb-4">
            In your terminal, you should now create the node or bun runtime. You acchieve this by doing <code>npm run dev</code> or <code>bun run dev</code>
            Setting up the server can take some time based on your system. As the server starts running, you can now open your browser and type in <a href="https://localhost:3000">localhost:3000</a>. 
            This will take you to the nextjs start page.
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-2">Simplifying the process going forward</h3>
          <p className="mb-4">
            In the next few steps we&apos;re going to remove the basic user interface and then add some important parts to the program. 
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Step 3: Adding Components</h2>
          <p className="mb-4">
              You can create reusable components in your application by creating a <code className="font-mono">components</code> directory. For instance, you can create a <code className="font-mono">Header</code> component that can be used across multiple pages.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-2">Step 4: Fetching Data</h2>
          <p className="mb-4">
              Next.js provides several methods for fetching data, including <code className="font-mono">getStaticProps</code> and <code className="font-mono">getServerSideProps</code>. These methods allow you to fetch data at build time or request time, respectively.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-2">Step 5: Deploying Your Application</h2>
          <p className="mb-4">
              Once your application is ready, you can deploy it using platforms like Vercel, which is the creator of Next.js. Simply connect your GitHub repository, and Vercel will handle the deployment for you.
          </p>
          <p className="mb-4">
              With these steps, you can build a robust Next.js application that is both performant and scalable. Happy coding!
          </p>
      </article>
  );
}