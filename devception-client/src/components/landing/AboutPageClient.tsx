'use client';
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useCinematic } from './CinematicProvider';

const PILLARS = [
  {
    icon: '💻',
    title: 'REAL-TIME COLLABORATIVE CODING',
    body: 'Developers collaborate live in a shared Monaco Editor backed by Yjs CRDTs. Multiple cursors, synchronized state, and live algorithmic challenges create a high-velocity programming environment.',
    color: '#2563eb',
  },
  {
    icon: '🕵️',
    title: 'SECRET SABOTAGE & DECEPTION',
    body: 'One player is secretly designated as the Imposter. Their mission: inject subtle syntax and logic bugs, trigger screen blurs, and sabotage the build without blowing their cover.',
    color: '#dc2626',
  },
  {
    icon: '🚨',
    title: 'EMERGENCY TRIBUNALS & VOTING',
    body: 'Spot a suspicious commit or a broken test? Slam the Emergency Meeting button to halt coding, debate in live chat, scrutinize diffs, and vote to eject the suspected saboteur.',
    color: '#ca8a04',
  },
  {
    icon: '⚡',
    title: 'SHARPEN REAL CODE REVIEW SKILLS',
    body: 'Under the disguise of a party game, players practice lightning-fast code review, AST inspection, debugging under pressure, and verbal defense of their code.',
    color: '#16a34a',
  },
];

const GAME_STEPS = [
  {
    step: '01',
    title: 'ASSEMBLE THE SQUAD',
    desc: '3 to 8 players join a room via a unique room code. Roles are distributed privately by the server over secure websockets—nobody knows who the imposter is.',
    badge: 'LOBBY PHASE',
    color: '#2563eb',
  },
  {
    step: '02',
    title: 'RACE TO SOLVE TASKS',
    desc: 'Developers work together on programming challenges (array operations, algorithmic searches, data parsing) to push the shared completion bar to 100%.',
    badge: 'CODING PHASE',
    color: '#16a34a',
  },
  {
    step: '03',
    title: 'COVERT SABOTAGE',
    desc: 'The Imposter triggers cooldown abilities: flipping comparators (=== to !==), shifting loop bounds, injecting off-by-one bugs, or blurring a teammate’s IDE.',
    badge: 'SABOTAGE PHASE',
    color: '#dc2626',
  },
  {
    step: '04',
    title: 'EMERGENCY MEETING & VERDICT',
    desc: 'When an anomaly is flagged, an emergency meeting is called. Players debate, review the activity log, and cast votes. Eject the imposter to win!',
    badge: 'VOTING PHASE',
    color: '#ca8a04',
  },
];

