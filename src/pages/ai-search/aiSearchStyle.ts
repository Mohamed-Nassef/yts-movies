import { keyframes } from '@emotion/react';

const pulse = keyframes`
  0% { box-shadow: 0 0 10px #89c40344, 0 0 20px #89c40322; }
  50% { box-shadow: 0 0 20px #89c403aa, 0 0 40px #89c40366; }
  100% { box-shadow: 0 0 10px #89c40344, 0 0 20px #89c40322; }
`;

export const pulseContainer = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 3,
    border: '1px solid #333',
    backgroundColor: '#0f0f0f7c',
    px: 2,
    pt: 6,
    pb: 14,
    animation: `${pulse} 2.5s ease-in-out infinite`,
};