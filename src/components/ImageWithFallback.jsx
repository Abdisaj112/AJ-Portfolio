import { useState } from 'react';

const ImageWithFallback = ({ 
  src, 
  alt, 
  fallback = '/placeholder.svg',
  className = '',
  ...props 
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [loading, setLoading] = useState(true);

  const handleError = () => {
    setImgSrc(fallback);
    setLoading(false);
  };

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <div className="relative">
      {loading && (
        <div className={`absolute inset-0 bg-muted animate-pulse rounded ${className}`} />
      )}
      <img
        src={imgSrc}
        alt={alt}
        onError={handleError}
        onLoad={handleLoad}
        className={`${className} ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        {...props}
      />
    </div>
  );
};

export default ImageWithFallback;