export default function AboutPageClient() {
  const { triggerCinematic } = useCinematic();

  const handlePlayNow = () => {
    triggerCinematic('/lobby');
  };

  return (
    <div style={{ background: '#C5C0B7', minHeight: '100vh', color: '#121214' }}>
      <Navbar />

      {/* ─── Hero: The Main Idea ─── */}
      <section
        className="pixel-bg"
        style={{
          paddingTop: 120,
          paddingBottom: 70,
          textAlign: 'center',
          borderBottom: '3px solid rgba(18,18,20,0.12)',
        }}
      >
        <div className="section-container" style={{ maxWidth: 900 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>
            ▶ THE CORE IDEA
          </div>

          <h1
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: 'clamp(20px, 3.2vw, 36px)',
              color: '#121214',
              lineHeight: 1.5,
              marginBottom: 24,
            }}
          >
            WHAT IS DEVCEPTION?
          </h1>

          <div
            className="game-panel"
            style={{
              padding: 'clamp(20px, 4vw, 32px)',
              background: '#DAD5CC',
              border: '3px solid #121214',
              boxShadow: '6px 6px 0 #121214',
              margin: '0 auto 28px',
              textAlign: 'left',
              maxWidth: 760,
            }}
          >
            <p
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 'clamp(15px, 2.2vw, 18px)',
                lineHeight: 1.8,
                color: '#121214',
                margin: '0 0 16px',
                fontWeight: 700,
              }}
            >
              Devception is an online multiplayer social deduction coding game inspired by{' '}
              <span style={{ color: '#C84B31' }}>Among Us</span> and real-time pair programming.
            </p>
            <p
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 15,
                lineHeight: 1.85,
                color: '#333230',
                margin: 0,
              }}
            >
              Players collaborate on live coding challenges inside a shared, synchronized Monaco
              editor while secretly assigned imposters attempt to sabotage the codebase and sow chaos
              without getting caught.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={handlePlayNow}
              className="pixel-btn pixel-btn-blue"
              style={{ fontSize: 11, padding: '12px 24px', cursor: 'pointer' }}
            >
              ▶ PLAY NOW // ENTER ARENA
            </button>
            <a
              href="/#live-demo"
              className="pixel-btn pixel-btn-light"
              style={{ fontSize: 11, padding: '12px 24px', textDecoration: 'none' }}
            >
              WATCH LIVE DEMO
            </a>
          </div>
        </div>
      </section>

      {/* ─── Two Factions Breakdown ─── */}
      <section style={{ padding: '80px 0', background: '#DAD5CC', borderBottom: '3px solid rgba(18,18,20,0.12)' }}>
        <div className="section-container" style={{ maxWidth: 1000 }}>
          <div className="section-label">// THE TWO ROLES</div>
          <h2
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: 'clamp(14px, 2vw, 22px)',
              color: '#121214',
              lineHeight: 1.6,
              marginBottom: 40,
            }}
          >
            CHOOSE YOUR ALLEGIANCE
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}>
            {/* Developer Card */}
            <div
              className="game-panel"
              style={{
                padding: 32,
                border: '3px solid #16a34a',
                boxShadow: '6px 6px 0 #16a34a',
                background: '#ffffff',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <span style={{ fontSize: 32 }}>🧑‍💻</span>
                <div>
                  <div
                    style={{
                      fontFamily: "'Press Start 2P', monospace",
                      fontSize: 12,
                      color: '#16a34a',
                      marginBottom: 4,
                    }}
                  >
                    THE DEVELOPERS
                  </div>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: '#78716c' }}>
                    GOOD CODERS // THE CREW
                  </span>
                </div>
              </div>

              <ul
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 13,
                  lineHeight: 1.9,
                  color: '#44403c',
                  paddingLeft: 20,
                  margin: 0,
                }}
              >
                <li>Collaborate in the shared real-time Monaco code editor.</li>
                <li>Implement functions, fix broken algorithms, and pass unit tests.</li>
                <li>Monitor git-style live activity feeds for suspicious modifications.</li>
                <li>Call Emergency Meetings to accuse and vote off suspected saboteurs.</li>
                <li><strong>Win Condition:</strong> Complete all tasks to 100% or eject all imposters!</li>
              </ul>
            </div>

            {/* Imposter Card */}
            <div
              className="game-panel"
              style={{
                padding: 32,
                border: '3px solid #dc2626',
                boxShadow: '6px 6px 0 #dc2626',
                background: '#ffffff',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <span style={{ fontSize: 32 }}>🕵️</span>
                <div>
                  <div
                    style={{
                      fontFamily: "'Press Start 2P', monospace",
                      fontSize: 12,
                      color: '#dc2626',
                      marginBottom: 4,
                    }}
                  >
                    THE IMPOSTER
                  </div>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: '#78716c' }}>
                    SABOTEUR // THE INFILTRATOR
                  </span>
                </div>
              </div>

              <ul
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 13,
                  lineHeight: 1.9,
                  color: '#44403c',
                  paddingLeft: 20,
                  margin: 0,
                }}
              >
                <li>Received covertly via private unicast websocket notification.</li>
                <li>Inject believable syntax & logic bugs on cooldown timers.</li>
                <li>Flip operators (e.g. `===` into `!==`) and introduce off-by-one errors.</li>
                <li>Trigger tactical screen blurs to blind and disorient innocent coders.</li>
                <li><strong>Win Condition:</strong> Prevent 100% completion or survive voting rounds!</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── How A Match Works (Game Loop) ─── */}
      <section style={{ padding: '80px 0', borderBottom: '3px solid rgba(28,25,23,0.1)' }}>
        <div className="section-container" style={{ maxWidth: 1000 }}>
          <div className="section-label">⚡ THE MATCH FLOW</div>
          <h2
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: 'clamp(14px, 2vw, 22px)',
              color: '#1c1917',
              lineHeight: 1.6,
              marginBottom: 40,
            }}
          >
            HOW A ROUND UNFOLDS
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            {GAME_STEPS.map((s) => (
              <div
                key={s.step}
                className="game-panel"
                style={{
                  padding: 24,
                  background: '#faf8f4',
                  border: `3px solid ${s.color}`,
                  boxShadow: `4px 4px 0 ${s.color}`,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                    <span
                      style={{
                        fontFamily: "'Press Start 2P', monospace",
                        fontSize: 18,
                        color: s.color,
                      }}
                    >
                      {s.step}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Press Start 2P', monospace",
                        fontSize: 7,
                        padding: '3px 6px',
                        background: '#f0ece2',
                        border: '1px solid #1c1917',
                        color: '#1c1917',
                      }}
                    >
                      {s.badge}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "'Press Start 2P', monospace",
                      fontSize: 9,
                      color: '#1c1917',
                      lineHeight: 1.6,
                      marginBottom: 12,
                    }}
                  >
                    {s.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 12,
                      lineHeight: 1.7,
                      color: '#44403c',
                      margin: 0,
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pillars of Design ─── */}
      <section style={{ padding: '80px 0', background: '#faf8f4' }}>
        <div className="section-container" style={{ maxWidth: 1000 }}>
          <div className="section-label">★ CORE ARCHITECTURE</div>
          <h2
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: 'clamp(14px, 2vw, 22px)',
              color: '#1c1917',
              lineHeight: 1.6,
              marginBottom: 40,
            }}
          >
            BUILT FOR REAL ENGINEERING SKILLS
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {PILLARS.map((p, i) => (
              <div
                key={i}
                className="game-panel"
                style={{
                  padding: 24,
                  borderColor: p.color,
                  boxShadow: `4px 4px 0 ${p.color}`,
                  background: '#ffffff',
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 14 }}>{p.icon}</div>
                <div
                  style={{
                    fontFamily: "'Press Start 2P', monospace",
                    fontSize: 8,
                    color: p.color,
                    lineHeight: 1.6,
                    marginBottom: 10,
                  }}
                >
                  {p.title}
                </div>
                <p
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 12,
                    color: '#44403c',
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {p.body}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div
            className="game-panel"
            style={{
              marginTop: 60,
              padding: '40px 24px',
              textAlign: 'center',
              border: '3px solid #C84B31',
              boxShadow: '8px 8px 0 #121214',
              background: '#DAD5CC',
            }}
          >
            <h3
              style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: 'clamp(14px, 2.2vw, 20px)',
                color: '#121214',
                marginBottom: 16,
              }}
            >
              READY TO TEST YOUR CODING INSTINCTS?
            </h3>
            <p
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 14,
                color: '#333230',
                maxWidth: 600,
                margin: '0 auto 24px',
                lineHeight: 1.8,
              }}
            >
              Create a free private lobby, invite your friends or team, and find out who among you is the real imposter.
            </p>
            <button
              onClick={handlePlayNow}
              className="pixel-btn pixel-btn-blue"
              style={{ fontSize: 11, padding: '12px 28px', cursor: 'pointer' }}
            >
              ▶ CREATE A LOBBY NOW
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
