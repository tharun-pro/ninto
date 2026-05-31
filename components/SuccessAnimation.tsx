import type React from 'react'

const iconStyle: React.CSSProperties = {
  fontSize: '15px',
  color: '#00a000',
  lineHeight: 1,
}

const foProps = { width: 34, height: 34 }

const NodeIcon = ({ x, y, icon }: { x: number; y: number; icon: string }) => (
  <foreignObject x={x - 17} y={y - 17} {...foProps}>
    {/* @ts-ignore */}
    <div xmlns="http://www.w3.org/1999/xhtml" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
      <i className={`ti ${icon}`} style={iconStyle} />
    </div>
  </foreignObject>
)

export default function SuccessAnimation() {
  return (
    <div className="ct-celebrate" aria-hidden="true">
      <svg className="cc-network" viewBox="0 0 200 212" fill="none" xmlns="http://www.w3.org/2000/svg">

        {/* ── Connection lines ── */}
        <line className="cc-line l1" x1="28" y1="105" x2="100" y2="28" />
        <line className="cc-line l2" x1="100" y1="28" x2="172" y2="105" />
        <line className="cc-line l3" x1="172" y1="105" x2="100" y2="178" />
        <line className="cc-line l4" x1="100" y1="178" x2="28" y2="105" />

        {/* ── Ninto logo ── */}
        <g className="cc-logo-group">
          <g transform="translate(46 50) scale(0.5)">
            <path d="M53.7596 97.5764C59.493 86.6339 71.0793 79.7407 83.7384 79.7407C97.6774 79.7407 106.706 94.0062 100.393 106.055L75.3321 153.886C69.9962 164.07 59.2133 170.485 47.4319 170.485C32.8379 170.485 23.3846 155.549 29.9943 142.934L53.7596 97.5764Z" fill="#00a000"/>
            <path d="M138.668 60.1144C144.004 49.9306 154.787 43.5154 166.568 43.5154C181.162 43.5154 190.615 58.4514 184.006 71.0664L159.592 117.661C154.257 127.844 143.474 134.26 131.692 134.26C117.098 134.26 107.645 119.324 114.255 106.709L138.668 60.1144Z" fill="#00a000"/>
            <path d="M88.9248 155.036C92.6761 148.017 100.15 143.61 108.304 143.61H128.161C136.343 143.61 141.615 152.015 137.851 159.058C134.1 166.078 126.626 170.484 118.472 170.484H98.6145C90.433 170.484 85.1608 162.079 88.9248 155.036Z" fill="#00a000"/>
          </g>
        </g>

        {/* ── Pulse rings ── */}
        <circle className="cc-pulse-ring r1" cx="100" cy="104" r="34" stroke="#00a000" />
        <circle className="cc-pulse-ring r2" cx="100" cy="104" r="34" stroke="#00a000" />

        {/* ── Node: Clinic (left 28,105) ── */}
        <g className="cc-node n1">
          <circle className="cc-node-bg" cx="28" cy="105" r="17" />
          <NodeIcon x={28} y={105} icon="ti-building-hospital" />
          <text className="cc-label" x="28" y="129" textAnchor="middle">Clinic</text>
        </g>

        {/* ── Node: Doctor (top 100,28) ── */}
        <g className="cc-node n2">
          <circle className="cc-node-bg" cx="100" cy="28" r="17" />
          <NodeIcon x={100} y={28} icon="ti-stethoscope" />
          <text className="cc-label" x="100" y="10" textAnchor="middle">Doctor</text>
        </g>

        {/* ── Node: Lab (right 172,105) ── */}
        <g className="cc-node n3">
          <circle className="cc-node-bg" cx="172" cy="105" r="17" />
          <NodeIcon x={172} y={105} icon="ti-microscope" />
          <text className="cc-label" x="172" y="129" textAnchor="middle">Lab</text>
        </g>

        {/* ── Node: Patient (bottom 100,178) ── */}
        <g className="cc-node n4">
          <circle className="cc-node-bg" cx="100" cy="178" r="17" />
          <NodeIcon x={100} y={178} icon="ti-user-heart" />
          <text className="cc-label" x="100" y="202" textAnchor="middle">Patient</text>
        </g>

      </svg>
    </div>
  )
}
