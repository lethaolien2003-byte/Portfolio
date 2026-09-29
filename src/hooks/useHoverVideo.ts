import { useRef, useCallback } from 'react';

/**
 * Custom Hook xử lý video tự động phát mượt mà khi hover và dừng khi rời chuột
 */
export function useHoverVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Trình duyệt tự chặn autoplay nếu chưa tương tác
        });
      }
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, []);

  return {
    videoRef,
    handleMouseEnter,
    handleMouseLeave
  };
}
