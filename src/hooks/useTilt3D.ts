import { useState, useCallback, CSSProperties } from 'react';

interface TiltState {
  rotateX: number;
  rotateY: number;
  scale: number;
}

/**
 * Custom Hook tạo hiệu ứng nghiêng 3D (3D Tilt Effect) theo tọa độ chuột
 * @param maxAngle Góc nghiêng tối đa (độ), mặc định 10
 */
export function useTilt3D(maxAngle: number = 8) {
  const [tilt, setTilt] = useState<TiltState>({ rotateX: 0, rotateY: 0, scale: 1 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -maxAngle;
      const rotateY = ((x - centerX) / centerX) * maxAngle;

      setTilt({ rotateX, rotateY, scale: 1.02 });
    },
    [maxAngle]
  );

  const handleMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0, scale: 1 });
  }, []);

  const tiltStyle: CSSProperties = {
    transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${tilt.scale})`,
    transition: 'transform 0.15s ease-out'
  };

  return {
    tiltStyle,
    handleMouseMove,
    handleMouseLeave
  };
}
