import { ReactNode } from 'react';

interface SkeletonLoaderProps {
  variant?: 'text' | 'card' | 'circle' | 'rectangle';
  width?: string | number;
  height?: string | number;
  count?: number; // For multiple skeleton items
  className?: string;
}

/**
 * ⭐ SKELETON LOADING STATES (Enhancement #19) ⭐
 * 
 * Animated placeholders while content loads
 * - Blog posts, service cards, images
 * - Shimmer animation effect
 * - Professional loading experience
 */

export function SkeletonLoader({
  variant = 'rectangle',
  width = '100%',
  height = '1rem',
  count = 1,
  className = '',
}: SkeletonLoaderProps) {
  const getVariantClass = () => {
    switch (variant) {
      case 'text':
        return 'skeleton-text';
      case 'circle':
        return 'skeleton-circle';
      case 'card':
        return 'skeleton';
      default:
        return 'skeleton';
    }
  };

  const skeletonStyle = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  };

  if (count > 1) {
    return (
      <div className="space-y-3">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className={`${getVariantClass()} ${className}`}
            style={skeletonStyle}
            aria-hidden="true"
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`${getVariantClass()} ${className}`}
      style={skeletonStyle}
      aria-hidden="true"
    />
  );
}

/**
 * Skeleton Card - Full card with multiple skeleton elements
 */
interface SkeletonCardProps {
  className?: string;
  showImage?: boolean;
  showTitle?: boolean;
  showDescription?: boolean;
  showButton?: boolean;
}

export function SkeletonCard({
  className = '',
  showImage = true,
  showTitle = true,
  showDescription = true,
  showButton = true,
}: SkeletonCardProps) {
  return (
    <div className={`glass-card ${className}`} aria-hidden="true">
      {showImage && (
        <div className="skeleton mb-4" style={{ height: '200px' }} />
      )}
      {showTitle && (
        <div className="skeleton-text mb-3" style={{ height: '1.5rem', width: '70%' }} />
      )}
      {showDescription && (
        <div className="space-y-2 mb-4">
          <div className="skeleton-text" style={{ width: '100%' }} />
          <div className="skeleton-text" style={{ width: '90%' }} />
          <div className="skeleton-text" style={{ width: '80%' }} />
        </div>
      )}
      {showButton && (
        <div className="skeleton" style={{ height: '2.5rem', width: '120px' }} />
      )}
    </div>
  );
}

/**
 * Skeleton Grid - Multiple skeleton cards in grid
 */
interface SkeletonGridProps {
  count?: number;
  columns?: number;
  className?: string;
}

export function SkeletonGrid({
  count = 6,
  columns = 3,
  className = '',
}: SkeletonGridProps) {
  return (
    <div
      className={`grid gap-6 ${className}`}
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      }}
      aria-hidden="true"
    >
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
}
