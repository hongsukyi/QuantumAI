export default function DoubleSlitDiagram() {
  const scenarios = [
    {
      title: "시나리오 1",
      subtitle: "슬릿 1개만 열림",
      slits: [false, true],
      pattern: "single",
      result: "봉우리 1개",
      color: "#3b82f6",
      bgColor: "#eff6ff"
    },
    {
      title: "시나리오 2", 
      subtitle: "슬릿 2개 + 관측",
      slits: [true, true],
      pattern: "double",
      result: "봉우리 2개",
      color: "#f59e0b",
      bgColor: "#fffbeb",
      observer: true
    },
    {
      title: "시나리오 3",
      subtitle: "슬릿 2개 + 관측 없음",
      slits: [true, true],
      pattern: "interference",
      result: "간섭무늬!",
      color: "#ef4444",
      bgColor: "#fef2f2"
    }
  ];

  const renderPattern = (type, color) => {
    if (type === "single") {
      return (
        <g>
          <ellipse cx="280" cy="100" rx="12" ry="45" fill={color} opacity="0.6" />
          <ellipse cx="280" cy="100" rx="6" ry="30" fill={color} opacity="0.9" />
        </g>
      );
    }
    if (type === "double") {
      return (
        <g>
          <ellipse cx="275" cy="70" rx="10" ry="30" fill={color} opacity="0.6" />
          <ellipse cx="275" cy="70" rx="5" ry="20" fill={color} opacity="0.9" />
          <ellipse cx="275" cy="130" rx="10" ry="30" fill={color} opacity="0.6" />
          <ellipse cx="275" cy="130" rx="5" ry="20" fill={color} opacity="0.9" />
        </g>
      );
    }
    if (type === "interference") {
      const bars = [];
      for (let i = 0; i < 9; i++) {
        const y = 30 + i * 17;
        const opacity = i % 2 === 0 ? 0.85 : 0.15;
        bars.push(
          <rect key={i} x="268" y={y} width="16" height="12" rx="2"
                fill={color} opacity={opacity} />
        );
      }
      return <g>{bars}</g>;
    }
  };

  return (
    <div style={{
      fontFamily: "'Segoe UI', sans-serif",
      background: "#ffffff",
      padding: "30px",
      maxWidth: "960px",
      margin: "0 auto"
    }}>
      <h2 style={{
        textAlign: "center",
        fontSize: "22px",
        color: "#1e293b",
        marginBottom: "8px",
        fontWeight: "700"
      }}>
        이중 슬릿 실험 — 세 가지 시나리오
      </h2>
      <p style={{
        textAlign: "center",
        fontSize: "13px",
        color: "#64748b",
        marginBottom: "28px"
      }}>
        1장. 양자 세계의 문을 열다
      </p>

      <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
        {scenarios.map((s, idx) => (
          <div key={idx} style={{
            flex: 1,
            background: s.bgColor,
            borderRadius: "12px",
            border: `2px solid ${s.color}30`,
            padding: "16px 12px 12px",
            position: "relative"
          }}>
            <div style={{
              textAlign: "center",
              marginBottom: "10px"
            }}>
              <div style={{
                fontSize: "14px",
                fontWeight: "700",
                color: s.color,
                marginBottom: "2px"
              }}>{s.title}</div>
              <div style={{
                fontSize: "12px",
                color: "#475569",
                fontWeight: "500"
              }}>{s.subtitle}</div>
            </div>

            <svg viewBox="0 0 300 200" style={{
              width: "100%",
              height: "180px",
              display: "block"
            }}>
              {/* 전자총 */}
              <rect x="10" y="85" width="40" height="30" rx="4" fill="#475569" />
              <text x="30" y="104" textAnchor="middle" fontSize="9" fill="white" fontWeight="600">e⁻</text>
              
              {/* 전자 경로 */}
              <line x1="50" y1="100" x2="110" y2="100" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4,3" />
              
              {/* 벽 (슬릿) */}
              <rect x="110" y="10" width="8" height="35" fill="#334155" rx="1" />
              {s.slits[0] ? (
                <rect x="112" y="45" width="4" height="20" fill={s.bgColor} />
              ) : (
                <rect x="110" y="45" width="8" height="20" fill="#334155" rx="1" />
              )}
              <rect x="110" y="65" width="8" height="30" fill="#334155" rx="1" />
              {s.slits[1] ? (
                <rect x="112" y="95" width="4" height="20" fill={s.bgColor} />
              ) : (
                <rect x="110" y="95" width="8" height="20" fill="#334155" rx="1" />
              )}
              <rect x="110" y="115" width="8" height="75" fill="#334155" rx="1" />

              {/* 관측기 */}
              {s.observer && (
                <g>
                  <circle cx="135" cy="55" r="10" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
                  <circle cx="135" cy="55" r="3" fill="#f59e0b" />
                  <text x="135" y="75" textAnchor="middle" fontSize="8" fill="#92400e">👁</text>
                  
                  <circle cx="135" cy="105" r="10" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
                  <circle cx="135" cy="105" r="3" fill="#f59e0b" />
                  <text x="135" y="125" textAnchor="middle" fontSize="8" fill="#92400e">👁</text>
                </g>
              )}

              {/* 경로선 (슬릿 → 스크린) */}
              {s.pattern === "single" && (
                <g>
                  <line x1="118" y1="105" x2="268" y2="100" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3" />
                </g>
              )}
              {s.pattern === "double" && (
                <g>
                  <line x1="118" y1="55" x2="268" y2="70" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3" />
                  <line x1="118" y1="105" x2="268" y2="130" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3" />
                </g>
              )}
              {s.pattern === "interference" && (
                <g>
                  <path d="M118,55 Q190,80 268,60" fill="none" stroke={s.color} strokeWidth="1" strokeDasharray="3,3" opacity="0.5" />
                  <path d="M118,55 Q190,120 268,140" fill="none" stroke={s.color} strokeWidth="1" strokeDasharray="3,3" opacity="0.5" />
                  <path d="M118,105 Q190,80 268,60" fill="none" stroke={s.color} strokeWidth="1" strokeDasharray="3,3" opacity="0.5" />
                  <path d="M118,105 Q190,120 268,140" fill="none" stroke={s.color} strokeWidth="1" strokeDasharray="3,3" opacity="0.5" />
                </g>
              )}

              {/* 스크린 */}
              <rect x="265" y="10" width="22" height="180" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" rx="2" />
              
              {/* 패턴 */}
              {renderPattern(s.pattern, s.color)}

              {/* 라벨 */}
              <text x="30" y="130" textAnchor="middle" fontSize="8" fill="#64748b">전자총</text>
              <text x="114" y="198" textAnchor="middle" fontSize="8" fill="#64748b">슬릿</text>
              <text x="276" y="198" textAnchor="middle" fontSize="8" fill="#64748b">스크린</text>
            </svg>

            <div style={{
              textAlign: "center",
              padding: "8px",
              background: s.color + "15",
              borderRadius: "8px",
              marginTop: "6px"
            }}>
              <div style={{
                fontSize: "14px",
                fontWeight: "700",
                color: s.color
              }}>{s.result}</div>
            </div>
          </div>
        ))}
      </div>

      {/* 하단 핵심 메시지 */}
      <div style={{
        display: "flex",
        gap: "12px",
        marginTop: "20px",
        justifyContent: "center"
      }}>
        {[
          { icon: "🔵", text: "전자 1개가 두 슬릿을 동시에 통과 → 중첩", color: "#3b82f6" },
          { icon: "🟡", text: "관측하면 간섭이 사라진다 → 측정의 본질", color: "#f59e0b" },
          { icon: "🔴", text: "수만 번 반복 후 패턴 출현 → Shots", color: "#ef4444" }
        ].map((item, i) => (
          <div key={i} style={{
            flex: 1,
            padding: "10px 12px",
            background: "#f8fafc",
            borderRadius: "8px",
            borderLeft: `3px solid ${item.color}`,
            fontSize: "12px",
            color: "#334155",
            lineHeight: "1.5"
          }}>
            <span style={{ marginRight: "6px" }}>{item.icon}</span>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}
