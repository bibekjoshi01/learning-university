import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Tabflux — Build a career for the AI era';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ background: '#F7F7F4', color: '#111315', display: 'flex', width: '100%', height: '100%', padding: 72, flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, fontSize: 32, fontWeight: 800 }}>
        <div style={{ width: 58, height: 58, borderRadius: 13, background: '#315BEA', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 38 }}>T</div>
        Tabflux
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: 74, lineHeight: 1.02, letterSpacing: '-3px' }}>Choose a career.</div>
        <div style={{ fontSize: 74, lineHeight: 1.02, letterSpacing: '-3px', color: '#315BEA' }}>We’ll map the path.</div>
        <div style={{ marginTop: 28, color: '#52525b', fontSize: 25 }}>Career-first learning for the AI era.</div>
      </div>
    </div>,
    size,
  );
}
