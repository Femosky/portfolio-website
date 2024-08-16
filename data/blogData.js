export const blogPosts = [
    {
        id: 1,
        title: 'How to Deploy Your First Website on Vercel: A Comprehensive Guide',
        image: '/blog1.png',
        link: 'https://medium.com/@sonamgour17/how-to-deploy-your-first-website-on-vercel-a-comprehensive-guide-971662c2b0f8',
        preview: 'In today’s digital landscape, deploying a website is an essential skill for developers...',
        content: (
            <>
                <p className="mb-4">
                    <strong>Introduction</strong>
                    <br />
                    In today’s digital landscape, deploying a website is an essential skill for developers, whether
                    you’re working on personal projects or professional applications. Vercel, a cloud platform built for
                    frontend developers, offers a seamless experience for deploying websites, particularly those built
                    with frameworks like Next.js, React, and others. This guide walks you through every step of
                    deploying your first website on Vercel, from setting up your project to managing custom domains.
                </p>
                <p className="mb-4">
                    <strong>Why Choose Vercel?</strong>
                    <br />
                    Vercel stands out for its simplicity, speed, and robust features tailored to modern web development
                    needs. Whether you’re deploying static sites, dynamic applications, or serverless functions, Vercel
                    provides a straightforward deployment process with automatic scaling, previews, and custom domains.
                </p>
                <p className="mb-4">
                    <strong>Step 1: Setting Up Your Project</strong>
                    <br />
                    Before diving into deployment, you need a project ready to go. If you don’t have one yet, you can
                    create a simple static site or use a framework like Next.js to build something more dynamic. Here’s
                    how to set up a basic Next.js project:
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li>
                        Create a New Next.js App: <code>npx create-next-app@latest my-vercel-project</code>
                    </li>
                    <li>
                        Run the Development Server: <code>npm run dev</code>
                    </li>
                    <li>
                        Customize Your Project: Make any necessary customizations to your project. This might include
                        adding pages, components, or styling to match your vision.
                    </li>
                </ul>
                <p className="mb-4">
                    <strong>Step 2: Preparing for Deployment</strong>
                    <br />
                    Before deploying, ensure your project is production-ready. This involves the following steps:
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li>
                        Build Your Project: <code>npm run build</code>
                    </li>
                    <li>
                        Test Locally: <code>npm start</code>
                    </li>
                    <li>Push to GitHub: Commit and push your project to a repository.</li>
                </ul>
                <p className="mb-4">
                    <strong>Step 3: Deploying to Vercel</strong>
                    <br />
                    Now that your project is ready, it’s time to deploy it on Vercel. Follow these steps:
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li>
                        Sign Up and Log In: Visit{' '}
                        <a href="https://vercel.com" className="text-blue-600">
                            vercel.com
                        </a>{' '}
                        and sign up or log in.
                    </li>
                    <li>
                        Create a New Project: Select “Import Git Repository” and choose the repository that contains
                        your project.
                    </li>
                    <li>Configure Build Settings: Review the build settings.</li>
                </ul>
                <p className="mb-4">
                    <strong>Conclusion</strong>
                    <br />
                    Deploying a website on Vercel is a streamlined process that simplifies the complexities of modern
                    web development. By following this guide, you can confidently deploy your first project and leverage
                    Vercel’s powerful features to manage and scale your web presence.
                </p>
            </>
        ),
    },
    {
        id: 2,
        title: 'Building APIs with FastAPI: A Step-by-Step Guide for Mac and Windows',
        image: '/fast.png',
        link: 'https://medium.com/@sonamgour17/building-apis-with-fastapi-a-step-by-step-guide-for-mac-and-windows-5194ffc5ea1f',
        preview: 'FastAPI is a modern, high-performance web framework for building APIs with Python...',
        content: (
            <>
                <p className="mb-4">
                    <strong>Introduction</strong>
                    <br />
                    FastAPI is a modern, high-performance web framework for building APIs with Python. It stands out for
                    its speed, simplicity, and automatic interactive documentation. Whether you’re using Mac or Windows,
                    this guide will walk you through setting up FastAPI, creating a basic API, and exploring its
                    features.
                </p>
                <p className="mb-4">
                    <strong>Setting Up FastAPI</strong>
                    <br />
                    To begin, you'll need to set up FastAPI. First, ensure you have Python installed. Then, install
                    FastAPI and Uvicorn (the ASGI server) using pip:
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4">pip install fastapi[all] uvicorn</pre>
                <p className="mb-4">
                    <strong>Creating a Basic API</strong>
                    <br />
                    Once installed, you can create a simple API:
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4">
                    {`from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}`}
                </pre>
                <p className="mb-4">
                    <strong>Testing the API</strong>
                    <br />
                    Start the server and test your API by navigating to `http://127.0.0.1:8000`:
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4">uvicorn main:app --reload</pre>
                <p className="mb-4">
                    <strong>Conclusion</strong>
                    <br />
                    FastAPI is a modern, high-performance web framework for building APIs with Python. Known for its
                    speed, simplicity, and automatic interactive documentation, FastAPI has quickly become a favorite
                    among developers.
                </p>
            </>
        ),
    },
    {
        id: 3,
        title: 'Creating Your First Next.js Application: A Step-by-Step Guide',
        image: '/next.png',
        link: 'https://medium.com/@sonamgour17/creating-your-first-next-js-application-a-step-by-step-guide-6188577f339a',
        preview: 'Next.js is a popular framework for React that makes building fast, modern web applications easier...',
        content: (
            <>
                <p className="mb-4">
                    <strong>Introduction</strong>
                    <br />
                    Next.js is a popular framework for React that makes building fast, modern web applications easier.
                    It provides powerful features like server-side rendering (SSR) and static site generation (SSG). In
                    this guide, we’ll walk you through the simple steps to set up and create your first Next.js app
                    using Visual Studio Code.
                </p>
                <p className="mb-4">
                    <strong>Prerequisites</strong>
                    <br />
                    Before starting, make sure you have the following installed:
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li>Node.js: Required for managing dependencies. Download it from nodejs.org.</li>
                    <li>Visual Studio Code: An IDE to write and manage your code.</li>
                </ul>
                <p className="mb-4">
                    <strong>Creating Your First Next.js Application</strong>
                    <br />
                    Once your environment is set up, you can create your first Next.js app:
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4">npx create-next-app my-nextjs-app</pre>
                <p className="mb-4">
                    <strong>Running the Development Server</strong>
                    <br />
                    Navigate to your project directory and start the development server:
                </p>
                <pre className="bg-gray-100 p-4 rounded mb-4">npm run dev</pre>
                <p className="mb-4">
                    <strong>Conclusion</strong>
                    <br />
                    Congratulations on creating your first Next.js application! In this guide, we covered setting up a
                    Next.js project, creating pages, adding navigation, and fetching data. Next.js offers many advanced
                    features like API routes, image optimization, and internationalization.
                </p>
            </>
        ),
    },
];
