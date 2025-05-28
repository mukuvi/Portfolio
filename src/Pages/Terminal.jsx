import React from "react";

const projects = [
  {
    name: "CafeSynca",
    url: "https://github.com/mukuvi/cafesynca",
    tech: ["ReactJS", "Node.js", "MongoDB", "Express"],
    desc: "creating a seamless online experience that mirrors the warmth and comfort of our café, one sip at a time.",
  },
  {
    name: "Ecosense-Ai",
    url: "https://github.com/mukuvi/Ecosense-Ai",
    tech: ["Javascript", "Node.js", "Gemini 2.0 Flash", "MongoDB"],
    desc: "mobile application designed to address urban waste pollution challenges in Kenyan cities.",
  },
  {
    name: "ARN.IO",
    url: "https://github.com/mukuvi/ARN.IO",
    tech: ["React Native", "Expo", "Firebase"],
    desc: "A learning app that help learners track their educational journey.",
  },
];

const skills = [
  "JavaScript",
  "TypeScript",
  "ReactJS",
  "NextJS",
  "React Native",
  "Node.js",
  "Python",
  "Bash Scripting",
  "Block Chain",
  "MongoDB",
  "Firebase",
];

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/mukuvi",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/james-ngandu",
  },
];

export default function App() {
  return (
    <>
      <style>{`
      body {
        background: #181818;
        color: #e5e5e5;
        font-family: "Fira Mono", "Consolas", "Menlo", monospace;
        margin: 0;
        min-height: 100vh;
        padding: 0;
      }
      .terminal {
        max-width: 780px;
        margin: 40px auto 0 auto;
        background: #242424;
        border-radius: 8px;
        box-shadow: 0 4px 30px #000a;
        padding: 32px;
        position: relative;
        overflow: auto;
        animation: fadeInMain 1.1s cubic-bezier(.48,0,.56,1.01);
      }
      @keyframes fadeInMain {
        from { opacity: 0; transform: translateY(30px);}
        to { opacity: 1; transform: translateY(0);}
      }
      .terminal-header {
        display: flex;
        align-items: center;
        margin-bottom: 18px;
        opacity: 0;
        animation: fadeInSection 0.6s 0.05s forwards;
      }
      .terminal-dots {
        display: flex;
        gap: 8px;
      }
      .dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        display: inline-block;
      }
      .dot.red {
        background: #ff5f56;
      }
      .dot.yellow {
        background: #ffbd2e;
      }
      .dot.green {
        background: #27c93f;
      }
      .terminal-title {
        flex: 1;
        text-align: center;
        color: #aaa;
        font-size: 1.1em;
        letter-spacing: 1px;
        font-weight: bold;
        user-select: none;
      }
      .prompt {
        color: #00ff00;
        font-weight: bold;
        letter-spacing: 1px;
        margin-right: 6px;
        opacity: 0;
        animation: fadeInPrompt 0.7s 0.07s forwards;
      }
      @keyframes fadeInPrompt {
        from {opacity: 0;}
        to {opacity: 1;}
      }
      a {
        color: #00e0ff;
        text-decoration: none;
        transition: color 0.2s, box-shadow 0.2s;
      }
      a:hover {
        color: #fff;
        text-decoration: underline;
        box-shadow: 0 2px 12px #00e0ff44;
      }
      .section {
        margin-top: 32px;
        opacity: 0;
        transform: translateY(24px);
        animation: fadeInSection 1s forwards;
      }
      .section:nth-of-type(1) { animation-delay: 0.22s; }
      .section:nth-of-type(2) { animation-delay: 0.34s; }
      .section:nth-of-type(3) { animation-delay: 0.46s; }
      .section:nth-of-type(4) { animation-delay: 0.58s; }
      @keyframes fadeInSection {
        from { opacity: 0; transform: translateY(24px);}
        to { opacity: 1; transform: translateY(0);}
      }
      .section-title {
        color: #ffb86c;
        font-size: 1.1em;
        margin-bottom: 10px;
        letter-spacing: 1px;
        font-weight: bold;
        text-shadow: 0 2px 10px #0008;
        opacity: 0;
        animation: fadeInSectionTitle 0.8s 0.25s forwards;
      }
      @keyframes fadeInSectionTitle {
        from {opacity: 0;}
        to {opacity: 1;}
      }
      .about-list,
      .project-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .about-list li,
      .project-list li {
        margin-bottom: 10px;
        font-size: 1.02em;
      }
      .about-list li {
        opacity: 0;
        animation: fadeInItem 0.7s forwards;
      }
      .about-list li:nth-child(1) {animation-delay: 0.28s;}
      .about-list li:nth-child(2) {animation-delay: 0.36s;}
      .about-list li:nth-child(3) {animation-delay: 0.44s;}
      .about-list li:nth-child(4) {animation-delay: 0.52s;}
      .about-list li:nth-child(5) {animation-delay: 0.60s;}
      .about-list li:nth-child(6) {animation-delay: 0.68s;}
      .about-list li:nth-child(7) {animation-delay: 0.76s;}
      @keyframes fadeInItem {
        from {opacity: 0; transform: translateX(-20px);}
        to {opacity: 1; transform: translateX(0);}
      }
      .project-list li {
        background: #23272e;
        border-radius: 7px;
        padding: 18px 18px 12px 18px;
        margin-bottom: 18px;
        box-shadow: 0 2px 12px #0ff2, 0 1px 2px #0004;
        position: relative;
        overflow: hidden;
        transition: transform 0.22s, box-shadow 0.23s, border-color 0.18s;
        border-left: 4px solid #00ffbb;
        opacity: 0;
        animation: fadeInProject 1s forwards;
      }
      .project-list li:nth-child(1) {animation-delay: 0.4s;}
      .project-list li:nth-child(2) {animation-delay: 0.5s;}
      .project-list li:nth-child(3) {animation-delay: 0.6s;}
      @keyframes fadeInProject {
        from {opacity: 0; transform: translateY(32px) scale(0.97);}
        to {opacity: 1; transform: translateY(0) scale(1);}
      }
      .project-list li:hover {
        transform: translateY(-3px) scale(1.025);
        box-shadow: 0 6px 32px #00ffe055, 0 2px 8px #0008;
        border-left: 4px solid #00ccff;
      }
      .tech-list {
        display: inline-block;
        background: #363636;
        color: #80ffea;
        padding: 2px 8px;
        border-radius: 6px;
        font-size: 0.98em;
        margin-left: 8px;
        margin-right: 8px;
        letter-spacing: 0.5px;
        box-shadow: 0 1px 4px #0002;
        transition: background 0.2s, color 0.2s;
      }
      .project-list li:hover .tech-list {
        background: #242c3b;
        color: #00ffe0;
      }
      .footer {
        margin-top: 40px;
        text-align: center;
        color: #555;
        font-size: 0.95em;
        letter-spacing: 1px;
        padding-bottom: 10px;
        opacity: 0;
        animation: fadeInFooter 1s 1.1s forwards;
      }
      @keyframes fadeInFooter {
        from {opacity: 0; transform: translateY(16px);}
        to {opacity: 1; transform: translateY(0);}
      }
      @media (max-width: 600px) {
        .terminal {
          padding: 16px;
          max-width: 98vw;
        }
        .project-list li {
          padding: 14px 8px 9px 10px;
        }
      }
      /* Terminal cursor effect */
      .blinking-cursor {
        font-weight: bold;
        color: #00ff00;
        animation: blink 1s steps(1) infinite;
      }
      @keyframes blink {
        0%,
        100% {
          opacity: 1;
        }
        50% {
          opacity: 0.1;
        }
      }
      `}</style>

      <div className="terminal">
        <div className="terminal-header">
          <div className="terminal-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <span className="terminal-title">mukuvi@portfolio: ~</span>
          <div style={{ width: 32 }}></div>
        </div>

        {/* About Section */}
        <div>
          <span className="prompt">mukuvi@portfolio:~$</span> whoami
          <ul className="about-list" style={{ marginTop: 8 }}>
            <li>
              👋 Hi, I'm <b>mukuvi</b>, a passionate software developer.
            </li>
            <li>
              💻 Currently contributing to
              <span className="tech-list">ReactJS</span> and
              <span className="tech-list">NextJS</span> projects.
            </li>
            <li>
              🚀 Excited to be part of the
              <span className="tech-list">React</span> community!
            </li>
            <li>
              👯 Open to collaboration on <span className="tech-list">web</span>{" "}
              and
              <span className="tech-list">mobile app</span> development.
            </li>
            <li>
              🌱 Building cool native apps using
              <span className="tech-list">React Native</span>.
            </li>
            <li>
              💬 Love open source. Let's discuss collaboration and contribution!
            </li>
            <li>
              ⚡ Fun fact: Music and coding in motion! 🎶💻 Harmonizing beats
              and algorithms.
            </li>
          </ul>
        </div>

        <div className="section">
          <span className="prompt">mukuvi@portfolio:~$</span> ls ./projects
          <div className="section-title">Projects</div>
          <ul className="project-list">
            {projects.map((p) => (
              <li key={p.name}>
                <b>
                  <a href={p.url} target="_blank" rel="noopener noreferrer">
                    {p.name}
                  </a>
                </b>
                <div>
                  {p.tech.map((t) => (
                    <span key={t} className="tech-list">
                      {t}
                    </span>
                  ))}
                </div>
                <span style={{ color: "#cfc" }}>{p.desc}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="section">
          <span className="prompt">mukuvi@portfolio:~$</span> cat ./skills.txt
          <div className="section-title">Technologies & Skills</div>
          <div>
            {skills.map((skill) => (
              <span className="tech-list" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="section">
          <span className="prompt">mukuvi@portfolio:~$</span> echo "Contact &
          Links"
          <div className="section-title">Find me online</div>
          <div>
            {socials.map((s, i) => (
              <React.Fragment key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer">
                  {s.name}
                </a>
                {i < socials.length - 1 && " | "}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="footer">
          <span className="prompt">mukuvi@portfolio:~$</span>
          <span className="blinking-cursor">█</span> <br />
          &copy; {new Date().getFullYear()}&mdash;
          <a href="https://www.mukuvi.me">mukuvi</a> &mdash; all rights reserved
        </div>
      </div>
    </>
  );
}
